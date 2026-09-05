import { useNavigate } from "react-router-dom";
import { img } from "../assets";
import { HomeIndicator, Phone } from "../components/Shell";

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#8f8f8f]"><p className="leading-[1.4]">{k}</p></div>
      <div className="flex flex-col font-medium justify-center relative shrink-0 text-black"><p className="leading-[1.4]">{v}</p></div>
    </div>
  );
}

/** 763:20619 — 예약 완료 */
export default function BookingDone() {
  const navigate = useNavigate();
  return (
    <Phone className="bg-white">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px px-[24px] py-[32px] relative w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0">
            <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[18px] py-[24px] relative shrink-0 size-[80px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#ebfbed] left-1/2 rounded-[3996px] size-[80px] top-1/2" />
              <div className="h-[26.54px] relative shrink-0 w-[37.572px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.doneCheck} />
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center leading-[1.4] not-italic relative shrink-0 whitespace-nowrap">
              <p className="font-semibold relative shrink-0 text-[#111] text-[28px] tracking-[-0.7px]">예약이 완료되었습니다!</p>
              <p className="font-normal relative shrink-0 text-[#8f8f8f] text-[16px] tracking-[-0.4px]">진료 시간 10분 전에 알림을 보내드릴게요.</p>
            </div>
          </div>

          <div className="border border-[#e5e5ec] border-solid content-stretch flex flex-col gap-[16px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-full">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
              <div className="relative rounded-[12px] shrink-0 size-[59px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                  <img alt="" className="absolute h-[138.22%] left-0 max-w-none top-[0.27%] w-full" src={img.doctorKim} />
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
                <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#bcbcbc] text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">서울봄봄정신과의원</p>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                  <p className="[word-break:break-word] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#252525] text-[16px] tracking-[-0.4px] whitespace-nowrap">김유현 의사</p>
                  <div className="bg-[#d7f5dc] content-stretch flex items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                    <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#26ae3d] text-[10px] text-center tracking-[-0.25px] whitespace-nowrap">전문의</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[14px] text-center w-full whitespace-nowrap">
              <Row k="예약 날짜" v="2026.09.01(화)" />
              <Row k="예약 시간" v="오후 14:30" />
              <Row k="상세 증상" v="우울증" />
            </div>
          </div>

          <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
            <button type="button" onClick={() => navigate("/home")} className="bg-[#41cc58] content-stretch flex h-[48px] items-center justify-center overflow-clip px-[63px] py-[8px] relative rounded-[8px] shrink-0 w-full">
              <p className="[word-break:break-word] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.4px] whitespace-nowrap">홈으로</p>
            </button>
            <button type="button" onClick={() => navigate("/booking/time")} className="bg-white border border-[#e5e5ec] border-solid content-stretch flex h-[48px] items-center justify-center overflow-clip px-[63px] py-[8px] relative rounded-[8px] shrink-0 w-full">
              <p className="[word-break:break-word] font-medium leading-[24px] not-italic relative shrink-0 text-[#404040] text-[16px] text-center tracking-[-0.4px] whitespace-nowrap">예약 내용 수정</p>
            </button>
          </div>
        </div>
      </div>
      <HomeIndicator />
    </Phone>
  );
}
