import { NextApiRequest, NextApiResponse } from 'next';

// Simple in-memory store for visits
let visits: any[] = [];
let downloadCount = 0;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { page, timestamp, referrer, type } = req.body;
      
      if (type === 'download') {
        // Track APK download
        downloadCount++;
        res.status(200).json({ success: true, downloadCount });
        return;
      }
      
      // Track page visit with fallbacks
      visits.push({
        page: page || '/',
        timestamp: timestamp ? new Date(timestamp) : new Date(),
        referrer: referrer || 'Direct',
      });
      
      // Limit stored visits to prevent memory issues
      if (visits.length > 1000) {
        visits = visits.slice(-1000);
      }
      
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error tracking visit:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'GET') {
    // Return visit statistics
    const now = new Date();
    const startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // Last 7 days
    
    // Filter visits by date
    const filteredVisits = visits.filter(visit => 
      new Date(visit.timestamp) >= startDate
    );
    
    // Group by page
    const pageStats = filteredVisits.reduce((acc, visit) => {
      if (!acc[visit.page]) {
        acc[visit.page] = 0;
      }
      acc[visit.page]++;
      return acc;
    }, {} as Record<string, number>);
    
    // Get total visits
    const totalVisits = visits.length;
    
    // Get visits today
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const visitsToday = visits.filter(visit => 
      new Date(visit.timestamp) >= todayStart
    ).length;
    
    res.status(200).json({
      totalVisits,
      visitsToday,
      totalApkDownloads: downloadCount,
      pageStats,
      visits: filteredVisits.slice(-10).reverse() // Last 10 visits
    });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}