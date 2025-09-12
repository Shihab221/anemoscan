import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { page, type = "visit" } = await req.json();

    // Basic validation
    if (!page) {
      return NextResponse.json(
        { success: false, error: "Page parameter is required" },
        { status: 400 }
      );
    }

    // Validate type
    if (type !== "visit" && type !== "download") {
      return NextResponse.json(
        { success: false, error: "Invalid type parameter" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("anemoscan");
    const collection = db.collection("visits");

    // Add user IP for basic analytics (consider privacy regulations)
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    
    await collection.insertOne({
      type,
      page,
      ip,
      userAgent: req.headers.get('user-agent') || 'unknown',
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Visit log error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}