import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { img } from "../assets";
import { HomeIndicator, Phone, SafeTop } from "../components/Shell";

const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

/** 763:20753 — 비대면 상담 통화 중. Figma shows 00:15 elapsed / 09:45 remaining; the demo counts from there. */
export default function Call() {
  const navigate = useNavigate();
  const [elapsed, setElapsed] = useState(15);
  useEffect(() => {
    const id = setInterval(() => setElapsed((e) => Math.min(e + 1, 600)), 1000);
    return () => clearInterval(id);
  }, []);
  const remaining = Math.max(600 - elapsed, 0);

  return (
    <Phone className="bg-white">
      <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full">
        <SafeTop />
        <div className="content-stretch flex h-[56px] items-center justify-center px-[20px] py-[16px] relative shrink-0 w-full" />
        <p className="[word-break:break-word] font-normal leading-[1.4] not-italic relative shrink-0 text-[#bcbcbc] text-[20px] text-center tracking-[-0.5px] whitespace-nowrap tabular-nums">{fmt(elapsed)}</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px px-[24px] py-[32px] relative w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-center justify-center min-h-px relative w-full">
          <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[1.4] not-italic relative shrink-0 whitespace-nowrap">
              <p className="font-medium relative shrink-0 text-[#bcbcbc] text-[14px] text-center tracking-[-0.35px]">서울봄봄정신과의원</p>
              <p className="font-semibold relative shrink-0 text-[#111] text-[28px] tracking-[-0.7px]">김유현 의사</p>
            </div>
            <div className="relative rounded-[2065.729px] shrink-0 size-[122px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2065.729px]">
                <img alt="" className="absolute h-[138.22%] left-0 max-w-none top-[0.27%] w-full" src={img.doctorKim} />
              </div>
            </div>
          </div>
          <div className="bg-[#e6fbe9] content-stretch flex flex-col gap-[4px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
              <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#26a83c] text-[14px] text-center tracking-[-0.35px] whitespace-nowrap">남은 진료 시간</p>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
              <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#26a83c] text-[48px] text-center tracking-[-1.2px] whitespace-nowrap tabular-nums">{fmt(remaining)}</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[36px] items-center justify-center py-[24px] relative shrink-0 w-full">
          <button type="button" aria-label="음소거" className="border border-[#eeeef3] border-solid content-stretch flex flex-col items-center justify-center p-[13.636px] relative rounded-[1362.273px] shrink-0 size-[60px]">
            <div className="overflow-clip relative shrink-0 size-[32px]">
              <div className="absolute inset-[9.72%_15.28%]">
                <div className="absolute inset-[-3.88%_-4.5%]">
                  <img alt="" className="block max-w-none size-full" src={img.mic} />
                </div>
              </div>
            </div>
          </button>
          <button type="button" aria-label="통화 종료" onClick={() => navigate("/review")} className="bg-[#ff4c4c] content-stretch flex flex-col items-center justify-center p-[13.636px] relative rounded-[1362.273px] shrink-0 size-[60px]" style={{ filter: "drop-shadow(0px 0px 10px rgba(255,105,105,0.4))" }}>
            <div className="content-stretch flex flex-col items-start overflow-clip p-[2.727px] relative shrink-0 w-full">
              <div className="h-[23.182px] relative shrink-0 w-[24.546px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.phoneFilled} />
              </div>
            </div>
          </button>
          <button type="button" aria-label="스피커" className="border border-[#eeeef3] border-solid content-stretch flex flex-col items-center justify-center p-[13.636px] relative rounded-[1362.273px] shrink-0 size-[60px]">
            <div className="relative shrink-0 size-[32px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.soundwave} />
            </div>
          </button>
        </div>
      </div>
      <HomeIndicator />
    </Phone>
  );
}
