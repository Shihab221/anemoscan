// app/page.tsx  (Next.js App Router)
// or pages/index.tsx if you are using Pages Router

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#221112] text-white font-['Space_Grotesk','Noto_Sans',sans-serif]">
      {/* Navbar (full width) */}
      <header className="flex items-center justify-between border-b border-[#472426] px-6 lg:px-10 py-3">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 text-white">
            <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"/>
            </svg>
          </div>
          <h2 className="text-lg font-bold">AnemoScan</h2>
        </div>
        <nav className="flex gap-6">
          <a href="#" className="text-sm font-medium">Home</a>
          <a href="#" className="text-sm font-medium">About</a>
        </nav>
      </header>

      {/* Content with side padding */}
      <main className="flex-1 px-6 lg:px-10 py-10">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          {/* Hero Section */}
          <section
            className="flex flex-col items-center justify-center text-center px-4 py-16 rounded-xl bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.6)),url('https://lh3.googleusercontent.com/aida-public/AB6AXuAA2SZUxpddNrEscS1UTya04rac8WL03pKUFm_CNMizBXXu1bSHOmN4gKEtVw8FvUEampRPBApWXNeLKv1QFu1rP5l7NCB3jr6nuuDVz8A8NDJL1Pc_wBVOTVPSxpXZ7-mn-ifDyebV44EoD5-_FWHctNYvTtnyhU3kGVOZPrKvyDTXI6tRWEdP_74YMsogD5vsfDoquKLJw0RHn4HZ4sF4v7JlN7OhKAreAqp6NURQCfysdr_OLAS1gsLUUSYeDaUrODpPyjByfiw')",
            }}
          >
            <h1 className="text-3xl sm:text-5xl font-black max-w-3xl">
              Our Mission: Revolutionizing Preventive Healthcare
            </h1>
            <p className="mt-3 text-sm sm:text-base max-w-xl">
              Offline AI, private analysis, empowering communities worldwide.
            </p>
          </section>

          {/* Our Vision */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
            <p className="mb-8 text-base text-gray-200">
              Our vision is to create a world where healthcare is accessible, reliable, and innovative,
              ensuring a healthier future for everyone.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Global Reach",
                  desc: "Democratizing health access everywhere.",
                },
                {
                  title: "Data Sovereignty",
                  desc: "Secure, on-device data ownership.",
                },
                {
                  title: "Cognitive Diagnostics",
                  desc: "AI interprets subtle biological markers.",
                },
                {
                  title: "Biomarker Expansion",
                  desc: "Extending eye-based analysis for more conditions.",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2 rounded-lg border border-[#663336] bg-[#331a1b] p-4">
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="text-sm text-[#c89295]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* The AnemoScan Experience */}
          <section
            className="flex flex-col items-center justify-center text-center px-4 py-16 rounded-xl bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.6)),url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQRe52Bs7aBW9lzlE3xF6PfbvCRnyJwAcTY3aInTkgvF8sCaqb9YdrG61FcZoEIlNpI2TSmUI2gwvaN5kf-RNw6pQI5XKxaa3tqebN1Q18ykAS_cnQFuMMdF8WPf8X__MudtqK2qzYfYYvcWcAQ0qCD44Q_NXTh_e1SVty2xqiy4x2yHCgFhGDnwoxydTdlhuk9cQg7Ww-w6FCfh4RjT6soypk2AZgM6tB5d1P-62zwOGjKo5sX4CgUVAQPsd9xPAW5MFaozgrXWQ')",
            }}
          >
            <h1 className="text-3xl sm:text-5xl font-black max-w-3xl">See Health Differently</h1>
            <p className="mt-4 text-sm sm:text-base max-w-3xl text-gray-200">
              In every eye lies a story — a silent signal that can reveal much about our health. AnemoScan
              transforms these signals into actionable insights, harnessing AI without leaving your device.
            </p>
          </section>

          {/* Our Journey */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Our Journey</h2>
            <div className="space-y-6">
              {[
                { stage: "Concept Development", year: "2023" },
                { stage: "Prototype Testing", year: "2024" },
                { stage: "App Launch", year: "2025" },
                { stage: "Global Expansion", year: "2025" },
              ].map((j, i) => (
                <div key={i} className="flex justify-between border-l-2 border-[#663336] pl-4">
                  <p className="font-medium">{j.stage}</p>
                  <p className="text-[#c89295]">{j.year}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Core Values */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Core Values</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Accuracy", desc: "Precise and reliable results." },
                { title: "Privacy", desc: "Protecting user data." },
                { title: "Accessibility", desc: "Available to all." },
                { title: "Innovation", desc: "Advancing healthcare tech." },
              ].map((v, i) => (
                <div key={i} className="flex flex-col gap-2 rounded-lg border border-[#663336] bg-[#331a1b] p-4">
                  <h3 className="text-base font-bold">{v.title}</h3>
                  <p className="text-sm text-[#c89295]">{v.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Founders */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Founders & Developers</h2>
            <div className="space-y-6">
              {[
                { name: "Isha Das", role: "Co-Founder, Lead and Developer" },
                { name: "Shihab Ahemed", role: "Developer" },
              ].map((f, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-xl border border-[#663336] bg-[#331a1b]">
                  <div>
                    <p className="text-[#c89295] text-sm">Profile {i + 1}</p>
                    <p className="text-lg font-bold">{f.name}</p>
                    <p className="text-[#c89295] text-sm">{f.role}</p>
                  </div>
                  <div className="w-32 h-20 rounded-lg bg-[#472426]" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-[#c89295] text-sm">
        © 2025 AnemoScan. All rights reserved.
      </footer>
    </div>
  );
}
