// app/api/latest/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("anemoscan");

  // Merge visits + downloads into one list
  const visits = await db.collection("visits")
    .find({})
    .sort({ createdAt: -1 })
    .limit(10)
    .toArray();

  const downloads = await db.collection("downloads")
    .find({})
    .sort({ createdAt: -1 })
    .limit(10)
    .toArray();

  // Combine and sort again by createdAt
  const merged = [...visits, ...downloads]
    .sort((a, b) => (b.createdAt?.getTime?.() || 0) - (a.createdAt?.getTime?.() || 0))
    .slice(0, 10);

  // Convert ObjectId and Date to strings (Next.js requires JSON safe data)
  const safeData = merged.map(item => ({
    id: item._id.toString(),
    type: item.type,
    page: item.page || "",
    createdAt: item.createdAt ? new Date(item.createdAt).toISOString() : "",
  }));

  return NextResponse.json({ actions: safeData });
}
