import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'GET') {
      // Track the download in database
      const client = await clientPromise;
      const db = client.db();
      const downloadsCollection = db.collection('downloads');
      
      await downloadsCollection.insertOne({
        timestamp: new Date(),
        userAgent: req.headers['user-agent'],
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      });

      // Path to your APK file - update this to your actual file path
      const filePath = path.join(process.cwd(), 'public', 'app.apk');
      
      // Check if file exists
      if (!fs.existsSync(filePath)) {
        res.status(404).json({ error: 'APK file not found' });
        return;
      }
      
      // Set headers for file download
      res.setHeader('Content-Disposition', 'attachment; filename=app.apk');
      res.setHeader('Content-Type', 'application/vnd.android.package-archive');
      
      // Create read stream and pipe to response
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    } else {
      res.setHeader('Allow', ['GET', 'OPTIONS']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}