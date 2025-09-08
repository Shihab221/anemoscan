import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
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
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}