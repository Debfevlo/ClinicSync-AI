import { useState, useEffect, useRef } from "react";
 
/* ── helpers ── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}
 
/* ── steps data ── */
const steps = [
  {
    number: "01",
    tag: "Setup",
    title: "Connect in minutes",
    body: "Plug ClinicSync AI into your existing tools — EHR, Google Calendar, billing software — with zero technical expertise. Our guided onboarding walks your team through every step.",
    details: ["Works with 50+ EHR systems", "No IT team required", "HIPAA-compliant data sync", "Live in under 15 minutes"],
    accent: "#3a7d5e",
    visual: <SetupVisual />,
  },
  {
    number: "02",
    tag: "Intelligence",
    title: "AI learns your clinic",
    body: "Over the first 48 hours, ClinicSync studies your appointment patterns, provider preferences, billing codes, and patient behaviour — building a model unique to your practice.",
    details: ["Adapts to any specialty", "Learns from every interaction", "Custom rule configuration", "Real-time model updates"],
    accent: "#2d6e4e",
    visual: <LearnVisual />,
  },
  {
    number: "03",
    tag: "Automation",
    title: "Your clinic runs itself",
    body: "From the moment a patient books to post-visit billing, ClinicSync handles scheduling, note generation, claim submission, and follow-up messaging — automatically.",
    details: ["End-to-end automation", "Human review at every step", "Instant override controls", "24/7 AI monitoring"],
    accent: "#1e5038",
    visual: <AutoVisual />,
  },
  {
    number: "04",
    tag: "Growth",
    title: "Insights that compound",
    body: "Weekly intelligence reports surface hidden revenue gaps, patient churn risks, and efficiency opportunities — giving leadership the clarity to make every decision count.",
    details: ["Revenue cycle analytics", "Patient retention scoring", "Benchmarking vs. peers", "Exportable board reports"],
    accent: "#4a9070",
    visual: <GrowthVisual />,
  },
];
 
/* ── mini visuals ── */
function SetupVisual() {
  const integrations = [
    { name: "Epic EHR", status: "connected", delay: 0 },
    { name: "Google Calendar", status: "connected", delay: 200 },
    { name: "Stripe Billing", status: "syncing", delay: 400 },
    { name: "WhatsApp API", status: "connected", delay: 600 },
  ];
  return (
    <div className="space-y-2.5">
      <p className="font-body text-[10px] text-white/30 uppercase tracking-widest mb-3">Integrations</p>
      {integrations.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3"
          style={{ animationDelay: `${item.delay}ms` }}
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-sm bg-[#7aba9a]" />
            </div>
            <span className="font-body text-xs text-white/80">{item.name}</span>
          </div>
          <span
            className="font-body text-[10px] px-2.5 py-1 rounded-full font-medium"
            style={{
              background: item.status === "connected" ? "#3a7d5e44" : "#b7590a33",
              color: item.status === "connected" ? "#7aba9a" : "#f0a05a",
            }}
          >
            {item.status}
          </span>
        </div>
      ))}
      <div className="flex items-center gap-2 pt-1">
        <div className="w-2 h-2 rounded-full bg-[#7aba9a] animate-pulse" />
        <span className="font-body text-[10px] text-[#7aba9a]">All systems live — 14 min setup</span>
      </div>
    </div>
  );
}
 
