import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { img } from "../assets";
import { HomeIndicator, Phone, SafeTop } from "../components/Shell";

const STAR = "/assets/2be8ea78-f911-4405-a443-b240b988bea1.svg";

/** 763:20853 (header) + 763:20993 (body) + 763:21027 (CTA) — 후기 작성 */
export default function Review() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(5); // Figma shows all five stars filled
  const [text, setText] = useState("");

  return (
    <Phone className="bg-white">
      <SafeTop />
      <div className="content-stretch flex h-[56px] items-center justify-center overflow-clip px-[20px] py-[16px] relative shrink-0 w-full">
        <p className="[word-break:break-word] font-medium leading-[24px] not-italic relative shrink-0 text-[20px] text-black text-center tracking-[-0.5px] whitespace-nowrap">후기 작성</p>
      </div>

      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-px px-[24px] py-[24px] relative w-full">
        <div className="content-stretch flex flex-col items-center relative shrink-0">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center leading-[1.4] not-italic relative shrink-0 whitespace-nowrap">
            <p className="font-semibold relative shrink-0 text-[#111] text-[28px] tracking-[-0.7px]">진료는 어떠셨나요?</p>
            <p className="font-normal relative shrink-0 text-[#8f8f8f] text-[16px] tracking-[-0.4px]">소중한 후기는 더 나은 진료 서비스에 도움이 됩니다.</p>
          </div>
        </div>

        <div className="border border-[#e5e5ec] border-solid content-stretch flex flex-col items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
            <div className="relative rounded-[12px] shrink-0 size-[59px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                <img alt="" className="absolute h-[138.22%] left-0 max-w-none top-[0.27%] w-full" src={img.doctorKim} />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
              <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#9a9a9a] text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">서울봄봄정신과의원</p>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <p className="[word-break:break-word] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#252525] text-[16px] tracking-[-0.4px] whitespace-nowrap">김유현 의사</p>
                <div className="bg-[#d7f5dc] content-stretch flex items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                  <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#26ae3d] text-[10px] text-center tracking-[-0.25px] whitespace-nowrap">전문의</p>
                </div>
              </div>
              <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#9a9a9a] text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">2026.09.01(화) 오후 14:30</p>
            </div>
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
          <p className="[word-break:break-word] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] tracking-[-0.4px] w-full">별점을 선택해주세요</p>
          <div className="content-stretch flex gap-[12.8px] items-center justify-center py-[12px] relative shrink-0 w-full">
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} type="button" aria-label={`${n}점`} onClick={() => setRating(n)} className="relative shrink-0 size-[32px]" style={n > rating ? { filter: "grayscale(1) opacity(0.35)" } : undefined}>
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={STAR} />
              </button>
            ))}
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
          <p className="[word-break:break-word] font-semibold leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] tracking-[-0.4px] w-full">
            <span className="leading-[1.4]">후기를 남겨주세요</span>
            <span className="font-normal leading-[1.4] text-[#aaa]">(선택)</span>
          </p>
          <label className="border border-[#e5e5ec] border-solid content-stretch flex flex-col gap-[4px] h-[143px] items-start px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full">
            <textarea
              value={text}
              maxLength={300}
              onChange={(e) => setText(e.target.value)}
              placeholder="예) 친절하고 자세하게 상담해주셔서 도움이 되었어요."
              className="block w-full flex-[1_0_0] min-h-px resize-none bg-transparent outline-none font-normal leading-[1.4] text-[#1d1d1d] placeholder:text-[#d7d7d7] text-[14px] tracking-[-0.35px]"
            />
            <div className="content-stretch flex flex-col items-end justify-end relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#a6a6a6] text-[12px] tracking-[-0.3px] whitespace-nowrap">{text.length}/300</p>
              </div>
            </div>
          </label>
        </div>
      </div>

      <div className="sticky bottom-0 bg-white content-stretch flex flex-col items-start w-full mt-auto">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[24px] relative shrink-0 w-full">
          <button type="button" onClick={() => navigate("/home")} className="bg-[#41cc58] content-stretch flex h-[56px] items-center justify-center overflow-clip px-[63px] py-[8px] relative rounded-[8px] shrink-0 w-full">
            <p className="[word-break:break-word] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.4px] whitespace-nowrap">후기 등록하기</p>
          </button>
          <button type="button" onClick={() => navigate("/home")} className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-normal leading-[1.4] not-italic relative shrink-0 text-[#a5a5a3] text-[14px] text-center underline whitespace-nowrap">
            나중에
          </button>
        </div>
        <HomeIndicator />
      </div>
    </Phone>
  );
}
