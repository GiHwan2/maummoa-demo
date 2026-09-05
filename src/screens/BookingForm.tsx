import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { img } from "../assets";
import { BottomCta, Phone, ProgressBar, StepTitle, TopBar } from "../components/Shell";

const symptoms = ["불면증", "우울증", "불안", "공황장애", "성인 ADHD", "청소년 상담"];

/** 763:1696 — 예약 2/3 진료 신청서 */
export default function BookingForm() {
  const navigate = useNavigate();
  const [picked, setPicked] = useState<Set<string>>(new Set());
  const [text, setText] = useState("");
  const toggle = (s: string) =>
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(s)) next.delete(s);
      else next.add(s);
      return next;
    });

  return (
    <Phone className="bg-white">
      <TopBar backIcon={img.back} />
      <ProgressBar fill={213} />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[32px] relative shrink-0 w-full">
        <StepTitle lines={["진료 신청서를 ", "작성해주세요"]} sub="상담 내용을 알려주세요." />
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <p className="[word-break:break-word] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] tracking-[-0.4px] whitespace-nowrap">상세증상</p>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
              {symptoms.map((s) => {
                const on = picked.has(s);
                return (
                  <button key={s} type="button" onClick={() => toggle(s)} className={`border border-solid content-stretch flex h-[36px] items-center justify-center p-[17px] relative rounded-[8px] shrink-0 ${on ? "bg-[#f0fff2] border-[#41cc58]" : "border-[#e5e5ec]"}`}>
                    <p className={`[word-break:break-word] leading-[1.4] not-italic relative shrink-0 text-[14px] tracking-[-0.35px] whitespace-nowrap ${on ? "font-semibold text-[#2db243]" : "font-medium text-[#1d1d1d]"}`}>{s}</p>
                  </button>
                );
              })}
            </div>
          </div>
          <label className="border border-[#e5e5ec] border-solid content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full">
            <div className="relative w-full min-h-[78px]">
              {text.length === 0 && (
                <ul className="[word-break:break-word] block font-normal leading-[0] list-disc not-italic absolute inset-0 pointer-events-none text-[#d7d7d7] text-[14px] tracking-[-0.35px] whitespace-nowrap">
                  <li className="mb-0 ms-[21px]"><span className="leading-[1.4]">발생시점, 경과, 불편한 정도 등</span></li>
                  <li className="mb-0 ms-[21px]"><span className="leading-[1.4]">복용중인 약</span></li>
                  <li className="mb-0 ms-[21px]"><span className="leading-[1.4]">알레르기 및 선천적 질환</span></li>
                  <li className="ms-[21px]"><span className="leading-[1.4]">건강 관련 특이사항</span></li>
                </ul>
              )}
              <textarea
                value={text}
                maxLength={300}
                onChange={(e) => setText(e.target.value)}
                className="block w-full min-h-[78px] resize-none bg-transparent outline-none font-normal leading-[1.4] text-[#1d1d1d] text-[14px] tracking-[-0.35px]"
              />
            </div>
            <div className="content-stretch flex flex-col items-end justify-end relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#a6a6a6] text-[12px] tracking-[-0.3px] whitespace-nowrap">{text.length}/300</p>
              </div>
            </div>
          </label>
        </div>
      </div>
      <BottomCta onClick={() => navigate("/booking/pay")}>다음</BottomCta>
    </Phone>
  );
}
