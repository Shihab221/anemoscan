import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("anemoscan");
    const collection = db.collection("visits");

    const downloads = await collection.countDocuments({ type: "download" });

    return NextResponse.json({ downloads });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to load stats" }, { status: 500 });
  }
}
