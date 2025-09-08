// pages/api/visit.ts
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/mongodb";
import Visit from "../../models/visit";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  try {
    await dbConnect();
    const { path, type } = req.body;

    if (!path) return res.status(400).json({ error: "Missing path" });

    await Visit.create({ path, type: type || "page" });

    res.status(201).json({ success: true });
  } catch (e: any) {
    console.error("Visit API error:", e);
    res.status(500).json({ error: "Server error" });
  }
}
