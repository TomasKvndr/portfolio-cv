import React from "react";
import { motion, AnimatePresence } from "motion/react";

const skills = [
  "Emphatic", 
  "Proactive attitude", 
  "Feedback-Driven",
  "Team-first mindset", 
  "Low-Ego Collaboration",
  "Agile", 
  "Cross-Functional Empathy"
];

export function SoftSkillsSection() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="w-full flex flex-col border-b border-[rgba(255,255,255,0.2)]">
      {/* Section Header */}
      <div className="py-6 px-4 border-b border-[rgba(255,255,255,0.2)] bg-[#0a0a0a]">
        <h2 className="font-['Inter'] font-black text-[24px] text-[#e0e0e0] leading-none uppercase tracking-tight">
            SOFT<br/><span className="text-[#d9ff00]">SKILLS</span>
        </h2>
      </div>

      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden flex flex-col p-4 gap-2"
            >
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="font-mono text-[10px] text-gray-400 uppercase border border-[rgba(255,255,255,0.1)] px-3 py-2 hover:bg-[#d9ff00]/10 hover:text-[#d9ff00] hover:border-[#d9ff00] transition-colors cursor-default"
                    >
                    {skill}
                    </div>
                ))}
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
