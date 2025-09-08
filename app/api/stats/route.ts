import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("anemoscan");
    const collection = db.collection("visits");

    const downloads = await collection.countDocuments({ type: "download" });
    const totalVisits = await collection.countDocuments({ type: "visit" });

    // calculate today's visits
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const visitsToday = await collection.countDocuments({
      type: "visit",
      createdAt: { $gte: today },
    });

    return NextResponse.json({
      downloads,
      totalVisits,
      visitsToday,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to load stats" }, { status: 500 });
  }
}
