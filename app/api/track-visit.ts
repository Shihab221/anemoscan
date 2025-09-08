import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

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
    const client = await clientPromise;
    const db = client.db();
    const visitsCollection = db.collection('visits');
    const downloadsCollection = db.collection('downloads');

    if (req.method === 'POST') {
      const { page, timestamp, referrer, type } = req.body;
      
      if (type === 'download') {
        // Track APK download
        await downloadsCollection.insertOne({
          timestamp: new Date(timestamp || new Date()),
          userAgent: req.headers['user-agent'],
          ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        });
        
        const downloadCount = await downloadsCollection.countDocuments();
        res.status(200).json({ success: true, downloadCount });
        return;
      }
      
      // Track page visit
      await visitsCollection.insertOne({
        page: page || '/',
        timestamp: new Date(timestamp || new Date()),
        referrer: referrer || 'Direct',
        userAgent: req.headers['user-agent'],
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      });
      
      res.status(200).json({ success: true });
    } else if (req.method === 'GET') {
      // Return visit statistics
      const now = new Date();
      const startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // Last 7 days
      
      // Get visits from the last 7 days
      const visits = await visitsCollection.find({
        timestamp: { $gte: startDate }
      }).sort({ timestamp: -1 }).toArray();
      
      // Get today's visits
      const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const visitsToday = await visitsCollection.countDocuments({
        timestamp: { $gte: todayStart }
      });
      
      // Get total visits
      const totalVisits = await visitsCollection.countDocuments();
      
      // Get total downloads
      const totalApkDownloads = await downloadsCollection.countDocuments();
      
      // Group visits by page
      const pageStats = await visitsCollection.aggregate([
        {
          $match: {
            timestamp: { $gte: startDate }
          }
        },
        {
          $group: {
            _id: '$page',
            count: { $sum: 1 }
          }
        }
      ]).toArray();
      
      // Convert to the format expected by the frontend
      const pageStatsObject = pageStats.reduce((acc, item) => {
        acc[item._id] = item.count;
        return acc;
      }, {} as Record<string, number>);
      
      res.status(200).json({
        totalVisits,
        visitsToday,
        totalApkDownloads,
        pageStats: pageStatsObject,
        visits: visits.slice(0, 10) // Last 10 visits
      });
    } else {
      res.setHeader('Allow', ['GET', 'POST', 'OPTIONS']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('MongoDB error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}