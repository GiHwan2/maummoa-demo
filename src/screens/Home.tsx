import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { img } from "../assets";
import { BottomNav } from "../components/BottomNav";
import { DoctorCard, doctors } from "../components/DoctorCard";
import { HomeIndicator, Phone, SafeTop } from "../components/Shell";

const SHEET_KEY = "maummoa.notiSheetDismissed";

/** 763:164 — 홈 (+ 763:820 알림 동의 시트) */
export default function Home() {
  const navigate = useNavigate();
  const [sheet, setSheet] = useState(() => {
    try {
      return sessionStorage.getItem(SHEET_KEY) !== "1";
    } catch {
      return true;
    }
  });
  const dismiss = () => {
    try {
      sessionStorage.setItem(SHEET_KEY, "1");
    } catch {
      /* private mode */
    }
    setSheet(false);
  };

  return (
    <Phone className="bg-[#f5f5f5]">
      {/* header card */}
      <div className="bg-white border border-[#f3f3f3] border-solid content-stretch flex flex-col items-start pb-[20px] relative rounded-bl-[20px] rounded-br-[20px] shrink-0 w-full" style={{ filter: "drop-shadow(0px 0px 15px rgba(0,0,0,0.05))" }}>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <SafeTop />
          <div className="content-stretch flex h-[56px] items-center overflow-clip px-[20px] py-[16px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[5.6px] items-center relative shrink-0">
              <div className="content-stretch flex flex-col items-center justify-center relative rounded-[3.714px] shrink-0 size-[26px]">
                <div className="content-stretch flex items-center justify-center overflow-clip px-[3.714px] py-[1.857px] relative shrink-0 w-full">
                  <div className="h-[18.462px] relative shrink-0 w-[14.857px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.leaf} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#0d0d0d] text-[19.6px] text-center whitespace-nowrap">마음모아</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full">
            <div className="font-semibold leading-[0] relative shrink-0 text-[#111] text-[28px] tracking-[-0.7px] w-full">
              <p className="leading-[1.4] mb-0">언제 어디서든,</p>
              <p className="leading-[1.4]">상담을 시작해보세요</p>
            </div>
            <p className="font-normal leading-[1.4] relative shrink-0 text-[#8f8f8f] text-[16px] tracking-[-0.4px] w-full">집에서도 간편하게 전문의와 상담할 수 있어요.</p>
          </div>

          <div className="content-stretch flex gap-[8px] h-[121px] items-start relative shrink-0 w-full">
            <button type="button" onClick={() => navigate("/doctors")} className="bg-[#36d646] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-end min-w-px p-[16px] relative rounded-[12px] overflow-clip" style={{ filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.07))" }}>
              <p className="[word-break:break-word] font-semibold leading-[1.4] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">의사 찾기</p>
              <p className="[word-break:break-word] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">증상/상담/시간으로</p>
              <div className="absolute right-[10.5px] size-[81px] top-[7px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.profile2User} />
              </div>
            </button>
            <button type="button" className="border border-[#e8e8e8] border-solid content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-end min-w-px p-[16px] relative rounded-[12px]" style={{ filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.07))" }}>
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
                <div className="absolute bg-white inset-0 rounded-[12px]" />
                <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                  <img alt="" className="absolute h-[182.95%] left-[-30.42%] max-w-none top-[-22.96%] w-[220.56%]" src={img.pharmacyMap} />
                </div>
              </div>
              <p className="[word-break:break-word] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#111] text-[20px] text-center whitespace-nowrap">약국 찾기</p>
              <p className="[word-break:break-word] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] text-center whitespace-nowrap">내 주변 약국 찾기</p>
            </button>
          </div>

          <div className="bg-[#ebf5ff] border border-[#d6eafe] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-full">
            <div className="absolute h-[95px] right-[14px] top-[3px] w-[100px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[-4.09%] max-w-none top-0 w-[104.09%]" src={img.eventGift} />
              </div>
            </div>
            <div className="bg-[#d4eaff] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0">
              <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#007fb7] text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">EVENT</p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 text-center whitespace-nowrap">
              <p className="font-semibold leading-[1.4] relative shrink-0 text-[16px] text-black">첫 상담 이벤트 진행중!</p>
              <p className="font-normal leading-[0] relative shrink-0 text-[#8b8b8b] text-[0px]">
                <span className="leading-[1.4] text-[14px]">진료비 최대 </span>
                <span className="font-semibold leading-[1.4] text-[#5babfb] text-[16px]">30%</span>
                <span className="leading-[1.4] text-[14px]">할인 받으세요.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 후기 좋은 의사 */}
      <div className="content-stretch flex flex-col gap-[10px] items-start px-[24px] py-[20px] relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <p className="[word-break:break-word] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#2a2a2a] text-[16px] text-center tracking-[-0.4px] whitespace-nowrap">후기 좋은 의사</p>
          <button type="button" onClick={() => navigate("/doctors")} className="content-stretch flex items-center relative shrink-0">
            <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#41cc58] text-[14px] tracking-[-0.35px] whitespace-nowrap">모두 보기</p>
            <div className="relative shrink-0 size-[16px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.arrowRightGreen} />
            </div>
          </button>
        </div>
        <DoctorCard d={doctors[0]} starIcon={img.star} reviews={353} />
        <DoctorCard d={doctors[1]} starIcon={img.star} reviews={86} />
      </div>

      <BottomNav />

      {sheet && <NotificationSheet onDismiss={dismiss} />}
    </Phone>
  );
}

