import svgPaths from "./svg-1klaa0pcq4";
import imgCss31 from "figma:asset/f3334973a2702809b7ccf470be822909dd8c6cb2.png";

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Tools</p>
      </div>
    </div>
  );
}

function IconHtml() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="🦆 icon 'html5'">
      <div className="h-[30px] relative shrink-0 w-[26.25px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.25 30">
          <path d={svgPaths.p189b1a00} fill="var(--fill-0, #FF8A00)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">HTML 5</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[30px]" data-name="css-3 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCss31} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame4 />
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">CSS 3</p>
      </div>
    </div>
  );
}

function SqlDatabaseSqlAzureSvgrepoCom() {
  return (
    <div className="relative shrink-0 w-full" data-name="sql-database-sql-azure-svgrepo-com 1">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-px relative w-full">
          <div className="h-[30px] relative shrink-0 w-[28.623px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6226 30">
              <path d={svgPaths.p1172a00} fill="var(--fill-0, #FF8A00)" id="Vector" />
            </svg>
          </div>
          <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
            <p className="leading-[1.5]">MS SQL Server / mySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[30px]" data-name="icons">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="icons">
          <path clipRule="evenodd" d={svgPaths.p25191e00} fill="var(--fill-0, black)" fillRule="evenodd" id="github-[#142]" />
        </g>
      </svg>
    </div>
  );
}

function DribbbleLightPreview() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Dribbble-Light-Preview">
      <Icons />
    </div>
  );
}

function Page() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Page-1">
      <DribbbleLightPreview />
    </div>
  );
}

function Github142SvgrepoCom() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[0] overflow-clip relative shrink-0 w-full" data-name="github-142-svgrepo-com 1">
      <Page />
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Github/Git</p>
      </div>
    </div>
  );
}

function MicrosoftOfficeSvgrepoCom() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="microsoft-office-svgrepo-com 1">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[4px] py-[3px] relative size-full">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="h-[25px] relative shrink-0 w-[21.25px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.25 25">
              <path d={svgPaths.pf4de940} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
          <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
            <p className="leading-[1.5]">Microsoft Office</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <IconHtml />
      <Frame5 />
      <SqlDatabaseSqlAzureSvgrepoCom />
      <Github142SvgrepoCom />
      <MicrosoftOfficeSvgrepoCom />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[30px] relative shrink-0 w-[28px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 30">
        <g id="Frame 164">
          <path d={svgPaths.p1615ec80} fill="var(--fill-0, #FF8A00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconFigma() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="🦆 icon 'figma'">
      <Frame10 />
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Figma</p>
      </div>
    </div>
  );
}

function FramerSvgrepoCom() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="framer-svgrepo-com 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="framer-svgrepo-com 1">
          <path d={svgPaths.p207b6e00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <FramerSvgrepoCom />
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Framer</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[30px] relative shrink-0 w-[29.999px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.9991 30">
        <g id="Group">
          <path d={svgPaths.p2ba39900} fill="var(--fill-0, #FF8A00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function WordpressLogoSvgrepoCom() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="wordpress-logo-svgrepo-com 1">
      <Group />
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Wordpress</p>
      </div>
    </div>
  );
}

function IconAdobeillustrator() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[269px]" data-name="🦆 icon 'adobeillustrator'">
      <div className="h-[30px] relative shrink-0 w-[30.769px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.7692 30">
          <path d={svgPaths.pbd33100} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Adobe Creative Cloud</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[76.15%_8.8%_0_8.8%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.7199 7.15424">
        <g id="Group">
          <path d={svgPaths.p7bf0800} fill="var(--fill-0, #FF8A00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[76.15%_8.8%_0_8.8%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[0_39.84%_84.65%_53.27%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.06678 4.60418">
        <g id="Group">
          <path d={svgPaths.p23a80b00} fill="var(--fill-0, #FF8A00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[0_39.84%_84.65%_53.27%]" data-name="Group">
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[0_53.27%_84.65%_39.84%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.06678 4.60418">
        <g id="Group">
          <path d={svgPaths.p39727a00} fill="var(--fill-0, #FF8A00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[0_53.27%_84.65%_39.84%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[5.05%_53.27%_36.4%_24.73%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.60123 17.5654">
        <g id="Group">
          <path d={svgPaths.p1e43bb00} fill="var(--fill-0, #FF8A00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[5.05%_53.27%_36.4%_24.73%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[5.05%_24.73%_36.4%_53.27%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.60117 17.5655">
        <g id="Group">
          <path d={svgPaths.p29237940} fill="var(--fill-0, #FF8A00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[5.05%_24.73%_36.4%_53.27%]" data-name="Group">
      <Group10 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[29.17%_8.8%_30.38%_56.3%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4685 12.1351">
        <g id="Group">
          <path d={svgPaths.p391a5980} fill="var(--fill-0, #FF8A00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[29.17%_8.8%_30.38%_56.3%]" data-name="Group">
      <Group12 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[29.17%_56.3%_30.38%_8.8%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4685 12.1351">
        <g id="Group">
          <path d={svgPaths.pad01e00} fill="var(--fill-0, #FF8A00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[29.17%_56.3%_30.38%_8.8%]" data-name="Group">
      <Group14 />
    </div>
  );
}

function RobotArtificialIntelligenceSvgrepoCom() {
  return (
    <div className="overflow-clip relative shrink-0 size-[30px]" data-name="robot-artificial-intelligence-svgrepo-com 1">
      <Group1 />
      <Group3 />
      <Group5 />
      <Group7 />
      <Group9 />
      <Group11 />
      <Group13 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <RobotArtificialIntelligenceSvgrepoCom />
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">{`Artificial Intelligence Tools `}</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <IconFigma />
      <Frame />
      <WordpressLogoSvgrepoCom />
      <IconAdobeillustrator />
      <Frame8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
        <Frame6 />
        <Frame7 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[384px]">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-black text-justify whitespace-pre-wrap">
        <span className="leading-[1.4]">{`These skills reflect my practical background bridging `}</span>
        <span className="leading-[1.4] text-[#ff8a00]">technical</span>
        <span className="leading-[1.4]">{` architecture, `}</span>
        <span className="leading-[1.4] text-[#ff8a00]">business</span>
        <span className="leading-[1.4]">{` strategy, and `}</span>
        <span className="leading-[1.4] text-[#ff8a00]">UX/UI design</span>
        <span className="leading-[1.4]">.</span>
      </p>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-[#f5f5f4] content-stretch flex flex-col gap-[24px] items-center justify-center p-[24px] relative rounded-[16px] size-full">
      <Frame2 />
      <Frame1 />
      <Frame9 />
    </div>
  );
}