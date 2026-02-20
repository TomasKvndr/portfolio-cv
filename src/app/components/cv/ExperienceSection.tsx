import React from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../../imports/svg-l2g5nvtsf0";

function IconChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1 4L7 10L13 4" stroke="#d9ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const experiences = [
  {
    period: "2023-PRESENT",
    location: "REMOTE",
    title: "UI/UX Designer",
    company: "LORE S.R.O",
    details: [
      "Scalable Design Systems",
      "SaaS & Web App Design",
      "Client Strategy & Discovery",
      "End-to-End UX Workflows"
    ],
    isRemote: true
  },
  {
    period: "2024-2025",
    location: "ŽILINA",
    title: "SQL/IT Consultant",
    company: "KROS A.S.",
    details: [
      "Microsoft Azure monitoring",
      "Database resolution",
      "IT support & infrastructure"
    ],
    isRemote: false
  },
  {
    period: "2024-2025",
    location: "ŽILINA",
    title: "SQL Analyst",
    company: "Cargo Partner SK",
    details: [
      "MS SQL Database Management",
      "Power BI Data Visualization",
      "Performance Optimization"
    ],
    isRemote: false
  },
  {
    period: "2021-2023",
    location: "BRATISLAVA",
    title: "Volume Transaction Pricer",
    company: "IBM Slovensko",
    details: [
      "B2B Contracts Management",
      "EMEA Price Optimization",
      "Cross-departmental Reporting"
    ],
    isRemote: false
  }
];

export function ExperienceSection() {
  const [isOpen, setIsOpen] = React.useState(true); // Default open to fill grid
  
  const firstItem = experiences[0];
  const restItems = experiences.slice(1);

  const ExperienceRow = ({ item, index }: { item: typeof experiences[0], index: number }) => (
    <div className="group border-b border-[rgba(255,255,255,0.1)] hover:bg-[#d9ff00]/5 transition-colors duration-300">
        <div className="flex flex-col md:flex-row md:items-start py-5 px-5 gap-4 md:gap-6">
            {/* Index & Meta - Fixed Width */}
            <div className="flex items-start gap-3 md:w-[140px] shrink-0 pt-1.5">
                <span className="font-mono text-[12px] text-[#d9ff00]/50 font-bold">{(index + 1).toString().padStart(2, '0')}</span>
                <div className="flex flex-col">
                    <span className="font-mono text-[12px] text-gray-500 uppercase leading-none mb-1">{item.period}</span>
                    <span className="font-mono text-[10px] text-gray-600 uppercase flex items-center gap-1">
                        {item.location}
                        {item.isRemote && <span className="w-1.5 h-1.5 rounded-full bg-[#d9ff00]"></span>}
                    </span>
                </div>
            </div>
            
            {/* Title - Flex 1 */}
            <div className="flex-1 min-w-0">
                <h3 className="font-['Inter'] font-black text-[20px] md:text-[24px] text-[#e0e0e0] leading-none uppercase group-hover:text-[#d9ff00] transition-colors truncate">
                    {item.title}
                </h3>
                <p className="font-mono text-[11px] text-gray-400 mt-1 uppercase tracking-wider">{item.company}</p>
                
                {/* Details moved below title for better mobile/narrow fit, but flex row on desktop */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.details.map((d, i) => (
                        <span key={i} className="font-mono text-[10px] uppercase border border-white/10 bg-white/5 px-2 py-0.5 rounded text-gray-300 group-hover:text-white group-hover:border-[#d9ff00]/30 transition-all cursor-default whitespace-nowrap">
                            {d}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col border-b border-[rgba(255,255,255,0.2)]">


      {/* Section Header */}
      <div 
        className="py-4 px-5 border-b border-[rgba(255,255,255,0.2)] flex justify-between items-end bg-[#0a0a0a]"
      >
        <div className="flex flex-col gap-1">
            <h2 className="font-['Inter'] font-black text-[24px] text-[#d9ff00] leading-none uppercase tracking-tight">
                JOB<br/>EXPERIENCES
            </h2>
            
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col">
          <ExperienceRow item={firstItem} index={0} />

          <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden flex flex-col"
                >
                    {restItems.map((exp, index) => (
                        <ExperienceRow key={index} item={exp} index={index + 1} />
                    ))}
                </motion.div>
            )}
          </AnimatePresence>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full py-3 bg-[#0a0a0a] hover:bg-[#d9ff00] hover:text-black text-[#d9ff00] font-mono text-[10px] uppercase font-bold tracking-widest border-b border-[rgba(255,255,255,0.1)] transition-all flex items-center justify-center gap-2 group"
          >
            {isOpen ? "COLLAPSE ARCHIVE" : "VIEW FULL ARCHIVE"}
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none" className="stroke-current">
                    <path d="M1 4L7 10L13 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </motion.div>
          </button>
      </div>
    </div>
  );
}