/** 763:820 — 알림 동의 바텀시트 (홈 위에 딤 처리되어 뜨는 상태) */
function NotificationSheet({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]" onClick={onDismiss} />
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-center pt-[20px] px-[16px] relative rounded-tl-[20px] rounded-tr-[20px] w-full max-w-[430px]" style={{ filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.15))" }}>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center whitespace-nowrap">
          <div className="font-semibold leading-[0] relative shrink-0 text-[#0d0d0d] text-[20px]">
            <p className="leading-[1.4] mb-0 whitespace-pre">진료비,약값 등 혜택을 </p>
            <p className="leading-[1.4] whitespace-pre">알림으로 받아보시겠어요?</p>
          </div>
          <p className="font-normal leading-[1.4] relative shrink-0 text-[#a5a5a3] text-[14px]">이벤트, 신규 서비스 소식 등 혜택을 알려드릴게요.</p>
        </div>

        <div className="h-[162px] overflow-clip relative shrink-0 w-full">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[179px] h-[231.258px]">
            <div className="absolute bg-white border-[#cacaca] border-[9.579px] border-solid inset-0 rounded-[25.543px]" />
            <div className="absolute bg-[#cacaca] h-[16.218px] left-1/2 -translate-x-1/2 rounded-[31.929px] top-0 w-[109.923px]" />
          </div>
          <div className="absolute bg-white border border-[#eaeaea] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center inset-x-[15px] p-[12px] rounded-[12px] top-[43px]" style={{ filter: "drop-shadow(0px 4px 7.35px rgba(0,0,0,0.1))" }}>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <div className="bg-[#4fd765] content-stretch flex flex-col items-center justify-center relative rounded-[2.286px] shrink-0 size-[16px]">
                <div className="content-stretch flex items-center justify-center overflow-clip px-[2.286px] py-[1.143px] relative shrink-0 w-full">
                  <div className="h-[11.361px] relative shrink-0 w-[9.143px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.leafSmall} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-normal leading-[1.4] not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center whitespace-nowrap">마음모아</p>
            </div>
            <p className="[word-break:break-word] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-center whitespace-nowrap">[00병원]진료비 할인 행사</p>
            <p className="[word-break:break-word] font-normal leading-[1.4] not-italic relative shrink-0 text-[#a5a5a3] text-[14px] text-center whitespace-nowrap">선착순 20명까지 저렴한 진료비로 진행해드려요</p>
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
          <button type="button" onClick={onDismiss} className="bg-[#41cc58] content-stretch flex h-[54px] items-center justify-center overflow-clip px-[63px] py-[8px] relative rounded-[8px] shrink-0 w-full">
            <p className="[word-break:break-word] font-semibold leading-[1.4] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.4px] whitespace-nowrap">동의하고 알림받기</p>
          </button>
          <button type="button" onClick={onDismiss} className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-normal leading-[1.4] not-italic relative shrink-0 text-[#a5a5a3] text-[14px] text-center underline whitespace-nowrap">
            30일 동안 보지않기
          </button>
        </div>
        <HomeIndicator />
      </div>
    </div>
  );
}
