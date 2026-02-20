import svgPaths from "./svg-zm2q05hd4f";

function Heading1() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[335px]" data-name="Heading 2">
      <p className="absolute font-['Menlo:Bold',sans-serif] leading-[16px] left-0 not-italic text-[12px] text-black top-0 tracking-[1.2px]">PORTFOLIO</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute font-['Inter:Black',sans-serif] font-black h-[102px] leading-[51px] left-0 not-italic text-[60px] text-black top-[20px] tracking-[-2.7363px] uppercase w-[335px]" data-name="Heading 1">
      <p className="absolute left-0 top-px">TOMAS.K</p>
      <p className="absolute left-0 top-[52px]">DESIGN</p>
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-black h-[4px] left-0 top-[146px] w-[48px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="h-[174px] relative shrink-0 w-[335px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading1 />
        <Heading />
        <Container3 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[16px] left-0 not-italic text-[12px] text-black top-0 tracking-[0.3px] uppercase">PRODUCT DESIGNER</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[16px] left-0 not-italic text-[12px] text-black top-0 tracking-[0.3px] uppercase">BASED IN EU</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[16px] left-0 not-italic text-[12px] text-black top-0 tracking-[0.3px] uppercase">ONLINE / AVAILABLE</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[56px] relative shrink-0 w-[335px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#d9ff00] col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between pl-[32px] pr-px pt-[32px] relative size-full">
        <Container2 />
        <Container4 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[17px] size-[14px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pf6e9500} id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 11.0833H11.6667" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[34px] relative rounded-[16777200px] shrink-0 w-[157.148px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[16px] left-[39px] not-italic text-[#e0e0e0] text-[12px] top-[9px] uppercase">{` Design Systems`}</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[17px] size-[14px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_8_353)" id="Icon">
          <path d={svgPaths.p132cf580} id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_8_353">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[34px] relative rounded-[16777200px] shrink-0 w-[135.477px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[16px] left-[39px] not-italic text-[#e0e0e0] text-[12px] top-[9px] uppercase">{` Prototyping`}</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[34px] items-start left-[48px] top-[318px] w-[947px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return <div className="absolute h-[400px] left-0 opacity-10 top-0 w-[1043px]" data-name="Container" style={{ backgroundImage: "linear-gradient(90deg, rgba(128, 128, 128, 0.07) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(rgba(128, 128, 128, 0.07) 0.25%, rgba(0, 0, 0, 0) 0.25%)" }} />;
}

function Text() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[73px] left-0 top-px w-[651.32px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[37.5px] left-0 not-italic text-[#d9ff00] text-[30px] top-[-1px] tracking-[0.3955px] uppercase w-[652px] whitespace-pre-wrap">Complex Systems</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[75px] left-0 top-0 w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[37.5px] left-0 not-italic text-[#e0e0e0] text-[30px] top-0 tracking-[0.3955px] uppercase">{`Precision Product Design for `}</p>
      <Text />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[37.5px] left-[145.63px] not-italic text-[#e0e0e0] text-[30px] top-[37.5px] tracking-[0.3955px] uppercase">.</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[58.5px] left-0 top-[107px] w-[512px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#99a1af] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[489px] whitespace-pre-wrap">I combine technical rigor with cultural relevance. Bridging the gap between engineering logic and user emotion.</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[197.5px] left-[48px] top-[120.5px] w-[672px]" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="col-2 justify-self-stretch overflow-clip relative row-1 self-stretch shrink-0" data-name="Container">
      <Container6 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container() {
  return (
    <div className="grid grid-cols-[__minmax(0,400fr)_minmax(0,1fr)] grid-rows-[repeat(1,minmax(0,1fr))] h-[400px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container5 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col h-[401px] items-start left-[12px] pt-px px-px top-[12px] w-[1445px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[260.086px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Menlo:Regular',sans-serif] leading-[16px] left-[130.5px] not-italic text-[#e0e0e0] text-[12px] text-center top-0 uppercase">More archives available upon request</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex h-[325px] items-center justify-center left-0 opacity-20 pr-[0.008px] top-[580px] w-[1043px]" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[20px] left-0 opacity-50 top-[27.5px] w-[16.859px]" data-name="Text">
      <p className="absolute font-['Menlo:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#e0e0e0] text-[14px] top-[-0.5px]">01</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center left-[64.86px] top-0 w-[314.32px]" data-name="Heading 4">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[48px] not-italic relative shrink-0 text-[#e0e0e0] text-[48px] tracking-[-0.8484px] uppercase">APEX LEAGUE</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[48px] relative shrink-0 w-[379.18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text1 />
        <Heading3 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[122.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e0e0e0] text-[14px] top-[-0.5px] tracking-[0.35px] uppercase">PRODUCT DESIGN</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] opacity-60 relative shrink-0 w-[175.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e0e0e0] text-[14px] top-[-0.5px] tracking-[0.35px] uppercase">REACT / FIGMA / 2024</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[446.492px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-center relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[48px] relative size-full">
          <Container16 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return <div className="bg-[#d9ff00] h-[144px] shrink-0 w-full" data-name="Container" />;
}

function Container14() {
  return (
    <div className="absolute h-[145px] left-0 top-0 w-[1043px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px relative rounded-[inherit] size-full">
        <Container15 />
        <Container18 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[20px] left-0 opacity-50 top-[27.5px] w-[16.859px]" data-name="Text">
      <p className="absolute font-['Menlo:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#e0e0e0] text-[14px] top-[-0.5px]">02</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center left-[64.86px] top-0 w-[324.93px]" data-name="Heading 4">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[48px] not-italic relative shrink-0 text-[#e0e0e0] text-[48px] tracking-[-0.8484px] uppercase">NEON WALLET</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[48px] relative shrink-0 w-[389.789px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text4 />
        <Heading4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[114.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e0e0e0] text-[14px] top-[-0.5px] tracking-[0.35px] uppercase">MOBILE SYSTEM</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] opacity-60 relative shrink-0 w-[158.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e0e0e0] text-[14px] top-[-0.5px] tracking-[0.35px] uppercase">IOS / SWIFT / 2023</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[420.156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-center relative size-full">
        <Text5 />
        <Text6 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[48px] relative size-full">
          <Container21 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return <div className="bg-[#d9ff00] h-[144px] shrink-0 w-full" data-name="Container" />;
}

function Container19() {
  return (
    <div className="absolute h-[145px] left-0 top-[145px] w-[1043px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px relative rounded-[inherit] size-full">
        <Container20 />
        <Container23 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[20px] left-0 opacity-50 top-[27.5px] w-[16.859px]" data-name="Text">
      <p className="absolute font-['Menlo:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#e0e0e0] text-[14px] top-[-0.5px]">03</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center left-[64.86px] top-0 w-[277.883px]" data-name="Heading 4">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[48px] not-italic relative shrink-0 text-[#e0e0e0] text-[48px] tracking-[-0.8484px] uppercase">SONIC LABS</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[48px] relative shrink-0 w-[342.742px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text7 />
        <Heading5 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[79.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e0e0e0] text-[14px] top-[-0.5px] tracking-[0.35px] uppercase">WEB AUDIO</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] opacity-60 relative shrink-0 w-[149.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e0e0e0] text-[14px] top-[-0.5px] tracking-[0.35px] uppercase">WEBGL / JS / 2023</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[20px] relative shrink-0 w-[376.266px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-center relative size-full">
        <Text8 />
        <Text9 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[48px] relative size-full">
          <Container26 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return <div className="bg-[#d9ff00] h-[144px] shrink-0 w-full" data-name="Container" />;
}

function Container24() {
  return (
    <div className="absolute h-[145px] left-0 top-[290px] w-[1043px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px relative rounded-[inherit] size-full">
        <Container25 />
        <Container28 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[20px] left-0 opacity-50 top-[27.5px] w-[16.859px]" data-name="Text">
      <p className="absolute font-['Menlo:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#e0e0e0] text-[14px] top-[-0.5px]">04</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-white h-[18px] left-[319.66px] rounded-[16777200px] top-[15px] w-[92.344px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[10px] left-[8px] not-italic text-[10px] text-black top-[4px] tracking-[1.1172px] uppercase">Case Study</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[48px] left-[64.86px] top-0 w-[412.008px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[48px] left-0 not-italic text-[#e0e0e0] text-[48px] top-[0.5px] tracking-[-0.8484px] uppercase">FORMULA UX</p>
      <Text11 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[48px] relative shrink-0 w-[476.867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text10 />
        <Heading6 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[87.789px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e0e0e0] text-[14px] top-[-0.5px] tracking-[0.35px] uppercase">CASE STUDY</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[20px] opacity-60 relative shrink-0 w-[193.148px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e0e0e0] text-[14px] top-[-0.5px] tracking-[0.35px] uppercase">RESEARCH / DATA / 2023</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[428.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-center relative size-full">
        <Text12 />
        <Text13 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[48px] relative size-full">
          <Container31 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return <div className="bg-[#d9ff00] h-[144px] shrink-0 w-full" data-name="Container" />;
}

function Container29() {
  return (
    <div className="absolute h-[145px] left-0 top-[435px] w-[1043px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px relative rounded-[inherit] size-full">
        <Container30 />
        <Container33 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[905px] left-[400px] top-0 w-[1043px]" data-name="Container">
      <Container13 />
      <Container14 />
      <Container19 />
      <Container24 />
      <Container29 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[905px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col h-[906px] items-start left-[12px] pb-px px-px top-[413px] w-[1445px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b border-l border-r border-solid inset-0 pointer-events-none" />
      <Container11 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_8_348)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p14d10c00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 8H14.6667" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_8_348">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Bold',sans-serif] leading-[16px] left-0 not-italic text-[12px] text-black top-0 tracking-[0.6px] uppercase">Based in EU</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[16px] relative shrink-0 w-[110.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon2 />
        <Text14 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_8_345)" id="Icon">
          <path d={svgPaths.p3227a460} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_8_345">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Bold',sans-serif] leading-[16px] left-0 not-italic text-[12px] text-black top-0 tracking-[0.6px] uppercase">System_Normal</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon3 />
        <Text15 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[16px] items-center left-0 top-[5px] w-[259.805px]" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return <div className="bg-[#00c950] opacity-54 rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text16() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Bold',sans-serif] leading-[16px] left-0 not-italic text-[12px] text-black top-0 tracking-[0.6px] uppercase">Open for New Roles</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.1)] content-stretch flex gap-[8px] h-[26px] items-center left-[657.55px] px-[13px] py-px rounded-[16777200px] top-0 w-[182.844px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Container39 />
      <Text16 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[16px] left-[1238.15px] top-[5px] w-[140.844px]" data-name="Container">
      <p className="absolute font-['Menlo:Bold',sans-serif] leading-[16px] left-0 not-italic text-[12px] text-black top-0 tracking-[0.6px] uppercase">TOMAS.K — REV.2026</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container38 />
      <Container40 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#d9ff00] content-stretch flex flex-col h-[59px] items-start left-[12px] pb-px pt-[16px] px-[33px] top-[1319px] w-[1445px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b border-l border-r border-solid inset-0 pointer-events-none" />
      <Container34 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute font-['Inter:Black',sans-serif] font-black h-[80px] leading-[40px] left-0 not-italic text-[#d9ff00] text-[36px] top-0 tracking-[-1.4309px] uppercase w-[335px]" data-name="Heading 3">
      <p className="absolute left-0 top-[0.5px]">Selected</p>
      <p className="absolute left-0 top-[40.5px]">Works</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[40px] left-0 top-[96px] w-[200px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[191px] whitespace-pre-wrap">3 Commercial Projects + 1 In-depth Case Study.</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[136px] left-[32px] top-[32px] w-[335px]" data-name="Container">
      <Heading2 />
      <Paragraph6 />
    </div>
  );
}

function Container45() {
  return <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid h-[223.328px] left-0 top-0 w-[110.664px]" data-name="Container" />;
}

function Container46() {
  return <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid h-[223.328px] left-[110.66px] top-0 w-[110.664px]" data-name="Container" />;
}

function Container47() {
  return <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid h-[223.328px] left-[221.33px] top-0 w-[110.664px]" data-name="Container" />;
}

function Container48() {
  return <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid h-[223.336px] left-0 top-[223.33px] w-[110.664px]" data-name="Container" />;
}

function Container49() {
  return <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid h-[223.336px] left-[110.66px] top-[223.33px] w-[110.664px]" data-name="Container" />;
}

function Container50() {
  return <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid h-[223.336px] left-[221.33px] top-[223.33px] w-[110.664px]" data-name="Container" />;
}

function Container51() {
  return <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid h-[223.328px] left-0 top-[446.66px] w-[110.664px]" data-name="Container" />;
}

function Container52() {
  return <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid h-[223.328px] left-[110.66px] top-[446.66px] w-[110.664px]" data-name="Container" />;
}

function Container53() {
  return <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-r border-solid h-[223.328px] left-[221.33px] top-[446.66px] w-[110.664px]" data-name="Container" />;
}

function Container44() {
  return (
    <div className="absolute bg-[#343434] border-[rgba(255,255,255,0.05)] border-l border-solid border-t h-[671px] left-0 top-0 w-[333px]" data-name="Container">
      <Container45 />
      <Container46 />
      <Container47 />
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[#111] border border-[rgba(255,255,255,0.1)] border-solid h-[673px] left-[32px] overflow-clip top-[200px] w-[335px]" data-name="Container">
      <Container44 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-r border-solid h-[905px] left-[13px] top-[413px] w-[400px]" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Ty() {
  return (
    <div className="bg-[#050505] h-[1390px] relative shrink-0 w-full" data-name="TY">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Header />
        <Section />
        <Footer />
        <Container41 />
      </div>
      <div aria-hidden="true" className="absolute border-12 border-[#050505] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1390px] items-start left-0 top-0 w-[1469px]" data-name="Body">
      <Ty />
    </div>
  );
}

function Container54() {
  return <div className="absolute bg-[#d9ff00] left-[1337px] rounded-[6px] size-[16px] top-[2px]" data-name="Container" />;
}

export default function PortfolioHeroSectionDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Portfolio Hero Section Design">
      <Body />
      <Container54 />
    </div>
  );
}