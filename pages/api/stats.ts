// pages/api/stats.ts
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/mongodb";
import Visit from "../../models/visit";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    const total = await Visit.countDocuments({});
    const downloads = await Visit.countDocuments({ type: "download" });
    const pages = await Visit.countDocuments({ type: "page" });

    res.json({ total, downloads, pages });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}
