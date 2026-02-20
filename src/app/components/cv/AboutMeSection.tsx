import React from "react";

export function AboutMeSection() {
  return (
    <div className="w-full flex flex-col border-b border-[rgba(255,255,255,0.2)]">
      <div className="py-8 px-5 bg-[#0a0a0a]">
         <h2 className="font-['Inter'] font-black text-[32px] text-[#e0e0e0] leading-none uppercase tracking-[-1px] mb-4">
            ABOUT<br/><span className="text-[#d9ff00]">ME</span>
         </h2>
         <p className="font-mono text-[12px] text-gray-400 leading-relaxed max-w-[480px] uppercase">
            Most designers start with art; I started with databases and pricing strategies. This background shaped my entire approach to UX/UI: I treat design not just as an aesthetic layer, but as visual logic. I love turning complex business requirements into clean, premium, and conversion-focused interfaces. I work with a low ego, value honest feedback, and design to solve real problems.
         </p>
      </div>
    </div>
  );
}
