import React from "react";
import { motion, AnimatePresence } from "motion/react";

const interests = [
    { name: "Music", active: true },
    { name: "Gym", active: false },
    { name: "Travelling", active: true },
    { name: "Tennis", active: false },
    { name: "Hiking", active: true },
    { name: "Design", active: false }
];

export function InterestsSection() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="w-full flex flex-col border-b border-[rgba(255,255,255,0.2)]">
      {/* Section Header */}
      <div className="py-3 px-4 border-b border-[rgba(255,255,255,0.2)] bg-[#0a0a0a]">
        <h2 className="font-['Inter'] font-black text-[24px] text-[#e0e0e0] leading-none uppercase tracking-tight">
            PERSONAL<br/><span className="text-[#d9ff00]">INTERESTS</span>
        </h2>
      </div>

      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-3 gap-px bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)]"
            >
                {interests.map((interest, index) => (
                    <div 
                        key={index} 
                        className={`bg-[#0a0a0a] p-2 flex flex-col justify-center items-center hover:bg-[#d9ff00]/10 transition-colors group aspect-square`}
                    >
                        <div className={`w-1.5 h-1.5 rounded-full mb-2 ${interest.active ? 'bg-[#d9ff00] shadow-[0_0_5px_#d9ff00]' : 'bg-gray-700'}`}></div>
                        <span className={`font-mono text-[9px] uppercase text-center ${interest.active ? 'text-white' : 'text-gray-500'} group-hover:text-[#d9ff00] transition-colors leading-tight`}>{interest.name}</span>
                    </div>
                ))}
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