function LearnVisual() {
  const metrics = [
    { label: "Avg. visit duration", val: 82, unit: "min" },
    { label: "Peak booking hour", val: 68, unit: "9–11am" },
    { label: "Top diagnosis code", val: 91, unit: "J06.9" },
    { label: "No-show probability", val: 23, unit: "%" },
  ];
  return (
    <div className="space-y-3">
      <p className="font-body text-[10px] text-white/30 uppercase tracking-widest mb-3">Pattern Analysis</p>
      {metrics.map((m, i) => (
        <div key={i}>
          <div className="flex justify-between mb-1">
            <span className="font-body text-[11px] text-white/60">{m.label}</span>
            <span className="font-display text-xs font-600 text-[#7aba9a]">{m.unit}</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-1.5 rounded-full bg-gradient-to-r from-[#3a7d5e] to-[#7aba9a]"
              style={{ width: `${m.val}%`, transition: "width 1.4s cubic-bezier(.16,1,.3,1)" }}
            />
          </div>
        </div>
      ))}
      <div className="mt-3 bg-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#7aba9a] animate-pulse flex-shrink-0" />
        <span className="font-body text-[11px] text-white/50">Model confidence: <span className="text-[#7aba9a]">94.2%</span></span>
      </div>
    </div>
  );
}
 
function AutoVisual() {
  const flow = [
    { label: "Patient books online", icon: "📅", done: true },
    { label: "AI assigns optimal slot", icon: "🤖", done: true },
    { label: "Reminder sent via SMS", icon: "💬", done: true },
    { label: "SOAP note generated", icon: "📋", done: false, active: true },
    { label: "Claim auto-submitted", icon: "💳", done: false },
  ];
  return (
    <div className="space-y-2">
      <p className="font-body text-[10px] text-white/30 uppercase tracking-widest mb-3">Patient Journey — Auto</p>
      {flow.map((f, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-xl px-4 py-2.5"
          style={{
            background: f.active ? "rgba(58,125,94,0.3)" : "rgba(255,255,255,0.07)",
            border: f.active ? "1px solid rgba(58,125,94,0.5)" : "1px solid transparent",
          }}
        >
          <span className="text-base">{f.icon}</span>
          <span
            className="font-body text-xs flex-1"
            style={{ color: f.done ? "#7aba9a" : f.active ? "white" : "rgba(255,255,255,0.4)" }}
          >
            {f.label}
          </span>
          {f.done && (
            <svg className="w-3.5 h-3.5 text-[#7aba9a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          )}
          {f.active && <div className="w-1.5 h-1.5 rounded-full bg-[#7aba9a] animate-pulse" />}
        </div>
      ))}
    </div>
  );
}
 
function GrowthVisual() {
  const bars = [48, 62, 55, 71, 68, 84, 91];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div>
      <p className="font-body text-[10px] text-white/30 uppercase tracking-widest mb-4">Weekly Revenue Score</p>
      <div className="flex items-end gap-2 h-24">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md"
              style={{
                height: `${h}%`,
                background: i === 6 ? "linear-gradient(to top, #3a7d5e, #7aba9a)" : "rgba(255,255,255,0.15)",
                transition: `height 1.2s cubic-bezier(.16,1,.3,1) ${i * 80}ms`,
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-1">
        {days.map((d, i) => (
          <p key={i} className="flex-1 text-center font-body text-[9px] text-white/25">{d}</p>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between bg-white/10 rounded-xl px-4 py-2.5">
        <span className="font-body text-xs text-white/50">Revenue vs last week</span>
        <span className="font-display text-sm font-600 text-[#7aba9a]">+18.4% ↑</span>
      </div>
    </div>
  );
}
 
/* ── MAIN ── */
export default function ClinicSyncHowItWorks() {
  const [headerRef, headerIn] = useInView(0.1);
  const [bottomRef, bottomIn] = useInView(0.15);
  const stepRefs = steps.map(() => useInView(0.15));
 
  return (
    <section className="bg-[#0e1f17] min-h-screen overflow-hidden relative font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:wght@300;400;500&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body   { font-family: 'DM Sans', sans-serif; }
 
        .fade-up { opacity:0; transform:translateY(32px); transition:opacity .75s ease, transform .75s ease; }
        .fade-up.in { opacity:1; transform:translateY(0); }
        .fade-up.d1 { transition-delay:.1s; }
        .fade-up.d2 { transition-delay:.22s; }
        .fade-up.d3 { transition-delay:.36s; }
 
        .step-card { transition:transform .3s ease, border-color .3s ease; }
        .step-card:hover { transform:translateY(-4px); border-color:rgba(58,125,94,.5) !important; }
 
        .connector {
          position:absolute;
          left:50%;
          transform:translateX(-50%);
          width:1px;
          background:linear-gradient(to bottom, rgba(58,125,94,.5), rgba(58,125,94,.05));
          pointer-events:none;
        }
 
        .number-ghost {
          position:absolute;
          top:-20px;
          right:-10px;
          font-family:'Fraunces',serif;
          font-size:120px;
          font-weight:700;
          line-height:1;
          color:rgba(255,255,255,0.035);
          user-select:none;
          pointer-events:none;
        }
 
        .tag-pill {
          background:rgba(58,125,94,.2);
          border:1px solid rgba(58,125,94,.35);
        }
      `}</style>
 
      {/* background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1e4a30] opacity-15 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#3a7d5e] opacity-10 blur-3xl pointer-events-none translate-x-40 -translate-y-20" />
 
      <div className="relative max-w-6xl mx-auto px-6 py-24">
 
        {/* ── HEADER ── */}
        <div ref={headerRef} className="mb-20">
          <div className={`fade-up ${headerIn ? "in" : ""} flex items-center gap-3 mb-5`}>
            <span className="w-6 h-px bg-[#3a7d5e]" />
            <p className="font-body text-[#3a7d5e] text-xs tracking-widest uppercase font-medium">How It Works</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className={`fade-up d1 ${headerIn ? "in" : ""} font-display text-5xl md:text-[62px] font-700 text-white leading-[1.06] max-w-xl`}>
              From signup to{" "}
              <em className="not-italic text-[#3a7d5e]">autopilot</em>{" "}
              in 4 steps.
            </h2>
            <p className={`fade-up d2 ${headerIn ? "in" : ""} font-body text-[#7a9a84] text-base leading-relaxed max-w-xs`}>
              No lengthy implementation. No consultants. No disruption to your existing workflow. Just results, fast.
            </p>
          </div>
        </div>
 
        {/* ── STEPS ── */}
        <div className="space-y-5 mb-8">
          {steps.map((step, i) => {
            const [ref, inView] = stepRefs[i];
            const isEven = i % 2 === 0;
            return (
              <div
                key={step.number}
                ref={ref}
                className={`fade-up ${inView ? "in" : ""} step-card relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden`}
              >
                <span className="number-ghost">{step.number}</span>
 
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${!isEven ? "md:[direction:rtl]" : ""}`}>
 
                  {/* content side */}
                  <div className={`p-10 md:p-14 flex flex-col justify-center gap-6 ${!isEven ? "md:[direction:ltr]" : ""}`}>
                    <div className="flex items-center gap-3">
                      <span className="tag-pill font-body text-xs text-[#7aba9a] tracking-widest uppercase px-3 py-1 rounded-full">
                        {step.tag}
                      </span>
                      <span className="font-display text-sm text-white/20 font-600">— {step.number}</span>
                    </div>
 
                    <h3 className="font-display text-3xl md:text-4xl font-600 text-white leading-snug">
                      {step.title}
                    </h3>
 
                    <p className="font-body text-[#7a9a84] text-base leading-relaxed">
                      {step.body}
                    </p>
 
                    <ul className="grid grid-cols-2 gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 font-body text-sm text-[#aed4c0]">
                          <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                            <svg className="w-2 h-2 text-[#7aba9a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
 
                  {/* visual side */}
                  <div
                    className={`p-10 md:p-14 flex flex-col justify-center relative overflow-hidden ${!isEven ? "md:[direction:ltr]" : ""}`}
                    style={{ background: `linear-gradient(135deg, ${step.accent}22, ${step.accent}08)` }}
                  >
                    <div
                      className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-2xl pointer-events-none"
                      style={{ background: step.accent }}
                    />
                    <div className="relative z-10">
                      {step.visual}
                    </div>
                  </div>
 
                </div>
 
                {/* step connector — not on last */}
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-0 relative h-0">
                    <div
                      className="absolute z-20 -bottom-5 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full border border-[#3a7d5e] bg-[#0e1f17] flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-[#3a7d5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
 
        {/* ── TIMELINE STRIP ── */}
        <div className={`fade-up ${bottomIn ? "in" : ""} rounded-3xl border border-white/10 bg-white/5 p-8 mb-6`} ref={bottomRef}>
          <p className="font-body text-xs text-white/30 uppercase tracking-widest mb-6">Your first week with ClinicSync</p>
          <div className="relative">
            {/* line */}
            <div className="absolute top-3.5 left-0 right-0 h-px bg-white/10" />
            <div className="grid grid-cols-4 gap-4 relative z-10">
              {[
                { day: "Day 1", label: "Onboard & connect integrations" },
                { day: "Day 2", label: "AI analyses your clinic patterns" },
                { day: "Day 3", label: "Automation goes live" },
                { day: "Day 7", label: "First intelligence report drops" },
              ].map((t, i) => (
                <div key={i} className="flex flex-col items-center gap-3 text-center">
                  <div
                    className="w-7 h-7 rounded-full border-2 flex items-center justify-center bg-[#0e1f17] flex-shrink-0"
                    style={{ borderColor: i === 0 ? "#3a7d5e" : "rgba(255,255,255,0.15)" }}
                  >
                    {i === 0 ? (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#3a7d5e]" />
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    )}
                  </div>
                  <div>
                    <p className="font-display text-sm font-600 text-[#7aba9a]">{t.day}</p>
                    <p className="font-body text-xs text-white/40 leading-snug mt-1">{t.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
 
        {/* ── BOTTOM CTA ── */}
        <div className={`fade-up d1 ${bottomIn ? "in" : ""} rounded-3xl bg-[#3a7d5e] p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden`}>
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#2d6e4e] opacity-50 translate-x-24 translate-y-24 pointer-events-none" />
          <div className="relative z-10">
            <p className="font-display text-3xl font-600 text-white leading-snug mb-2">
              Start your free 14-day trial.
            </p>
            <p className="font-body text-[#aed4c0] text-sm">No credit card required · Cancel anytime · Setup in 15 minutes</p>
          </div>
          <div className="relative z-10 flex items-center gap-3 flex-shrink-0">
            <a href="#" className="font-body text-sm font-medium text-[#3a7d5e] bg-white rounded-full px-7 py-3.5 hover:bg-[#edf6f0] transition-colors flex items-center gap-2">
              Get started free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
 
      </div>
    </section>
  );
}