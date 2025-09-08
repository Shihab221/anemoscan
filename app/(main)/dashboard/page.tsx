"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DashboardPage() {
  const { data, error, isLoading } = useSWR("/api/stats", fetcher, { refreshInterval: 4000 });

  if (error) return <div>Error loading stats</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <p>Total Downloads: {data.downloads}</p>
      <p>Total Visits: {data.totalVisits}</p>
      <p>Visits Today: {data.visitsToday}</p>
    </div>
  );
}
