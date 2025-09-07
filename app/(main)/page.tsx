// app/page.tsx (Next.js 13+ App Router) 
// or pages/index.tsx (Next.js 12/13 Pages Router)

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#231013] text-white font-['Space_Grotesk','Noto_Sans',sans-serif]">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#4a2128] px-6 lg:px-10 py-3">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 text-white">
            {/* Logo */}
            <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"/>
            </svg>
          </div>
          <h2 className="text-lg font-bold">AnemoScan</h2>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden sm:flex gap-6">
            <a href="#" className="text-sm font-medium">Home</a>
            <a href="#" className="text-sm font-medium">About</a>
          </nav>
          <button className="bg-[#af0421] rounded-lg px-4 h-10 text-sm font-bold">Download APK</button>
        </div>
      </header>

      {/* Hero */}
      <section
        className="flex flex-col items-center justify-center text-center px-4 py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6)),url('https://lh3.googleusercontent.com/aida-public/AB6AXuBM-Lv1-BGL46hAfL3G7OyVfDjdAZpLlUG5sWCsg3BYXCfAeSIxzbOanZ7FsYd-Jxi5-nfHLXtxpiq29QjUj5AqDumxWXypGaJxM2JaFTzNdImrFut8qXLioUxLis7WNZATEciufEfkGl-ccBxUDeZoDgktULqxZSh8OoRrQRt-bflb58vnfDz8LnRdxnCUl0vX_6rdhkYQK1BPNfXE15dR1ARIAhawDepQgR7zzE_jMlwan907XLNPrlqHfksrgVffWQo6-_uzrEs')",
        }}
      >
        <h1 className="text-3xl sm:text-5xl font-black max-w-2xl">
          Illuminating Health: Anemia Detection Reimagined
        </h1>
        <p className="mt-3 text-sm sm:text-base max-w-xl">
          AnemoScan uses AI to analyze eye conjunctiva images for anemia, offline and privately.
        </p>
        <button className="mt-6 bg-[#af0421] px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-bold text-sm sm:text-base">
          Download APK
        </button>
      </section>

      {/* Reusable Card Grid */}
      {[
        {
          title: "Key Features",
          items: [
            {
              title: "Conjunctiva Capture",
              desc: "Capture clear images of the eye's conjunctiva with ease.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-4c0rf-pljEekQPjAV2ylR5ZFAgsV7Tl1JvcITOTrnhlDgkkMEbz904IC7RGzUgfCscEJBBX9vCXziFyAqFUmMJsPXhsobnyGrmV2svUE9KDR6kq2rKIkD175Ew0qmWwFd556C6iInmYHhblSRcYFpGyrxTVldScj5ECvBdq3_jE2Ea2V2-R1qfWizvqpvaBqt8g4ctRTq4dtAk3vUd1WobkdJ-n3RdQp7VfEYeDm0yMkeMZ0qHXoOh3eo8s-sEHWP2tLtmmoUV4",
            },
            {
              title: "One-tap Simplicity",
              desc: "Detect anemia with a single tap, no complex procedures.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4i0ezgaWeoxRxbk3MG2hdv29WD55TedReD4s9j60aa2XC6cc3cu6k_WwZlc0qCv1aDNGzP2mQ8hCCQtUvXO8f6UneIeCSQ-lcOAcJpD_1lCG2-eRLCvYSiBNka8tGA_-Bs4cPBswvRH9lKv3vcX5Gl_BDwEnkrkEBRcEmrlkt_UvJu7kgJuykn1PzpG77L8oGqkrcQ28dRxP6tA7mPoXBY8Yb9MOlZsjo26LqN3u4sXIHVy4_Cz5IY7x3hUaRcfYWk0_IMiMwWyM",
            },
            {
              title: "On-device AI",
              desc: "AI analysis happens directly on your device, ensuring privacy.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhEEx1tNctIDhM4xN3iDT4AEOx-GPXA1O-ZfaSuJ5rrV2Mu4tvRWP2tfRFZLsi839kaRhxLRemhr9SP1ACZe_gh1GknVfiLYH67MvIKYaF7RZuuNpkfTQvdSLGN182-OV4_1D7Bv0OqBeY6NUVX4R6vdrKGBlMag1F3z9H8RllPF8SoGMzp6kE7uFrZYH_zDyldVurHL-7OrsHFx3Aiwwtf8bn0-6qAP1TrD1jK6lyxqM-SxdRtmsC3CkB27JJ0UwuiPbkvK_gFbU",
            },
            {
              title: "Empowering Communities",
              desc: "Make anemia detection accessible to everyone, everywhere.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1VT-MHAXdwcqxwdGDCCfhko09GkwC-DM07QxSBeV3lbHIVO1quBaCYPy4dDZMEs2DfRK4737cn8B5rEMzCfj9L1VEyptTPUCtzVAfdekC9zZ1a2YtitKmYv4XMrR2UuaMqfhTbE6FvPZpPAfcI1OrZTUCRTXo-dbvnge_rG-1S3_wj4BSngq0A79RPQG3La7O-rBmI-_ckaCmNM81tpq2NRWLjePB4vhiX2UWOy0NEV7lMXgCWbwmvBV7NrYa_40GNfV5eZ9Khmw",
            },
          ],
        },
        {
          title: "New Features",
          items: [
            {
              title: "Saves and Deletes History",
              desc: "Keep track of your past scans and monitor changes over time.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCydaTmnhCtFxdffzX2X9y_s-eqVrIgKScBOetQzRBA3fhPIOxBq08A5YMQ0pXhvk4BJ6hrTrQJnpKq984qrS1UOkWxZzxL5v4Q_neSyCHgnP_weFk7_fV8XNiHwptTr1R8h3kSogg8sTcaI9Wnrf2on7HqE5JPdLGM0LrxaSQvIftJl93vWzExRZjgCoLiFyY8ISqOi_LjmU4d09lfuCfyPgKlw01jZL1yfNnQWCk_oV8U5kuWu96Khxr4znLI_eshYZR5oC5-FW4",
            },
            {
              title: "Shows Confidence Level",
              desc: "Understand the reliability of each result with a confidence score.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLxJOv5cQoIrsDhDPSpOELLqysvIyb9NtuI5Wkely8HU1k6I4yaWZ5YG9zn9i-WvNZjra3sFem6W6Tz5VrrQAM6us1jCqQxIuDAf9gTsv-MeiohZsWzuVQCf4VtLb40BWYVtznIQsqhN_GhkggXmU3GjknydyW48Vdx2MG0BoVuXZISJu3_dpD6_ykpd7RhYXfnr18Of-WL3HlAYrzL-vMppGlhrJmD7nYb2wImo4e8Wky54NA0krDWJQHR7fywTtAERjUNF3NaBk",
            },
            {
              title: "Integrated Camera",
              desc: "Use the built-in camera for seamless and quick image capture.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA63sag9bhcwyVyNP09BetrGJN3vOUE84qYktXwEC7Qp8zthXnzfnqJSkp1R_vr5UEHJo1qjCx3qSCjAuRE7X6X7RmOnf69TjwYlwAFRUAcuKiwdl_JJ_YQityg54eKUor6oWsUjDmOUPf4oyLPjCNBuRnVTHnL7zN9Hrb8hTrGF2tGad9RgxX-Zkh66awqCjk_1KnhsLZuBBx_q_qgKS1I9YCTniQj8RVA8VuCrpsbPxs_NOGbuUkE62xDt707VvtITKEkBpCpxAw",
            },
            {
              title: "Export PDF Feature",
              desc: "Generate PDF reports of your scan results.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY46IhNzXihdu3gsr99kuY1nBiZckXBkl103zuRu_3ocyA13Op3_6sK9IqlcSqKaG6Z4srp9JajRreZMarNpfc2bGec5rE4eklGGOEpVwmmR7n0IAuCQf9-cOVIMxWtQIkvHQVG0iLVGnWjbyKSqOwCle3TEhRl2pwnFPdo2hSw0oFG0R187Z1LRo5jrs3pixRb2KYLAIs_PDskm43NaOgS-6AnyyV_vNjq1z5_EO72IHFNeI1RsxpSrPGOAl6jbEP8mvEPusrFTg",
            },
          ],
        },
        {
          title: "Vision for the Future",
          items: [
            {
              title: "Accessibility",
              desc: "Offline-first design empowers remote communities.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzrHVOMozvTL1gI3V3QbyNd1-jQU_sREUEBzykdRYT_HQfXEGC1yMk62irSdzn1ruk-lrH4CAUm_xLPQUITpLx3PVNZB7iuQUBuNDgC5gN0uoX7H5jsSGnPp5yod2htfeTFMvyCcJ6ceWY7qzOl7lJED9Xjc6IPwGZmor6cEojfmOr9Q9mCAu0g7D6Os9Uu_EqfUjD7bwde6i5vmh1kLA_CbnYo5NNO1ilwkdqgo6TvrHOIuBJWykqNlnOCgApBHMd6dTBU5lAqwk",
            },
            {
              title: "Trust",
              desc: "100% on-device analysis ensures privacy.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNkpnQg9WM_DfRWVrkWfqq-Gm0RGOTYmKZ2qG5qDQ6aP6Z3fy7Rvtq3Zm6RmRUDmgzvtc1znYPz9zdVPufL0fEV2jJbolTlJuYrfCJzfE28tjUnCr7EjbZBb_aiWAie3qNbzzEaGOA2Rd7YxdFWBu3GUtaxoFNgELbii6LngPDZX_TUWksTQF6jBeqcVotAEPZW1iNGChEIwqdrFd95ANDGvas8tbaYdCjvop1fWRsjJ89eQOkVZgfEPqs_bs1Vl7SQORRgFrTNos",
            },
            {
              title: "Innovation",
              desc: "AI fused with healthcare to prevent complications.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn_vLB0cq2GpPOONQ3Mem0l6L41i7M5L8EiQwi94Q4mHjdSz6nFaARAr9jK9CElr7a6X0_yMCu4HJvqxl_klkzYZOyGru2B5c8QSsSKs_lS18EDoIuayBKnHchyGpJD1VlzWW0EI8ksrdefdZkDg3vTV2okUApwFHJV6eUP7OP4WpORnvV83hrGwOp6aF8sqD6eXWglSwr_uFiZtPJ8NX34T9D8IycuWBCzGCSOVSa0QUUKER0ldGhezaMS2LuvDBzJCaEXIOMSB4",
            },
            {
              title: "Future Expansion",
              desc: "Scaling to detect multiple conditions through biomarkers.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDMOK8Mj8bgULo5dj58w92NRblgveGkKEvYi5IR3je7JDKNqM9m7zxFyzUrJCRzeZWyHd9E6EJ_ny1ufOq_KDWkcsObEs8CU3Z8QRw0514blKG7LWksNsj5Dvn7865CC9ApAQ5SLgFCR4RWoOyfcOXByX7fF36_cu3ZiTAx2dhIukr9_dbbW-i1-7a3_6V2HdMGztUvKOGqKuVzakyoTqwx3Uqaqplv57F1QcqgZdAaJzj4VcPwHseKomBbFV3vhoJ5T_V5EuQkAU",
            },
          ],
        },
      ].map((section, i) => (
        <section key={i} className="px-6 lg:px-10 py-10">
          <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {section.items.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div
                  className="rounded-lg bg-cover bg-center aspect-square"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <div>
                  <p className="text-base font-medium">{item.title}</p>
                  <p className="text-sm text-[#cc8e99]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="py-10 text-center text-[#cc8e99] text-sm">
        © 2025 AnemoScan. All rights reserved.
      </footer>
    </div>
  );
}
