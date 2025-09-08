"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DashboardPage() {
  const { data, error, isLoading } = useSWR("/api/stats", fetcher, { refreshInterval: 4000 });

  if (error) return <div>Error loading stats</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-[#221112] text-white min-h-screen font-['Space_Grotesk','Noto_Sans',sans-serif] flex flex-row lg:flex-row gap-10">
      {/* sidebar */}
      <div>
        <h4>AnemoScan Admin</h4>
      </div>

      {/* main startbar*/}
      <div>
        <h1 className="text-xl font-bold mb-4">Dashboard</h1>
        {/* Stat */}
        <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-2 items-start bg-[#492121] p-4 rounded-lg w-48">
            <p>Total Apk <br/> Downloads</p>
            <p className="text-xl font-bold">{data.downloads}</p>
          </div>
          <div className="flex flex-col gap-2 items-start bg-[#492121] p-4 rounded-lg w-48">
            <p>Total Apk <br/> Total Visits</p>
            <p className="text-xl font-bold">{data.totalVisits}</p>
          </div>
          <div className="flex flex-col gap-2 items-start bg-[#492121] p-4 rounded-lg w-48">
            <p>Total Apk <br/> Visits Today</p>
            <p className="text-xl font-bold">{data.visitsToday}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
