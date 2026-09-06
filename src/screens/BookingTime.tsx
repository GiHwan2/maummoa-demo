import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { img } from "../assets";
import { BottomCta, Phone, ProgressBar, StepTitle, TopBar } from "../components/Shell";

const SEL = "bg-[#f0fff2] border-[#41cc58] text-[#2db243] font-semibold";
const IDLE = "border-[#e5e5ec] text-[#1d1d1d] font-medium";

function Slot({ t, on, onClick }: { t: string; on: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className={`border border-solid content-stretch flex h-[36px] items-center justify-center p-[17px] relative rounded-[8px] min-w-0 ${on ? SEL : IDLE}`}>
      <p className="[word-break:break-word] leading-[1.4] not-italic relative shrink-0 text-[14px] tracking-[-0.35px] whitespace-nowrap">{t}</p>
    </button>
  );
}

/** Figma lays slots on a 3-column grid (each 103.67px of 327) with 8px column / 6px row gaps; a lone slot in the last row keeps the same width. */
function Slots({ title, slots, value, onPick }: { title: string; slots: string[]; value: string | null; onPick: (t: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] tracking-[-0.4px] whitespace-nowrap">{title}</p>
      <div className="grid grid-cols-3 gap-x-[8px] gap-y-[6px] relative shrink-0 w-full">
        {slots.map((t) => (
          <Slot key={t} t={t} on={value === t} onClick={() => onPick(t)} />
        ))}
      </div>
    </div>
  );
}

/** 763:1446 — 예약 1/3 날짜·시간 선택 */
export default function BookingTime() {
  const navigate = useNavigate();
  const [day, setDay] = useState<"today" | "tomorrow">("today");
  const [time, setTime] = useState<string | null>(null);

  return (
    <Phone className="bg-white">
      <TopBar backIcon={img.back} />
      <ProgressBar fill={96} />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[32px] relative shrink-0 w-full">
        <StepTitle lines={["날짜와 시간을 ", "선택해주세요"]} sub="상담이 필요하신 날짜와 시간을 선택해주세요." />
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
          <button type="button" onClick={() => setDay("today")} className={`border border-solid content-stretch flex flex-[1_0_0] h-[48px] items-center justify-center min-w-px p-[17px] relative rounded-[8px] ${day === "today" ? SEL : "border-[#e5e5ec] text-[#797979] font-medium"}`}>
            <p className="[word-break:break-word] leading-[1.4] not-italic relative shrink-0 text-[14px] tracking-[-0.35px] whitespace-nowrap">오늘</p>
          </button>
          <button type="button" onClick={() => setDay("tomorrow")} className={`border border-solid content-stretch flex flex-[1_0_0] h-[48px] items-center justify-center min-w-px p-[17px] relative rounded-[8px] ${day === "tomorrow" ? SEL : "border-[#e5e5ec] text-[#797979] font-medium"}`}>
            <p className="[word-break:break-word] leading-[1.4] not-italic relative shrink-0 text-[14px] tracking-[-0.35px] whitespace-nowrap">내일</p>
          </button>
        </div>
        <Slots title="오전" slots={["11:20", "11:30", "11:40", "11:50"]} value={time} onPick={setTime} />
        <Slots title="오후" slots={["14:30", "14:40", "14:50", "15:00", "15:10", "15:20", "15:30"]} value={time} onPick={setTime} />
      </div>
      <BottomCta onClick={() => navigate("/booking/form")}>다음</BottomCta>
    </Phone>
  );
}
