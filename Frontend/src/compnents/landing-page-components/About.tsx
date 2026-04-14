import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }, []);

  return (
    <section
      id="about"
      className="relative py-30 overflow-hidden bg-[#080e0b] py-6 px-6 md:px-12 lg:px-20"
    >
      {/* background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[length:48px_48px]" />
      </div>

      {/* glow */}
      <div className="absolute top-[-120px] right-[-200px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(26,92,54,0.28)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-[48px] relative z-10">

        {/* LABEL */}
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-8 rounded-full border border-[rgba(34,197,94,0.15)] bg-[rgba(34,197,94,0.08)] text-[#22c55e] text-xs font-semibold tracking-[0.08em] uppercase reveal opacity-0 translate-y-6 transition-all duration-700">
          <span className="w-[6px] h-[6px] rounded-full bg-[#22c55e] animate-pulse"></span>
          About ClinicSync AI
        </div>

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-[80px] mb-[80px]">

          <h2 className="text-[clamp(36px,4vw,52px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-white reveal opacity-0 translate-y-6 transition-all duration-700">
            Built for the reality of{" "}
            <span className="text-[#22c55e]">African healthcare.</span>
          </h2>

          <div className="pt-2 reveal opacity-0 translate-y-6 transition-all duration-700 space-y-8">

            <p className="text-[17px] leading-[1.75] font-light text-[#8aab92]">
              ClinicSync AI is an{" "}
              <span className="text-white font-medium">
                AI-powered triage and scheduling platform
              </span>{" "}
              built specifically for public hospitals in Ghana. We understand
              overcrowded ERs, manual queues, and patient confusion.
            </p>

            <div className="flex items-start gap-4 p-5 bg-[#0f1710] border border-[rgba(255,255,255,0.07)] border-l-[3px] border-l-[#16a34a] rounded-r-[12px]">
              <p className="text-[14px] leading-[1.65] italic text-[#8aab92]">
                Our mission is simple:{" "}
                <span className="not-italic text-white font-semibold">
                  get the right patient to the right care at the right time
                </span>{" "}
                using AI without replacing clinicians.
              </p>
            </div>

          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-[1px] bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.07)] rounded-[16px] overflow-hidden mb-[80px]">

          {[
            {
              value: "35%",
              title: "ER Reduction",
              desc: "Fewer unnecessary emergency visits through AI triage",
            },
            {
              value: "30%",
              title: "Faster Care",
              desc: "Patients reach correct departments faster",
            },
            {
              value: "200+",
              title: "Patients / Day",
              desc: "Built for high-volume hospital environments",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#0f1710] p-9 flex flex-col gap-2 hover:bg-[#141f16] transition"
            >
              <div className="text-[48px] font-extrabold text-[#22c55e] leading-none">
                {item.value}
              </div>
              <div className="text-[13px] uppercase tracking-[0.02em] text-[#8aab92] font-medium">
                {item.title}
              </div>
              <div className="text-[13px] text-[#4d6b55] leading-[1.5]">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* PILLARS */}
        <div className="mb-[80px]">
          <div className="mb-8">
            <h3 className="text-[11px] uppercase tracking-[0.12em] text-[#4d6b55] font-semibold mb-3">
              What we stand for
            </h3>
            <p className="text-[28px] font-bold text-white leading-[1.25]">
              Three principles behind every design decision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">

            {[
              {
                title: "Patient Safety First",
                desc: "AI supports clinicians and escalates high-risk cases.",
                icon: "🛡️",
              },
              {
                title: "Designed for Low-Bandwidth",
                desc: "Optimized for weak networks and low-end devices.",
                icon: "📶",
              },
              {
                title: "Real-Time for Admins",
                desc: "Live dashboards and smart scheduling tools.",
                icon: "📊",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-[#0f1710] border border-[rgba(255,255,255,0.07)] rounded-[16px] p-8 hover:border-[rgba(34,197,94,0.2)] hover:-translate-y-1 transition"
              >
                <div className="w-[44px] h-[44px] mb-5 flex items-center justify-center rounded-[10px] bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.15)] text-[#22c55e] text-xl">
                  {item.icon}
                </div>

                <h4 className="text-[18px] font-bold text-white mb-3">
                  {item.title}
                </h4>

                <p className="text-[14px] leading-[1.7] text-[#8aab92]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* GHANA BANNER */}
        <div className="relative bg-[#0f1710] border border-[rgba(255,255,255,0.07)] rounded-[20px] p-[48px] md:p-[56px] overflow-hidden">

          <div className="absolute bottom-[-60px] right-[-60px] w-[280px] h-[280px] bg-[radial-gradient(circle,rgba(26,92,54,0.18)_0%,transparent_65%)]" />

          <div className="grid md:grid-cols-2 gap-[48px] items-center relative z-10">

            <div>
              <h3 className="text-[26px] font-bold text-white mb-4">
                Rooted in <span className="text-[#22c55e]">Ghana.</span> Ready to scale.
              </h3>

              <p className="text-[15px] leading-[1.75] text-[#8aab92]">
                Built for Korle-Bu, KATH, and 37 Military Hospital with NHIS
                systems, multilingual users, and real hospital conditions.
              </p>
            </div>

            <div className="flex flex-col gap-3">

              {[
                ["KATH", "Komfo Anokye Teaching Hospital"],
                ["Korle-Bu", "Korle Bu Teaching Hospital"],
                ["37 Military", "37 Military Hospital, Accra"],
              ].map((h, i) => (
                <div
                  key={i}
                  className="flex flex-col p-4 bg-[#080e0b] border border-[rgba(34,197,94,0.2)] rounded-[10px]"
                >
                  <span className="text-white font-semibold">{h[0]}</span>
                  <span className="text-[11px] text-[#4d6b55]">{h[1]}</span>
                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;