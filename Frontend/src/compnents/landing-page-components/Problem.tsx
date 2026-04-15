import { useState, useEffect, useRef } from "react";
 
/* ── helpers ── */
function useInView(threshold = 0.15) {
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
 
function useCounter(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}
 
/* ── data ── */
const problems = [
  {
    number: "01",
    title: "Appointment Chaos",
    body: "Clinics lose an average of 14 patient slots per week to scheduling conflicts, double-bookings, and last-minute cancellations — all managed manually.",
    metric: "23%",
    metricLabel: "avg. no-show rate",
    color: "#c0392b",
    bgLight: "#fdf1f0",
  },
  {
    number: "02",
    title: "Admin Overload",
    body: "Physicians spend up to 2 hours per day on documentation, forms, and repetitive data entry — time stolen directly from patient care.",
    metric: "2 hrs",
    metricLabel: "lost per doctor, daily",
    color: "#b7590a",
    bgLight: "#fdf5ed",
  },
  {
    number: "03",
    title: "Disconnected Systems",
    body: "Labs, pharmacies, EHRs, and billing platforms don't talk to each other. Critical data gets lost in the gaps, slowing diagnoses and care decisions.",
    metric: "68%",
    metricLabel: "of clinics use 3+ tools",
    color: "#7c3fa0",
    bgLight: "#f8f2fd",
  },
  {
    number: "04",
    title: "Billing & Compliance Errors",
    body: "Manual coding and claim submissions result in denial rates as high as 30%, draining revenue and overwhelming administrative staff with rework.",
    metric: "$125K",
    metricLabel: "avg. annual revenue lost",
    color: "#1a6b6b",
    bgLight: "#eef8f8",
  },
];
 
const quotes = [
  { text: "I spend more time on paperwork than with my patients.", role: "General Practitioner, Accra" },
  { text: "We had three double-bookings last week alone.", role: "Clinic Manager, Lagos" },
  { text: "Our billing errors cost us tens of thousands every year.", role: "Practice Owner, Nairobi" },
];
 
/* ── component ── */
export default function ClinicSyncProblem() {
  const [heroRef, heroIn] = useInView(0.1);
  const [statsRef, statsIn] = useInView(0.2);
  const [cardsRef, cardsIn] = useInView(0.1);
  const [quoteRef, quoteIn] = useInView(0.2);
  const [activeQuote, setActiveQuote] = useState(0);
 
  const counter1 = useCounter(73, 1800, statsIn);
  const counter2 = useCounter(40, 1800, statsIn);
  const counter3 = useCounter(30, 1800, statsIn);
 
  useEffect(() => {
    const id = setInterval(() => setActiveQuote(q => (q + 1) % quotes.length), 3800);
    return () => clearInterval(id);
  }, []);
 
  return (
    <section className="bg-[#0e1f17] min-h-screen font-sans overflow-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:wght@300;400;500&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body   { font-family: 'DM Sans', sans-serif; }
 
        /* entrance animations */
        .fade-up { opacity:0; transform:translateY(36px); transition:opacity .75s ease, transform .75s ease; }
        .fade-up.in { opacity:1; transform:translateY(0); }
        .fade-up.d1 { transition-delay:.08s; }
        .fade-up.d2 { transition-delay:.18s; }
        .fade-up.d3 { transition-delay:.30s; }
        .fade-up.d4 { transition-delay:.44s; }
        .fade-up.d5 { transition-delay:.58s; }
 
        /* card hover */
        .prob-card { transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease; }
        .prob-card:hover { transform:translateY(-5px); box-shadow:0 20px 48px rgba(0,0,0,.35); border-color:rgba(255,255,255,.18) !important; }
 
        /* quote fade */
        .quote-text { transition: opacity .5s ease, transform .5s ease; }
        .quote-text.hidden-q { opacity:0; transform:translateY(8px); }
        .quote-text.visible-q { opacity:1; transform:translateY(0); }
 
        /* noise overlay */
        .noise::after {
          content:'';
          position:absolute;
          inset:0;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events:none;
          opacity:.45;
          border-radius:inherit;
        }
 
        /* glow ring */
        .glow-green { box-shadow:0 0 0 1px rgba(58,125,94,.25), 0 8px 32px rgba(45,110,78,.2); }
        .stat-divider { border-right:1px solid rgba(255,255,255,.1); }
 
        /* progress bar */
        .bar-fill { transition: width 1.8s cubic-bezier(.16,1,.3,1); }
      `}</style>
 
      {/* ── background decorations ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#1e4a30] opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#3a7d5e] opacity-10 blur-3xl pointer-events-none translate-x-32 translate-y-32" />
 
      <div className="relative max-w-6xl mx-auto px-6 py-24">
 
        {/* ── HEADER ── */}
        <div ref={heroRef} className="mb-20">
          <div className={`fade-up ${heroIn ? "in" : ""} flex items-center gap-3 mb-6`}>
            <span className="w-6 h-px bg-[#e05252]" />
            <p className="font-body text-[#e05252] text-xs tracking-widest uppercase font-medium">The Problem</p>
          </div>
 
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className={`fade-up d1 ${heroIn ? "in" : ""} font-display text-5xl md:text-[64px] font-700 text-white leading-[1.05] max-w-lg`}>
              Clinics are{" "}
              <em className="not-italic text-[#e05252]">breaking</em>{" "}
              under the weight of the old way.
            </h2>
            <p className={`fade-up d2 ${heroIn ? "in" : ""} font-body text-[#7a9a84] text-base leading-relaxed max-w-xs md:text-right`}>
              Before ClinicSync AI, healthcare teams fight daily battles against
              systems that were never built to work together — and patients pay the price.
            </p>
          </div>
        </div>
 
        {/* ── STATS BAND ── */}
        <div
          ref={statsRef}
          className={`fade-up ${statsIn ? "in" : ""} noise relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm mb-8 overflow-hidden`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              { val: counter1, suffix: "%", label: "of clinic staff say admin tasks hurt patient care", sub: "Source: MGMA 2024" },
              { val: counter2, suffix: "%", label: "of medical errors traced to communication breakdowns", sub: "Source: Joint Commission" },
              { val: counter3, suffix: "%", label: "average insurance claim denial rate at manual clinics", sub: "Source: AMA Report" },
            ].map(({ val, suffix, label, sub }, i) => (
              <div key={i} className="px-8 py-10 flex flex-col justify-between gap-2">
                <p className="font-display text-[56px] font-700 leading-none text-white">
                  {val}<span className="text-[#e05252]">{suffix}</span>
                </p>
                <div>
                  <p className="font-body text-[#b0cabb] text-sm leading-snug">{label}</p>
                  <p className="font-body text-[#4a6259] text-xs mt-1">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
 
        {/* ── PROBLEM CARDS ── */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {problems.map((p, i) => (
            <div
              key={p.number}
              className={`fade-up d${i + 1} ${cardsIn ? "in" : ""} prob-card rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between gap-6`}
            >
              {/* top row */}
              <div className="flex items-start justify-between gap-4">
                <span
                  className="font-display text-[80px] font-700 leading-none select-none"
                  style={{ color: "rgba(255,255,255,0.06)" }}
                >
                  {p.number}
                </span>
                <span
                  className="font-body text-[11px] tracking-widest uppercase font-medium px-3 py-1 rounded-full border mt-2"
                  style={{ color: p.color, borderColor: p.color + "55", background: p.color + "18" }}
                >
                  Critical
                </span>
              </div>
 
              {/* content */}
              <div className="-mt-8">
                <h3 className="font-display text-2xl font-600 text-white mb-3">{p.title}</h3>
                <p className="font-body text-[#7a9a84] text-sm leading-relaxed">{p.body}</p>
              </div>
 
              {/* metric bar */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-body text-xs text-[#4a6259]">{p.metricLabel}</p>
                  <p className="font-display text-lg font-600" style={{ color: p.color }}>{p.metric}</p>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="bar-fill h-full rounded-full"
                    style={{
                      width: cardsIn ? (i === 0 ? "72%" : i === 1 ? "85%" : i === 2 ? "60%" : "78%") : "0%",
                      background: `linear-gradient(90deg, ${p.color}88, ${p.color})`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
 
        {/* ── QUOTE ROTATOR + CTA ── */}
        <div ref={quoteRef} className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {/* Quote card */}
          <div className={`fade-up ${quoteIn ? "in" : ""} md:col-span-3 rounded-3xl border border-white/10 bg-white/5 p-10 flex flex-col justify-between min-h-[200px] relative overflow-hidden`}>
            <div className="absolute top-6 left-8 font-display text-[120px] leading-none text-white/5 select-none pointer-events-none">"</div>
            <div className="relative z-10">
              {quotes.map((q, i) => (
                <div
                  key={i}
                  className={`quote-text absolute top-0 left-0 ${i === activeQuote ? "visible-q" : "hidden-q"}`}
                  style={{ position: i === activeQuote ? "relative" : "absolute" }}
                >
                  <p className="font-display text-2xl md:text-3xl italic text-white font-300 leading-snug mb-4">
                    "{q.text}"
                  </p>
                  <p className="font-body text-[#4a6259] text-sm">— {q.role}</p>
                </div>
              ))}
            </div>
            {/* dots */}
            <div className="flex gap-2 mt-8">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveQuote(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === activeQuote ? "28px" : "8px",
                    background: i === activeQuote ? "#3a7d5e" : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>
          </div>
 
          {/* CTA card */}
          <div className={`fade-up d2 ${quoteIn ? "in" : ""} md:col-span-2 rounded-3xl bg-[#3a7d5e] glow-green p-10 flex flex-col justify-between relative overflow-hidden`}>
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#2d6e4e] translate-x-16 translate-y-16 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-display text-3xl font-600 text-white leading-snug mb-3">
                There's a better way.
              </h3>
              <p className="font-body text-[#aed4c0] text-sm leading-relaxed">
                ClinicSync AI was built specifically to eliminate every one of these problems —
                so your clinic runs the way it was always meant to.
              </p>
            </div>
            <a
              href="#"
              className="relative z-10 mt-8 font-body inline-flex items-center gap-2 bg-white text-[#2d6e4e] text-sm font-medium rounded-full px-6 py-3 w-fit hover:bg-[#edf6f0] transition-colors"
            >
              See the solution
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
 