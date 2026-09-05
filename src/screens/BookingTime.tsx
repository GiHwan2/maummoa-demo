import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { img } from "../assets";
import { BottomCta, Phone, ProgressBar, StepTitle, TopBar } from "../components/Shell";

const SEL = "bg-[#f0fff2] border-[#41cc58] text-[#2db243] font-semibold";
const IDLE = "border-[#e5e5ec] text-[#1d1d1d] font-medium";

function Slot({ t, on, onClick, fixed }: { t: string; on: boolean; onClick: () => void; fixed?: boolean }) {
  return (
    <button type="button" onClick={onClick} className={`border border-solid content-stretch flex h-full items-center justify-center p-[17px] relative rounded-[8px] ${fixed ? "shrink-0 w-[103px]" : "flex-[1_0_0] min-w-px"} ${on ? SEL : IDLE}`}>
      <p className="[word-break:break-word] leading-[1.4] not-italic relative shrink-0 text-[14px] tracking-[-0.35px] whitespace-nowrap">{t}</p>
    </button>
  );
}

function Slots({ title, rows, value, onPick }: { title: string; rows: string[][]; value: string | null; onPick: (t: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] tracking-[-0.4px] whitespace-nowrap">{title}</p>
      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
        {rows.map((row, i) => (
          <div key={i} className={`content-stretch flex gap-[8px] h-[36px] items-center ${row.length === 3 ? "justify-center" : ""} relative shrink-0 w-full`}>
            {row.map((t) => (
              <Slot key={t} t={t} on={value === t} onClick={() => onPick(t)} fixed={row.length === 1} />
            ))}
          </div>
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
        <Slots title="오전" rows={[["11:20", "11:30", "11:40"], ["11:50"]]} value={time} onPick={setTime} />
        <Slots title="오후" rows={[["14:30", "14:40", "14:50"], ["15:00", "15:10", "15:20"], ["15:30"]]} value={time} onPick={setTime} />
      </div>
      <BottomCta onClick={() => navigate("/booking/form")}>다음</BottomCta>
    </Phone>
  );
}
