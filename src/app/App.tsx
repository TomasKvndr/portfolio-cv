import { HeaderSection } from "./components/cv/HeaderSection";
import { ContactInfo } from "./components/cv/ContactInfo";
import { EducationSection } from "./components/cv/EducationSection";
import { ToolsSection } from "./components/cv/ToolsSection";
import { ExperienceSection } from "./components/cv/ExperienceSection";
import { SoftSkillsSection } from "./components/cv/SoftSkillsSection";
import { InterestsSection } from "./components/cv/InterestsSection";
import { AboutMeSection } from "./components/cv/AboutMeSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex justify-center py-10 px-4 font-sans text-[#e0e0e0]">
      <div className="flex flex-col max-w-[1000px] w-full border-l border-r border-t border-[rgba(255,255,255,0.2)]">
        
        {/* Header Hero - Full Width */}
        <HeaderSection />
        
        {/* Main Content Grid 
            Mobile: Flex-like column order via Grid order
            Desktop: 2 Columns
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] lg:grid-rows-[min-content_min-content_min-content_min-content_1fr] border-b border-[rgba(255,255,255,0.2)]">
          
          {/* 1. Contact Info */}
          <div className="order-1 lg:col-start-1 lg:row-start-1 lg:border-r border-[rgba(255,255,255,0.2)]">
            <ContactInfo />
          </div>

          {/* 2. About Me (Right Col top) */}
          <div className="order-2 lg:col-start-2 lg:row-start-1">
            <AboutMeSection />
          </div>

          {/* 3. Academic Background */}
          <div className="order-3 lg:col-start-1 lg:row-start-2 lg:border-r border-[rgba(255,255,255,0.2)]">
            <EducationSection />
          </div>

          {/* 4. Job Experiences (Right Col below About Me) */}
          <div className="order-4 lg:col-start-2 lg:row-start-2 lg:row-span-4">
            <ExperienceSection />
          </div>

          {/* 5. Technical Stack */}
          <div className="order-5 lg:col-start-1 lg:row-start-3 lg:border-r border-[rgba(255,255,255,0.2)]">
            <ToolsSection />
          </div>

          {/* 6. Soft Skills */}
          <div className="order-6 lg:col-start-1 lg:row-start-4 lg:border-r border-[rgba(255,255,255,0.2)]">
            <SoftSkillsSection />
          </div>

          {/* 7. Personal Interests */}
          <div className="order-7 lg:col-start-1 lg:row-start-5 lg:border-r border-[rgba(255,255,255,0.2)]">
            <InterestsSection />
          </div>

        </div>
        
        {/* Footer / Status Bar */}
        <div className="bg-[#d9ff00] h-[48px] flex items-center justify-between px-6 text-black border-b border-l border-r border-[rgba(255,255,255,0.2)]">
           <div className="flex items-center gap-4">
              <span className="font-mono text-[12px] uppercase font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full border border-black relative"><span className="absolute inset-0 m-auto w-1 h-1 bg-black rounded-full"></span></span>
                Based in EU
              </span>
              <span className="font-mono text-[12px] uppercase font-bold flex items-center gap-2">
                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7L3 11L7 1L10 11L13 7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
                 System_Normal
              </span>
           </div>
           
           <div className="hidden sm:flex items-center gap-2 bg-black/10 px-3 py-1 rounded-full border border-black/10">
              <div className="w-2 h-2 bg-[#00c950] rounded-full"></div>
              <span className="font-mono text-[10px] uppercase font-bold">Open for New Roles</span>
           </div>
           
           <span className="font-mono text-[10px] uppercase font-bold">TOMAS.K — REV.2026</span>
        </div>

      </div>
    </div>
  );
}
