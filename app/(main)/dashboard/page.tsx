"use client"
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DashboardStats {
  totalVisits: number;
  visitsToday: number;
  totalApkDownloads: number;
  pageStats: Record<string, number>;
  recentVisits: any[];
}

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalVisits: 0,
    visitsToday: 0,
    totalApkDownloads: 0,
    pageStats: {},
    recentVisits: []
  });

  const [avgSessionTime] = useState('5m 30s');

  // Fetch visit data from API
  useEffect(() => {
    const fetchVisitData = async () => {
      try {
        const response = await fetch('/api/track-visit');
        const data = await response.json();
        
        setStats({
          totalVisits: data.totalVisits,
          visitsToday: data.visitsToday,
          totalApkDownloads: data.totalApkDownloads,
          pageStats: data.pageStats,
          recentVisits: data.visits
        });
      } catch (error) {
        console.error('Error fetching visit data:', error);
      }
    };

    fetchVisitData();
    
    // Set up interval to refresh data periodically
    const interval = setInterval(fetchVisitData, 5000); // Refresh every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Prepare chart data
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Visits',
        data: [120, 190, 210, 180, 240, 160, 140],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'APK Downloads',
        data: [90, 150, 130, 170, 200, 110, 100],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Daily Visits and Downloads',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Format page names for display
  const formatPageName = (page: string) => {
    if (page === '/') return 'Home';
    if (page === '/privacy') return 'Privacy Policy';
    return page;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">Total Visits</h2>
            <p className="text-3xl font-bold text-gray-800">{stats.totalVisits.toLocaleString()}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">Visits Today</h2>
            <p className="text-3xl font-bold text-gray-800">{stats.visitsToday.toLocaleString()}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">Total APK Downloads</h2>
            <p className="text-3xl font-bold text-gray-800">{stats.totalApkDownloads.toLocaleString()}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">Avg. Time Per Session</h2>
            <p className="text-3xl font-bold text-gray-800">{avgSessionTime}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Daily Visits, APK Downloads, and Avg. Session Time
              </h2>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                +12%
              </span>
            </div>
            <div className="text-sm text-gray-500 mb-4">
              Last: 7 Days <span className="text-green-600">+12%</span>
            </div>
            <div className="h-80">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
          
          {/* Page Visit Stats */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Page Visits</h2>
            <div className="space-y-3">
              {Object.entries(stats.pageStats).map(([page, count]) => (
                <div key={page} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{formatPageName(page)}</span>
                  <span className="text-sm font-semibold text-gray-800">{count} visits</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {/* Recent Visits Table */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Visits</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referrer</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {stats.recentVisits.map((visit, index) => (
                    <tr key={index}>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatPageName(visit.page)}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(visit.timestamp).toLocaleString()}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {visit.referrer || 'Direct'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;