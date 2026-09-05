import { img } from "../assets";
import { BottomNav } from "../components/BottomNav";
import { DoctorCard, doctors } from "../components/DoctorCard";
import { Phone, TopBar } from "../components/Shell";

const chips: { label: string; arrow: boolean }[] = [
  { label: "기본순", arrow: true },
  { label: "성별", arrow: true },
  { label: "전문의", arrow: false },
  { label: "진료중", arrow: false },
  { label: "증상", arrow: true },
  { label: "진료항목", arrow: true },
];

/** 763:534 — 의사 찾기 (목록) */
export default function DoctorList() {
  return (
    <Phone className="bg-[#f5f5f5]">
      <div className="bg-white content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full z-10" style={{ filter: "drop-shadow(0px 0px 15px rgba(0,0,0,0.05))" }}>
        <TopBar title="의사 찾기" />
        <div className="content-stretch flex flex-col gap-[10px] items-start px-[24px] relative shrink-0 w-full">
          <label className="bg-[#f9f9f9] content-stretch flex gap-[10px] h-[36px] items-center px-[16px] py-[6px] relative rounded-[999px] shrink-0 w-full">
            <div className="relative shrink-0 size-[20px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.searchIcon} />
            </div>
            <input
              type="search"
              placeholder="증상, 병원명, 의사명을 검색해보세요."
              className="[word-break:break-word] font-normal leading-[24px] not-italic relative flex-1 min-w-0 bg-transparent outline-none text-[#505050] placeholder:text-[#c3c3c3] text-[14px] tracking-[-0.35px]"
            />
          </label>
          <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {chips.map((c) => (
              <button key={c.label} type="button" className={`bg-white border border-[#ededed] border-solid content-stretch flex ${c.arrow ? "gap-[4px]" : ""} items-center px-[11px] py-[4px] relative rounded-[999px] shrink-0`}>
                <p className="[word-break:break-word] font-normal leading-[24px] not-italic relative shrink-0 text-[#505050] text-[14px] text-center tracking-[-0.35px] whitespace-nowrap">{c.label}</p>
                {c.arrow && (
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                    <div className="flex-none rotate-90">
                      <div className="relative size-[16px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.chipArrow} />
                      </div>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[12px] relative shrink-0 w-full">
        <DoctorCard d={doctors[0]} starIcon={img.starList} reviews={86} available />
        <DoctorCard d={doctors[1]} starIcon={img.starList} reviews={353} available />
        <DoctorCard d={doctors[2]} starIcon={img.starList} reviews={45} available />
        <DoctorCard d={doctors[3]} starIcon={img.starList} reviews={96} available />
        <DoctorCard d={doctors[0]} starIcon={img.starList} reviews={353} available />
      </div>

      <BottomNav shadow="rgba(0,0,0,0.08)" />
    </Phone>
  );
}
