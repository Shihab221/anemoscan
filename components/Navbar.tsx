"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';


const Navbar = () => {
    const handleDownload = async () => {
  // optional: hit your backend for analytics
  await fetch("/api/download", { method: "POST" });

  // direct Google Drive download link (from the link you gave)
  const directLink = "https://github.com/Shihab221/apk_host/releases/download/app/app-release.apk";

  // create hidden <a> to force browser download/save
  const a = document.createElement("a");
  a.href = directLink;
  a.setAttribute("download", "app.apk"); // suggested filename
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};



  return (
    <div>
      {/* Navigation */}
        <nav className="bg-[#221112] shadow-sm w-full h-auto px-10">
              <div className="flex flex-col sm:flex-row py-4 justify-between h-auto items-center">
                <div className="flex items-center">
                    <Image 
                    src={"/logo.png"}
                    alt='logo'
                    width={40}
                    height={40}
                    className='mr-2'
                    />
                  <h1 className="text-xl font-bold text-gray-200">AnemoScan</h1>
                </div>

                <div className='flex flex-col sm:flex-row justify-between w-full items-center'>
                    <div className="flex flex-col sm:flex-row sm:space-x-6 px-20">
                    <Link href="/" className="border-transparent text-gray-300 text-md hover:text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 font-medium">
                        Home
                    </Link>
                    <Link href="/about" className="border-transparent text-gray-300 text-md hover:text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 font-medium">
                        About
                    </Link>
                    <Link href="/privacy" className="border-transparent text-gray-300 text-md hover:text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 font-medium">
                        Privacy
                    </Link>
                    </div>

                    <div className='items-end py-2 sm:py-0 '>
                        <button 
                            className="bg-[#af0421] rounded-lg px-4 h-10 text-sm font-bold cursor-pointer hover:bg-[#e53e3e] text-white"
                            onClick={handleDownload}
                            >
                                Download APK
                        </button>
                    </div>
                </div>
              </div>
        </nav>
    </div>
  )
}

export default Navbar
