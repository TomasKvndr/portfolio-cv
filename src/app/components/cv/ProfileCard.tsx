import { ImageWithFallback } from "../figma/ImageWithFallback";
import imgProfile from "figma:asset/75da9d80dd5a8b4c5bc0d439f75f0bff558ea3aa.png";

export function ProfileCard() {
  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Header */}
      <div className="bg-[#2b2b2b] rounded-[16px] p-6 text-white mb-2">
        <p className="font-['Poppins'] font-semibold text-[16px]">Hello 👋, I’m</p>
        <h1 className="font-['Poppins'] font-bold text-[24px]">Tomáš Kováčik</h1>
        
        <div className="flex items-center justify-end mt-2">
          <span className="text-[12px] font-semibold mr-2">Open for work</span>
          <div className="relative w-5 h-5">
             <div className="absolute inset-[-80%] bg-[#73FF48] opacity-50 blur-lg rounded-full w-full h-full"></div>
             <div className="w-2.5 h-2.5 bg-[#73FF48] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#73FF48]"></div>
          </div>
        </div>
      </div>

      {/* Photo & Info */}
      <div className="flex gap-2">
        <div className="w-[48%] relative rounded-[16px] overflow-hidden h-[267px]">
            <ImageWithFallback 
                src={imgProfile} 
                alt="Profile" 
                className="w-full h-full object-cover"
            />
        </div>
        
        <div className="flex-1 bg-[#baed14] rounded-[16px] p-4 flex flex-col justify-between text-[#2b2b2b]">
            <div>
                <p className="text-[14px] italic">📍 <span className="font-bold not-italic">Based in:</span></p>
                <p className="text-white font-['Poppins']">Bratislava, Slovakia</p>
            </div>
            
            <div>
                <p className="text-[14px] italic">🎂 <span className="font-bold not-italic">Age:</span></p>
                <p className="text-white font-['Poppins']">27</p>
            </div>
            
            <div>
                <p className="text-[14px] italic">🗣️ <span className="font-bold not-italic">Languages:</span></p>
                <p className="text-white font-['Poppins']">English (Professional)</p>
                <p className="text-white font-['Poppins']">Slovak (Native)</p>
            </div>
            
            <div>
                <p className="text-[14px] italic">🎓 <span className="font-bold not-italic">Background:</span></p>
                <p className="text-white font-['Poppins']">IT, Data & Visual Design</p>
            </div>
        </div>
      </div>
    </div>
  );
}
