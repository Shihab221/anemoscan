"use client";

import VisitsChart from "@/components/VisitsChart";
import { FaHome } from "react-icons/fa";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DashboardPage() {
  const { data, error, isLoading } = useSWR("/api/stats", fetcher, { refreshInterval: 4000 });
  const { data: latest } = useSWR("/api/latest", fetcher, { refreshInterval: 4000 });
  
  if (error) return <div>Error loading stats</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-[#221112] text-white min-h-screen flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 lg:px-40">
      {/* sidebar */}
      <div className="w-full lg:w-1/5 flex flex-col items-start p-4 h-fit  rounded-lg">
        <h4 className="text-xl font-bold mb-4">AnemoScan Admin</h4>
        <button className="flex flex-row w-full items-center gap-2 bg-[#e53e3e] p-2 px-4 rounded-lg text-sm">
          <FaHome size={20} />
          Dashboard
        </button>
      </div>

      {/* main content */}
      <div className="w-full lg:w-4/5 flex flex-col">
        <h1 className="text-xl font-bold mb-6">Dashboard Overview</h1>
        
        {/* Stats */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex flex-col gap-2 items-start bg-[#351918] p-4 py-5 rounded-md w-full lg:w-56">
            <p className="text-gray-300">Total APK Downloads</p>
            <p className="text-2xl font-bold">{data.downloads}</p>
          </div>
          <div className="flex flex-col gap-2 items-start bg-[#351918] p-4 py-5 rounded-md w-full lg:w-56">
            <p className="text-gray-300">Total Visits</p>
            <p className="text-2xl font-bold">{data.totalVisits}</p>
          </div>
          <div className="flex flex-col gap-2 items-start bg-[#351918] p-4 py-5 rounded-md w-full lg:w-56">
            <p className="text-gray-300">Visits Today</p>
            <p className="text-2xl font-bold">{data.visitsToday}</p>
          </div>
          <div className="flex flex-col gap-2 items-start bg-[#351918] p-4 py-5 rounded-md w-full lg:w-56">
            <p className="text-gray-300">Region</p>
            <p className="text-2xl font-bold">Asia</p>
          </div>
        </div>

        {/* Visits Chart */}
        <div className=" rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Visits in the Last 7 Days</h2>
          <VisitsChart data={data.visitsLast7Days} />
          {/* <p className="text-sm text-gray-400 mt-2">
            Today's visits in the chart: {data.visitsLast7Days[data.visitsLast7Days.length - 1]?.visits || 0}
          </p> */}
        </div>
        
        {/* Latest Activity */}
        <div className=" rounded-lg py-6">
          <h2 className="text-xl font-semibold mb-4">Recent Downloads/Visits</h2>
          <table className="w-full border-collapse border border-[#503130] text-sm text-[#cb9193]">
            <thead>
              <tr className="bg-[#351918] text-left text-gray-300">
                <th className="p-3">Date</th>
                <th className="p-3">Time</th>
                <th className="p-3">Type</th>
                <th className="p-3">Page</th>
              </tr>
            </thead>
            <tbody>
              {latest?.actions?.map((action: any) => {
                const dateObj = new Date(action.createdAt);
                const date = dateObj.toLocaleDateString();
                const time = dateObj.toLocaleTimeString();
                return (
                  <tr key={action.id} className="border-b border-[#503130] hover:bg-[#351918]">
                    <td className="p-3">{date}</td>
                    <td className="p-3">{time}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        action.type === "download" 
                          ? "bg-green-800 text-green-300" 
                          : "bg-blue-800 text-blue-300"
                      }`}>
                        {action.type}
                      </span>
                    </td>
                    <td className="p-3">{action.page}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}