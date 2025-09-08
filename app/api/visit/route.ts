import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { page } = await req.json();

    const client = await clientPromise;
    const db = client.db("anemoscan");
    const collection = db.collection("visits");

    await collection.insertOne({
      type: "visit",
      page,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Visit log error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
