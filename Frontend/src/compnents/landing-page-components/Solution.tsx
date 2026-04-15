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
 
/* ── data ── */
const solutions = [
  {
    id: "scheduling",
    tag: "Smart Scheduling",
    headline: "Zero conflicts. Always.",
    body: "Our AI engine learns your clinic's rhythm — provider availability, patient history, visit types — and builds a living schedule that adjusts itself in real time.",
    bullets: ["Auto-resolves double bookings", "Predicts & fills cancellation gaps", "Patient self-booking with smart slots"],
    stat: "3×", statLabel: "more slots filled weekly",
    accent: "#3a7d5e",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/>
      </svg>
    ),
    visual: <ScheduleVisual />,
  },
  {
    id: "notes",
    tag: "AI Clinical Notes",
    headline: "Document in seconds, not hours.",
    body: "ClinicSync listens to your consultations and generates structured SOAP notes, referral letters, and summaries — ready to review and sign off in one click.",
    bullets: ["Real-time transcription & structuring", "ICD-10 & CPT auto-coding", "One-click EHR push"],
    stat: "2 hrs", statLabel: "saved per doctor, per day",
    accent: "#2d6e4e",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
      </svg>
    ),
    visual: <NotesVisual />,
  },
  {
    id: "billing",
    tag: "Automated Billing",
    headline: "Get paid. Every claim, first time.",
    body: "Eliminate manual coding errors with AI-powered claim generation, pre-submission validation, and real-time denial tracking — all in one dashboard.",
    bullets: ["Pre-submission error scrubbing", "Denial root-cause analysis", "Revenue cycle reporting"],
    stat: "94%", statLabel: "first-pass claim acceptance",
    accent: "#1e5038",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75"/>
      </svg>
    ),
    visual: <BillingVisual />,
  },
  {
    id: "comms",
    tag: "Patient Communication",
    headline: "Stay connected, automatically.",
    body: "Multilingual reminders, post-visit follow-ups, lab result notifications, and satisfaction surveys — all sent at exactly the right moment without lifting a finger.",
    bullets: ["WhatsApp, SMS & email channels", "Multilingual AI messaging", "Automated follow-up sequences"],
    stat: "40%", statLabel: "reduction in no-shows",
    accent: "#4a9070",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/>
      </svg>
    ),
    visual: <CommsVisual />,
  },
];
 
/* ── mini visuals ── */
function ScheduleVisual() {
  const slots = [
    { time: "9:00", name: "Dr. Mensah", status: "confirmed", color: "#3a7d5e" },
    { time: "9:30", name: "Dr. Asante", status: "confirmed", color: "#3a7d5e" },
    { time: "10:00", name: "Walk-in", status: "auto-filled", color: "#7aba9a" },
    { time: "10:30", name: "Dr. Boateng", status: "confirmed", color: "#3a7d5e" },
    { time: "11:00", name: "Rescheduled", status: "auto-filled", color: "#7aba9a" },
  ];
  return (
    <div className="space-y-2 w-full">
      {slots.map((s, i) => (
        <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-2.5">
          <span className="font-body text-xs text-white/40 w-10 flex-shrink-0">{s.time}</span>
          <div className="flex-1 h-2 rounded-full" style={{ background: s.color + "55" }}>
            <div className="h-2 rounded-full w-3/4" style={{ background: s.color }} />
          </div>
          <span className="font-body text-xs" style={{ color: s.color }}>{s.status}</span>
        </div>
      ))}
    </div>
  );
}
 
