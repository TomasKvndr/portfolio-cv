import React from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../../imports/svg-l2g5nvtsf0";

const educationData = [
  {
    period: "2019-2023",
    type: "UNIVERSITY",
    field: "Economic Informatics",
    school: "UNIVERSITY OF ECONOMICS IN BRATISLAVA",
  },
  {
    period: "2017-2018",
    type: "UNIVERSITY",
    field: "Computer Engineering",
    school: "UNIVERSITY OF ŽILINA",
  },
  {
    period: "2013-2017",
    type: "HIGH SCHOOL",
    field: "Tourist Business",
    school: "TRAFFIC ACADEMY IN ŽILINA",
  }
];

export function EducationSection() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const firstItem = educationData[0];
  const restItems = educationData.slice(1);

  const EducationRow = ({ item, index }: { item: typeof educationData[0], index: number }) => (
    <div className="group border-b border-[rgba(255,255,255,0.1)] hover:bg-[#d9ff00]/5 transition-colors duration-300">
        <div className="flex flex-col py-4 px-4 gap-2">
            <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-[#d9ff00]/50 font-bold">{(index + 1).toString().padStart(2, '0')}</span>
                <span className="font-mono text-[10px] text-gray-500 uppercase">{item.period}</span>
            </div>
            
            <div>
                <h3 className="font-['Inter'] font-bold text-[16px] text-[#e0e0e0] leading-tight uppercase group-hover:text-[#d9ff00] transition-colors">
                    {item.field}
                </h3>
                <p className="font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-wide">{item.school}</p>
            </div>
        </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col border-b border-[rgba(255,255,255,0.2)]">
      {/* Section Header */}
      <div className="py-6 px-4 border-b border-[rgba(255,255,255,0.2)] bg-[#0a0a0a]">
        <h2 className="font-['Inter'] font-black text-[24px] text-[#e0e0e0] leading-none uppercase tracking-tight">
            ACADEMIC<br/><span className="text-[#d9ff00]">BACKGROUND</span>
        </h2>
      </div>

      {/* List */}
      <div className="flex flex-col">
          <EducationRow item={firstItem} index={0} />

          <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden flex flex-col"
                >
                    {restItems.map((edu, index) => (
                        <EducationRow key={index} item={edu} index={index + 1} />
                    ))}
                </motion.div>
            )}
          </AnimatePresence>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full py-3 bg-[#0a0a0a] hover:bg-[#d9ff00] hover:text-black text-[#d9ff00] font-mono text-[10px] uppercase font-bold tracking-widest border-b border-[rgba(255,255,255,0.1)] transition-all flex items-center justify-center gap-2 group"
          >
            {isOpen ? "COLLAPSE" : "VIEW ALL"}
          </button>
      </div>
    </div>
  );
}
