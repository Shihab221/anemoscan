"use client";

import { FaHome } from "react-icons/fa";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DashboardPage() {
  const { data, error, isLoading } = useSWR("/api/stats", fetcher, { refreshInterval: 4000 });
  const { data: latest } = useSWR("/api/latest", fetcher, { refreshInterval: 4000 });
  if (error) return <div>Error loading stats</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-[#221112] text-white min-h-screen  flex flex-row lg:flex-row gap-10 px-40">
      {/* sidebar */}
      <div className="w-1/5 flex flex-col items-start p-4  h-fit">
        <h4>AnemoScan Admin</h4>
        <button className="flex flex-row w-full items-center gap-2 bg-[#351918] p-2  px-4 rounded-lg mt-4 text-sm" >
          <FaHome size={20} />
          Dashboard
        </button>
      </div>

      {/* main startbar*/}
      <div className="w-4/5 flex flex-col">
        <h1 className="text-xl font-bold mb-4">Dashboard</h1>
        {/* Stat */}
        <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-2 items-start bg-[#351918] p-4 rounded-lg w-48">
            <p>Total Apk <br/> Downloads</p>
            <p className="text-xl font-bold">{data.downloads}</p>
          </div>
          <div className="flex flex-col gap-2 items-start bg-[#351918] p-4 rounded-lg w-48">
            <p>Total Visits</p>
            <p className="text-xl font-bold">{data.totalVisits}</p>
          </div>
          <div className="flex flex-col gap-2 items-start bg-[#351918] p-4 rounded-lg w-48">
            <p>Visits Today</p>
            <p className="text-xl font-bold">{data.visitsToday}</p>
          </div>
        </div>

        {/* Latest Activity */}
        <div>
          {/* Latest actions table */}
        <h2 className="text-lg font-semibold mb-3 pt-4">Recent Downloads/Visits</h2>
        <table className="w-full border-collapse border border-[#503130] rounded-full text-sm text-[#cb9193]">
          <thead>
            <tr className="bg-[#351918] text-left text-gray-300">
              <th className="p-2">Date</th>
              <th className="p-2">Time</th>
              <th className="p-2">Type</th>
              <th className="p-2">Page</th>
            </tr>
          </thead>
          <tbody>
            {latest?.actions?.map((action: any) => {
              const dateObj = new Date(action.createdAt);
              const date = dateObj.toLocaleDateString();
              const time = dateObj.toLocaleTimeString();
              return (
                <tr key={action.id} className="border border-[#503130] ">
                  <td className=" p-2">{date}</td>
                  <td className=" p-2">{time}</td>
                  <td className=" p-2">{action.type}</td>
                  <td className=" p-2">{action.page}</td>
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