function NotesVisual() {
  const lines = [
    { label: "S:", text: "Patient reports 3-day history of chest tightness…", w: "90%" },
    { label: "O:", text: "BP 132/84 · HR 78 · Temp 36.8°C · SpO₂ 98%", w: "85%" },
    { label: "A:", text: "Hypertensive urgency, r/o angina", w: "70%" },
    { label: "P:", text: "Amlodipine 5mg · Follow up in 48 hrs", w: "80%" },
  ];
  return (
    <div className="bg-white/10 rounded-2xl p-5 w-full space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-[#7aba9a] animate-pulse" />
        <span className="font-body text-xs text-white/50">AI generating note…</span>
      </div>
      {lines.map((l, i) => (
        <div key={i} className="flex gap-3 items-start">
          <span className="font-display text-sm font-600 text-[#7aba9a] w-5 flex-shrink-0">{l.label}</span>
          <div className="flex-1">
            <div className="h-2 rounded-full bg-white/20 overflow-hidden">
              <div className="h-2 rounded-full bg-[#3a7d5e]" style={{ width: l.w }} />
            </div>
            <p className="font-body text-[10px] text-white/30 mt-1 leading-tight">{l.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
 
function BillingVisual() {
  const claims = [
    { code: "99213", desc: "Office visit", amount: "$180", status: "approved" },
    { code: "85025", desc: "CBC w/ diff", amount: "$42", status: "approved" },
    { code: "93000", desc: "ECG routine", amount: "$95", status: "pending" },
  ];
  return (
    <div className="w-full space-y-2">
      {claims.map((c, i) => (
        <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
          <div className="flex-1">
            <p className="font-body text-xs text-white font-medium">{c.code} — {c.desc}</p>
            <p className="font-body text-xs text-white/40">{c.amount}</p>
          </div>
          <span
            className="font-body text-[10px] font-medium px-2.5 py-1 rounded-full"
            style={{
              background: c.status === "approved" ? "#3a7d5e33" : "#b7590a33",
              color: c.status === "approved" ? "#7aba9a" : "#f0a05a",
            }}
          >
            {c.status}
          </span>
        </div>
      ))}
      <div className="flex justify-between items-center px-4 pt-2">
        <span className="font-body text-xs text-white/30">First-pass rate</span>
        <span className="font-display text-sm font-600 text-[#7aba9a]">94% ↑</span>
      </div>
    </div>
  );
}
 
function CommsVisual() {
  const msgs = [
    { from: "ClinicSync", text: "Hi Kofi, your appointment is tomorrow at 10am. Reply YES to confirm.", time: "8:01 AM", out: false },
    { from: "Kofi A.", text: "YES", time: "8:14 AM", out: true },
    { from: "ClinicSync", text: "Confirmed! ✓ We'll send directions 1 hr before. See you then.", time: "8:14 AM", out: false },
  ];
  return (
    <div className="w-full space-y-3">
      {msgs.map((m, i) => (
        <div key={i} className={`flex ${m.out ? "justify-end" : "justify-start"}`}>
          <div
            className="max-w-[80%] rounded-2xl px-4 py-2.5"
            style={{
              background: m.out ? "#3a7d5e" : "rgba(255,255,255,0.1)",
              borderBottomRightRadius: m.out ? 4 : undefined,
              borderBottomLeftRadius: !m.out ? 4 : undefined,
            }}
          >
            {!m.out && <p className="font-body text-[10px] text-[#7aba9a] mb-0.5">{m.from}</p>}
            <p className="font-body text-xs text-white leading-snug">{m.text}</p>
            <p className="font-body text-[10px] text-white/40 mt-1 text-right">{m.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
 
/* ── MAIN COMPONENT ── */
export default function ClinicSyncSolution() {
  const [headerRef, headerIn] = useInView(0.1);
  const [tabsRef, tabsIn] = useInView(0.05);
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [bottomRef, bottomIn] = useInView(0.15);
 
  const switchTab = (i) => {
    if (i === active) return;
    setAnimating(true);
    setTimeout(() => { setActive(i); setAnimating(false); }, 280);
  };
 
  const sol = solutions[active];
 
  return (
    <section className="bg-[#f0f4f2] min-h-screen overflow-hidden relative font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:wght@300;400;500&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
 
        .fade-up { opacity:0; transform:translateY(32px); transition:opacity .7s ease, transform .7s ease; }
        .fade-up.in { opacity:1; transform:translateY(0); }
        .fade-up.d1 { transition-delay:.08s; }
        .fade-up.d2 { transition-delay:.18s; }
        .fade-up.d3 { transition-delay:.30s; }
        .fade-up.d4 { transition-delay:.45s; }
 
        .tab-btn { transition: background .25s ease, color .25s ease, box-shadow .25s ease; }
        .tab-btn.active-tab { box-shadow: 0 4px 20px rgba(45,110,78,.2); }
 
        .panel-fade { transition: opacity .28s ease, transform .28s ease; }
        .panel-fade.out { opacity:0; transform:translateY(12px); }
        .panel-fade.in-panel { opacity:1; transform:translateY(0); }
 
        .bullet-check { background: #edf6f0; }
        .solution-card { box-shadow: 0 8px 40px rgba(45,110,78,.1); }
        .visual-card { box-shadow: inset 0 1px 0 rgba(255,255,255,.15); }
 
        .step-line::after {
          content:'';
          position:absolute;
          left:50%;
          top:100%;
          transform:translateX(-50%);
          width:1px;
          height:40px;
          background:linear-gradient(to bottom, #3a7d5e44, transparent);
        }
      `}</style>
 
      {/* bg blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#c8e6d4] opacity-40 blur-3xl pointer-events-none translate-x-64 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#b0d9c0] opacity-30 blur-3xl pointer-events-none -translate-x-32 translate-y-32" />
 
      <div className="relative max-w-6xl mx-auto px-6 py-24">
 
        {/* ── HEADER ── */}
        <div ref={headerRef} className="mb-16">
          <div className={`fade-up ${headerIn ? "in" : ""} flex items-center gap-3 mb-5`}>
            <span className="w-6 h-px bg-[#3a7d5e]" />
            <p className="font-body text-[#3a7d5e] text-xs tracking-widest uppercase font-medium">The Solution</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className={`fade-up d1 ${headerIn ? "in" : ""} font-display text-5xl md:text-[62px] font-700 text-[#1a3a2a] leading-[1.06] max-w-xl`}>
              One AI platform that{" "}
              <em className="not-italic text-[#3a7d5e]">fixes everything.</em>
            </h2>
            <p className={`fade-up d2 ${headerIn ? "in" : ""} font-body text-[#4a6259] text-base leading-relaxed max-w-xs`}>
              Four powerful modules, working together seamlessly — built specifically for African and global clinic workflows.
            </p>
          </div>
        </div>
 
        {/* ── TAB SWITCHER ── */}
        <div ref={tabsRef} className={`fade-up ${tabsIn ? "in" : ""} mb-8`}>
          <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-2xl border border-[#ddeee5] w-fit">
            {solutions.map((s, i) => (
              <button
                key={s.id}
                onClick={() => switchTab(i)}
                className={`tab-btn font-body text-sm font-medium px-5 py-2.5 rounded-xl transition-all ${
                  i === active
                    ? "active-tab bg-[#3a7d5e] text-white"
                    : "text-[#4a6259] hover:bg-[#edf6f0]"
                }`}
              >
                {s.tag}
              </button>
            ))}
          </div>
        </div>
 
        {/* ── MAIN PANEL ── */}
        <div
          className={`panel-fade solution-card rounded-3xl bg-[#2d6e4e] overflow-hidden mb-6 ${animating ? "out" : "in-panel"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* left — content */}
            <div className="p-10 md:p-14 flex flex-col justify-between gap-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center text-white">
                    {sol.icon}
                  </div>
                  <span className="font-body text-xs text-[#aed4c0] tracking-widest uppercase">{sol.tag}</span>
                </div>
 
                <h3 className="font-display text-3xl md:text-4xl font-600 text-white leading-snug mb-4">
                  {sol.headline}
                </h3>
                <p className="font-body text-[#aed4c0] text-base leading-relaxed mb-8">
                  {sol.body}
                </p>
 
                <ul className="space-y-3">
                  {sol.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 font-body text-sm text-[#d0ede0]">
                      <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-[#aed4c0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
 
              {/* stat */}
              <div className="flex items-end gap-4 pt-6 border-t border-white/10">
                <p className="font-display text-5xl font-700 text-white">{sol.stat}</p>
                <p className="font-body text-[#7aba9a] text-sm leading-snug mb-1">{sol.statLabel}</p>
              </div>
            </div>
 
            {/* right — visual */}
            <div className="bg-[#1e5038] flex flex-col justify-center p-10 md:p-14 gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#2d6e4e] opacity-30 translate-x-24 -translate-y-24 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#3a7d5e] opacity-20 -translate-x-12 translate-y-12 pointer-events-none" />
              <p className="font-body text-xs text-white/30 tracking-widest uppercase mb-2 relative z-10">Live Preview</p>
              <div className="relative z-10">
                {sol.visual}
              </div>
            </div>
          </div>
        </div>
 
        {/* ── HOW IT WORKS STRIP ── */}
        <div className={`fade-up d3 ${tabsIn ? "in" : ""} grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6`}>
          {[
            { step: "01", title: "Connect your clinic", desc: "Plug into your existing EHR, calendar, and billing tools in under 10 minutes." },
            { step: "02", title: "AI learns your workflow", desc: "ClinicSync maps your clinic's patterns and begins optimising from day one." },
            { step: "03", title: "Run on autopilot", desc: "Sit back as scheduling, notes, billing, and comms run themselves." },
          ].map((s, i) => (
            <div
              key={s.step}
              className="bg-white rounded-3xl p-7 border border-[#ddeee5] flex flex-col gap-3"
            >
              <span className="font-display text-xs font-600 text-[#3a7d5e] tracking-widest">{s.step}</span>
              <h4 className="font-display text-xl font-600 text-[#1a3a2a]">{s.title}</h4>
              <p className="font-body text-sm text-[#5a7060] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
 
        {/* ── BOTTOM CTA BAND ── */}
        <div ref={bottomRef} className={`fade-up ${bottomIn ? "in" : ""} rounded-3xl bg-white border border-[#ddeee5] px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5`}>
          <div>
            <p className="font-display text-2xl font-600 text-[#1a3a2a]">Ready to transform your clinic?</p>
            <p className="font-body text-sm text-[#5a7060] mt-1">Join 500+ clinics already running on ClinicSync AI.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a href="#" className="font-body text-sm font-medium text-[#3a7d5e] border border-[#3a7d5e] rounded-full px-6 py-3 hover:bg-[#edf6f0] transition-colors">
              Watch demo
            </a>
            <a href="#" className="font-body text-sm font-medium text-white bg-[#3a7d5e] rounded-full px-6 py-3 hover:bg-[#2d6e4e] transition-colors flex items-center gap-2">
              Start free trial
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