import React from "react";

export function ContactInfo() {
  return (
    <div className="w-full flex flex-col border-b border-[rgba(255,255,255,0.2)]">
      {/* Contact Header */}
      <div className="py-6 px-4 border-b border-[rgba(255,255,255,0.2)] bg-[#0a0a0a]">
        <h2 className="font-['Inter'] font-black text-[24px] text-[#e0e0e0] leading-none uppercase tracking-tight">
            CONTACT<br/><span className="text-[#d9ff00]">DETAILS</span>
        </h2>
      </div>

      {/* Rows */}
      <div className="grid grid-cols-1 divide-y divide-[rgba(255,255,255,0.1)]">
        <a href="mailto:kovaciktomas09@gmail.com" className="p-4 flex flex-col hover:bg-[#d9ff00]/10 transition-colors group">
            <span className="font-mono text-[10px] text-gray-500 uppercase mb-1">Email Address</span>
            <span className="font-mono text-[12px] text-white group-hover:text-[#d9ff00] transition-colors break-all">kovaciktomas09@gmail.com</span>
        </a>
        
        <a href="tel:+421911865233" className="p-4 flex flex-col hover:bg-[#d9ff00]/10 transition-colors group">
            <span className="font-mono text-[10px] text-gray-500 uppercase mb-1">Phone Number</span>
            <span className="font-mono text-[12px] text-white group-hover:text-[#d9ff00] transition-colors">+421 911 865 233</span>
        </a>

        <a href="https://linkedin.com/in/kovaciktomas" target="_blank" rel="noopener noreferrer" className="p-4 flex flex-col hover:bg-[#d9ff00]/10 transition-colors group">
            <span className="font-mono text-[10px] text-gray-500 uppercase mb-1">LinkedIn Profile</span>
            <span className="font-mono text-[12px] text-white group-hover:text-[#d9ff00] transition-colors break-all">linkedin.com/in/kovaciktomas</span>
        </a>
      </div>
    </div>
  );
}
