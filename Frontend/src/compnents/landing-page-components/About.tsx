import { useState, useEffect, useRef } from "react";
 
const features = [
  {
    title: "AI-Powered Diagnostics",
    description:
      "Leverage intelligent algorithms that analyze patient data in real-time, surfacing critical insights before you even ask.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.607L5 14.5m14.8.5-2.049-.513a2.25 2.25 0 00-1.12.025L12 15.5l-1.631-.488a2.25 2.25 0 00-1.12-.025L7.2 15.5M5 14.5v2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    stat: "98.4%",
    statLabel: "Diagnostic Accuracy",
  },
  {
    title: "Smart Scheduling",
    description:
      "Eliminate appointment conflicts with an AI scheduler that learns provider preferences, patient history, and clinic capacity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    stat: "3x",
    statLabel: "Faster Booking",
  },
  {
    title: "Patient Communication",
    description:
      "Automated follow-ups, reminders, and multilingual messaging keep every patient in the loop without adding to your workload.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    stat: "40%",
    statLabel: "Fewer No-Shows",
  },
];
 
const values = [
  "HIPAA Compliant",
  "End-to-End Encrypted",
  "EHR Integrated",
  "24/7 AI Support",
];
 
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}
 
export default function About() {
  const [heroRef, heroIn] = useInView(0.1);
  const [cardsRef, cardsIn] = useInView(0.1);
  const [missionRef, missionIn] = useInView(0.1);
 
  return (
    <section className="bg-[#f0f4f2] min-h-screen font-sans overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:wght@300;400;500&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
        .fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-up.delay-1 { transition-delay: 0.1s; }
        .fade-up.delay-2 { transition-delay: 0.2s; }
        .fade-up.delay-3 { transition-delay: 0.35s; }
        .fade-up.delay-4 { transition-delay: 0.5s; }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(45, 110, 78, 0.15);
        }
        .pill-badge {
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(8px);
        }
        .green-card-glow {
          box-shadow: 0 8px 40px rgba(45, 110, 78, 0.25), 0 2px 8px rgba(0,0,0,0.08);
        }
        .inner-card {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .stat-shine {
          background: linear-gradient(135deg, #fff 60%, rgba(255,255,255,0.6));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
 
      <div className="max-w-6xl mx-auto px-6 py-20">
 
        {/* ── HERO HEADER ── */}
        <div
          ref={heroRef}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16"
        >
          <div className={`fade-up ${heroIn ? "visible" : ""}`}>
            <p className="font-body text-[#3a7d5e] text-sm font-medium tracking-widest uppercase mb-4">
              About ClinicSync AI
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-700 text-[#1a3a2a] leading-[1.08] max-w-md">
              Healthcare,{" "}
              <em className="not-italic text-[#3a7d5e]">intelligently</em>{" "}
              in sync.
            </h1>
            <a
              href="#"
              className="font-body inline-flex items-center gap-2 mt-6 text-[#3a7d5e] text-sm font-medium hover:gap-3 transition-all"
            >
              Learn how it works
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
 
          <div className={`fade-up delay-2 ${heroIn ? "visible" : ""} md:max-w-xs`}>
            <p className="font-body text-[#4a6259] text-base leading-relaxed">
              ClinicSync AI is built for modern clinics — weaving artificial intelligence
              into every touchpoint so your team can focus on what matters most: your patients.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {values.map((v) => (
                <span
                  key={v}
                  className="font-body text-xs font-medium text-[#3a7d5e] bg-white border border-[#c3ddd3] rounded-full px-3 py-1"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
 
        {/* ── MAIN GREEN HERO CARD ── */}
        <div
          ref={missionRef}
          className={`fade-up ${missionIn ? "visible" : ""} rounded-3xl bg-[#2d6e4e] green-card-glow p-8 md:p-12 mb-6 relative overflow-hidden`}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#3a7d5e] opacity-30 translate-x-24 -translate-y-24 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-[#1e5038] opacity-40 -translate-x-16 translate-y-16 pointer-events-none" />
 
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
            {/* Left text */}
            <div className="flex-1">
              <h2 className="font-display text-4xl md:text-5xl font-600 text-white leading-tight mb-4">
                One platform,<br />
                whole clinic.
              </h2>
              <p className="font-body text-[#aed4c0] text-base leading-relaxed max-w-sm">
                From first appointment to discharge summaries, ClinicSync AI keeps every
                department aligned — reducing friction and eliminating information silos across your practice.
              </p>
            </div>
 
            {/* Right inner card — checklist */}
            <div className="inner-card rounded-2xl p-6 md:min-w-[280px] flex-shrink-0 w-full md:w-auto">
              <p className="font-body text-white font-medium text-sm mb-4">
                What we streamline
              </p>
              <ul className="space-y-3">
                {[
                  "Patient intake & onboarding",
                  "Clinical notes & summaries",
                  "Insurance & billing workflows",
                  "Multi-provider coordination",
                  "Compliance & audit trails",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-[#d0ede0] text-sm">
                    <span className="w-5 h-5 rounded-full border border-[#aed4c0] flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-[#aed4c0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
 
        {/* ── FEATURE CARDS ROW ── */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`fade-up delay-${i + 1} ${cardsIn ? "visible" : ""} card-hover bg-white rounded-3xl p-7 flex flex-col justify-between min-h-[280px]`}
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#edf6f0] text-[#3a7d5e] flex items-center justify-center mb-5">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl font-600 text-[#1a3a2a] mb-3 leading-snug">
                  {f.title}
                </h3>
                <p className="font-body text-[#5a7060] text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
 
              <div className="mt-6 pt-5 border-t border-[#e8f2ec] flex items-end justify-between">
                <div>
                  <p className="font-display text-3xl font-700 text-[#2d6e4e]">{f.stat}</p>
                  <p className="font-body text-xs text-[#7a9a84] mt-0.5">{f.statLabel}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#edf6f0] text-[#3a7d5e] flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
 
        {/* ── BOTTOM BAND ── */}
        <div className={`fade-up delay-4 ${cardsIn ? "visible" : ""} mt-6 rounded-3xl bg-white px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <p className="font-body text-[#1a3a2a] font-medium text-base">
            Trusted by <span className="text-[#3a7d5e] font-semibold">500+</span> clinics across 18 countries.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["#b7d7c4","#8dbe9f","#5fa07a","#3a7d5e"].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center"
                  style={{ background: c }}
                >
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" />
                  </svg>
                </div>
              ))}
            </div>
            <span className="font-body text-sm text-[#5a7060]">Join growing clinics</span>
            <a href="#" className="ml-2 font-body text-sm font-medium text-white bg-[#3a7d5e] rounded-full px-5 py-2 hover:bg-[#2d6e4e] transition-colors">
              Get Started →
            </a>
          </div>
        </div>
 
      </div>
    </section>
  );
}
 