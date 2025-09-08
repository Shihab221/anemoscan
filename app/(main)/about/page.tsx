// app/page.tsx  (Next.js App Router)
// or pages/index.tsx if you are using Pages Router
"use client"
import Image from "next/image";
import { AiFillSecurityScan, AiFillUpSquare, AiOutlineArrowUp, AiOutlineHighlight, AiOutlinePieChart, AiOutlineSearch, AiOutlineSecurityScan } from "react-icons/ai";
import { FaGlobe, FaLightbulb } from "react-icons/fa";
import useTrackVisit from "@/hooks/useTrackVisit";

export default function About() {
  useTrackVisit();
  return (
    <div className="min-h-screen flex flex-col bg-[#221112] text-white font-['Space_Grotesk','Noto_Sans',sans-serif]">
      {/* Navbar (full width) */}
      {/* <header className="flex items-center justify-between border-b border-[#472426] px-6 lg:px-10 py-3">
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
      </header> */}

      {/* Content with side padding */}
      <main className="flex-1 px-6 lg:px-10 py-10">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {/* Hero Section */}
          <section
            className="flex flex-col items-center justify-center text-center px-4 py-48 rounded-xl bg-cover bg-center"
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
          <section className="py-10">
            <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
            <p className="mb-8 text-base text-gray-200 max-w-2xl">
              Our vision is to create a world where healthcare is accessible, reliable, and innovative,
              ensuring a healthier future for everyone.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: FaGlobe,
                  title: "Global Reach",
                  desc: "Democratizing health access by bringing advanced diagnostics to every corner, regardless of connectivity.",
                },
                { 
                  icon: AiFillSecurityScan,
                  title: "Data Sovereignty",
                  desc: "Empowering individuals with complete control over their health data through secure, on-device processing.",
                },
                {
                  icon: FaLightbulb,
                  title: "Cognitive Diagnostics",
                  desc: "Pioneering the next generation of AI that interprets subtle biological markers for early, non-invasive detection.",
                },
                {
                  icon: AiFillUpSquare,
                  title: "Biomarker Expansion",
                  desc: "Extending the frontiers of eye-based analysis to identify a spectrum of health indicators beyond current capabilities.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return(
                <div key={i} className="flex flex-col gap-2 rounded-lg border border-[#663336] bg-[#331a1b] p-4">
                  
                  <Icon className="text-white mb-2" size={24} />
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="text-sm text-[#c89295]">{item.desc}</p>
                </div>
              )})}
            </div>
          </section>

          {/* The AnemoScan Experience */}
          <h2 className="text-2xl font-bold m-0 p-0">The AnemoScan Experience</h2>
          <div
            className="flex flex-col items-center justify-center text-center px-4 py-36 rounded-xl bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.6)),url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQRe52Bs7aBW9lzlE3xF6PfbvCRnyJwAcTY3aInTkgvF8sCaqb9YdrG61FcZoEIlNpI2TSmUI2gwvaN5kf-RNw6pQI5XKxaa3tqebN1Q18ykAS_cnQFuMMdF8WPf8X__MudtqK2qzYfYYvcWcAQ0qCD44Q_NXTh_e1SVty2xqiy4x2yHCgFhGDnwoxydTdlhuk9cQg7Ww-w6FCfh4RjT6soypk2AZgM6tB5d1P-62zwOGjKo5sX4CgUVAQPsd9xPAW5MFaozgrXWQ')",
            }}
          >
            <h1 className="text-3xl sm:text-5xl font-black max-w-3xl">See Health Differently</h1>
            <p className="mt-4 text-sm sm:text-base max-w-3xl text-gray-200">
              In every eye lies a story — a silent signal that can reveal much about our health. AnemoScan transforms these silent signals into actionable insights, harnessing the power of AI without ever leaving your device. Fast, private, and intuitive, it empowers communities everywhere, from bustling cities to the most remote villages. Every scan is a step toward early detection, prevention, and care — bridging the gap between technology and human well-being. AnemoScan is not just an app; it’s a vision of healthcare reimagined, where access, trust, innovation, and impact converge in a seamless, glowing interface.
            </p>
          </div>

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
                { icon:AiOutlineSearch , title: "Precision", desc: "Leveraging advanced AI for unparalleled accuracy, ensuring reliable health insights every time." },
                { icon:AiOutlineSecurityScan , title: "Empowerment", desc: "Putting diagnostic power directly into the hands of communities, fostering self-care and proactive health." },
                { icon:AiOutlinePieChart, title: "Integrity", desc: "Upholding the highest standards of data privacy and ethical AI, building unbreakable trust with our users." },
                { icon:AiOutlineHighlight, title: "Visionary Impact", desc: "Continuously innovating to extend diagnostic capabilities, shaping a future where preventive health is universal." },
              ].map((v, i) => {
                const Icon = v.icon;
                return(
                <div key={i} className="flex flex-col gap-2 rounded-lg border border-[#663336] bg-[#331a1b] p-4">
                  <Icon className="text-white mb-2" size={24} />
                  <h3 className="text-base font-bold">{v.title}</h3>
                  <p className="text-sm text-[#c89295]">{v.desc}</p>
                </div>
              )})}
            </div>
          </section>

          {/* Founders */}
          <section className="py-10">
            <h2 className="text-2xl font-bold mb-6">Founders & Developers</h2>
            <div className="space-y-6">
              {[
                { name: "Isha Das", role: "Founder, Developer" },
                { name: "Shihab Ahemed", role: "Co-Founder, Developer" },
              ].map((f, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-xl border border-[#663336] bg-[#331a1b]">
                  
                  <div className="text-center flex flex-col items-start">
                    <Image
                      src={``}
                      alt={f.name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-[#c89295] mb-1"
                    />
                    
                    <p className="text-lg font-bold mb-1">{f.name}</p>
                    <p className="text-[#c89295] text-sm">{f.role}</p>
                  </div>
                  
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
