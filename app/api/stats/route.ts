// import { NextResponse } from "next/server";
// import clientPromise from "@/lib/mongodb";

// export async function GET() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("anemoscan");
//     const collection = db.collection("visits");

//     const downloads = await collection.countDocuments({ type: "download" });
//     const totalVisits = await collection.countDocuments({ type: "visit" });

//     // calculate today's visits
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     const visitsToday = await collection.countDocuments({
//       type: "visit",
//       createdAt: { $gte: today },
//     });

//     return NextResponse.json({
//       downloads,
//       totalVisits,
//       visitsToday,
//     });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Failed to load stats" }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("anemoscan");
    const collection = db.collection("visits");

    const downloads = await collection.countDocuments({ type: "download" });
    const totalVisits = await collection.countDocuments({ type: "visit" });

    // Calculate today's visits
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const visitsToday = await collection.countDocuments({
      type: "visit",
      createdAt: { $gte: today, $lt: tomorrow },
    });

    // Get visits for the last 7 days (including today)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6); // 6 days ago + today = 7 days
    sevenDaysAgo.setHours(0, 0, 0, 0);

    // Generate all dates for the last 7 days
    const dateArray = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);
      dateArray.push(new Date(date));
    }

    // Query for visits in the last 7 days
    const visitsData = await collection.aggregate([
      {
        $match: {
          type: "visit",
          createdAt: { $gte: sevenDaysAgo }
        }
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$createdAt"
            }
          },
          visits: { $sum: 1 }
        }
      }
    ]).toArray();

    // Create a map of date to visits
    const visitsMap = new Map();
    visitsData.forEach(item => {
      visitsMap.set(item._id, item.visits);
    });

    // Format data for the chart, ensuring all 7 days are represented
    const visitsLast7Days = dateArray.map(date => {
      const dateString = date.toISOString().split('T')[0];
      const formattedDate = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      
      return {
        date: formattedDate,
        visits: visitsMap.get(dateString) || 0
      };
    });

    return NextResponse.json({
      downloads,
      totalVisits,
      visitsToday,
      visitsLast7Days
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to load stats" }, { status: 500 });
  }
}