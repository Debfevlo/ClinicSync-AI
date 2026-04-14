import React, { useEffect } from "react";

const Problem = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <section className="relative py-[120px] bg-white overflow-hidden">
      
      {/* subtle red glow */}
      <div className="absolute top-[-150px] left-[-200px] w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* LABEL */}
        <div className="reveal inline-flex items-center gap-2 px-4 py-1 mb-10 rounded-full border border-red-200 bg-red-50 text-red-500 text-xs font-semibold uppercase tracking-widest">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          The Problem
        </div>

        {/* HEADLINE */}
        <h2 className="reveal text-4xl md:text-5xl font-bold text-[#080e0b] leading-tight mb-10">
          Hospitals are overwhelmed.{" "}
          <span className="text-red-500">Patients are lost.</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="reveal text-gray-600 text-lg max-w-2xl mb-16 leading-relaxed">
          In many public hospitals across Ghana, patients arrive without direction.
          There is no structured triage system, queues are manual, and healthcare
          workers are forced to make fast decisions under pressure.
        </p>

        {/* PROBLEM CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Overcrowded Emergency Rooms",
              desc: "Patients flood ER units even for non-emergency cases, increasing pressure and delaying critical care.",
            },
            {
              title: "No Clear Patient Routing",
              desc: "Patients don’t know which department to visit, leading to confusion and wasted time.",
            },
            {
              title: "Manual & Paper-Based Systems",
              desc: "Hospital staff rely on outdated systems that slow down scheduling and patient management.",
            },
            {
              title: "Long Waiting Times",
              desc: "Patients spend hours waiting without knowing when they will be attended to.",
            },
            {
              title: "Overworked Healthcare Staff",
              desc: "Doctors and nurses are overwhelmed, increasing the risk of burnout and mistakes.",
            },
            {
              title: "Poor Patient Experience",
              desc: "Frustration, confusion, and delays reduce trust in the healthcare system.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="reveal bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <h4 className="text-[#080e0b] font-semibold mb-2">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* STRONG STATEMENT */}
        <div className="reveal mt-20 border border-red-200 bg-red-50 rounded-2xl p-8 text-center">
          <p className="text-lg text-gray-700">
            Without a structured triage system,{" "}
            <span className="text-[#080e0b] font-semibold">
              critical patients can be delayed
            </span>{" "}
            while non-urgent cases take up valuable time and resources.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Problem;