import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function HeaderSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="bg-[#d9ff00] text-black w-full border-b border-black relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      ></div>
      
      <div className="flex flex-col md:flex-row min-h-[400px]">
        {/* Left: Typography */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-between border-r border-black/10 relative z-10">
           <div>
              <p className="font-mono text-[12px] tracking-[1.2px] uppercase font-bold mb-4">CV / RESUME</p>
              <h1 className="font-['Inter'] font-black text-[60px] md:text-[80px] leading-[0.9] tracking-[-3px] uppercase mb-2">
                TOMAS<br/>KOVACIK
              </h1>
              <div className="w-[60px] h-[4px] bg-black mt-6 mb-6"></div>
           </div>

           <div className="flex flex-col gap-1 font-mono text-[12px] uppercase font-bold tracking-wide">
              <p>UX/UI Designer</p>
              <p>BASED IN BRATISLAVA</p>
              <p>OPEN FOR WORK</p>
           </div>
        </div>

        {/* Right: Photo & Quick Stats */}
        <div className="w-full md:w-[400px] flex flex-col border-t md:border-t-0 md:border-l border-black/10 relative z-10 bg-black">
            {/* Photo Container */}
            <div ref={containerRef} className="h-[300px] relative overflow-hidden group border-b border-white/20">
                <motion.div 
                    style={{ y }} 
                    className="absolute top-[-10%] left-0 w-full h-[120%]"
                >
                    <ImageWithFallback 
                        src={"/profile.png"} 
                        alt="Profile" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </motion.div>
                
                <div className="absolute inset-0 bg-[#d9ff00]/10 mix-blend-overlay pointer-events-none"></div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 bg-black px-2 py-1 border border-white/20">
                    <p className="font-mono text-[10px] text-[#d9ff00] uppercase">PROFILE_IMG_01.PNG</p>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="flex-1 grid grid-cols-2">
                <div className="border-r border-b border-white/20 p-4 flex flex-col justify-center items-center hover:bg-[#1a1a1a] transition-colors">
                    <p className="font-mono text-[10px] text-gray-500 uppercase mb-1">Experience</p>
                    <p className="font-['Inter'] font-bold text-[24px] text-white">3+ YRS</p>
                </div>
                <div className="border-b border-white/20 p-4 flex flex-col justify-center items-center hover:bg-[#1a1a1a] transition-colors">
                    <p className="font-mono text-[10px] text-gray-500 uppercase mb-1">Projects</p>
                    <p className="font-['Inter'] font-bold text-[24px] text-white">10 +</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
