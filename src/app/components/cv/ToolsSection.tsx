import React from "react";
import imgCss31 from "figma:asset/f3334973a2702809b7ccf470be822909dd8c6cb2.png";
import { 
  IconAdobeCreativeCloud, 
  IconAdobePhotoshop, 
  IconAdobeLightroom, 
  IconFigma, 
  IconHTML5, 
  IconWordpress, 
  IconGithub, 
  IconMSSQL, 
  IconMicrosoftOffice, 
  IconAITools,
  IconFramer
} from "./Icons";

export function ToolsSection() {
  return (
    <div className="w-full flex flex-col border-b border-[rgba(255,255,255,0.2)]">
      {/* Section Header */}
      <div className="py-3 px-4 border-b border-[rgba(255,255,255,0.2)] bg-[#0a0a0a]">
        <h2 className="font-['Inter'] font-black text-[24px] text-[#e0e0e0] leading-none uppercase tracking-tight">
            TECHNICAL<br/><span className="text-[#d9ff00]">STACK</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4">
        {[
            { icon: <IconFigma />, name: "Figma" },
            { icon: <IconFramer />, name: "Framer" },
            { icon: <IconAdobeCreativeCloud />, name: "Adobe CC" },
            { icon: <IconAdobePhotoshop />, name: "Photoshop" },
            { icon: <IconAdobeLightroom />, name: "Lightroom" },
            { icon: <IconHTML5 />, name: "HTML 5" },
            { icon: <img src={imgCss31} alt="CSS" className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />, name: "CSS 3" },
            { icon: <IconWordpress />, name: "Wordpress" },
            { icon: <IconGithub />, name: "Github/Git" },
            { icon: <IconMSSQL />, name: "SQL" },
            { icon: <IconMicrosoftOffice />, name: "Office" },
            { icon: <IconAITools />, name: "AI Tools" },
        ].map((tool, idx) => (
            <div key={idx} className="group border-r border-b border-[rgba(255,255,255,0.1)] p-2 flex flex-col items-center justify-center gap-2 hover:bg-[#d9ff00]/10 transition-colors aspect-square">
                <div className="w-[20px] h-[20px] text-gray-500 group-hover:text-[#d9ff00] transition-colors">
                    {tool.icon}
                </div>
                <span className="font-mono text-[9px] text-gray-400 uppercase text-center group-hover:text-white transition-colors">{tool.name}</span>
            </div>
        ))}
      </div>
      
      <div className="p-3 font-mono text-[10px] text-gray-500 leading-relaxed border-b border-[rgba(255,255,255,0.1)]">
        BRIDGE BETWEEN TECHNICAL ARCHITECTURE, BUSINESS STRATEGY AND UX/UI DESIGN.
      </div>
    </div>
  );
}
