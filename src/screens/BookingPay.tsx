import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { img } from "../assets";
import { BottomCta, Phone, ProgressBar, TopBar } from "../components/Shell";

const methods = ["신용/체크카드", "카카오페이", "네이버페이"];

/** 763:1811 — 예약 3/3 결제 방법 */
export default function BookingPay() {
  const navigate = useNavigate();
  const [method, setMethod] = useState(methods[0]);

  return (
    <Phone className="bg-white">
      <TopBar backIcon={img.back} />
      <ProgressBar fill={327} />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[32px] relative shrink-0 w-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
          <p className="font-semibold relative shrink-0 text-[#111] text-[28px] tracking-[-0.7px] w-full">결제 방법을 선택해주세요</p>
          <p className="font-normal relative shrink-0 text-[#8f8f8f] text-[16px] tracking-[-0.4px] w-full">진료가 끝나기 전에는 진료비가 결제되지 않아요.</p>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
            {methods.map((m) => {
              const on = m === method;
              return (
                <button key={m} type="button" onClick={() => setMethod(m)} className={`border border-solid content-stretch flex flex-[1_0_0] h-[48px] items-center justify-center min-w-px p-[17px] relative rounded-[8px] ${on ? "bg-[#f0fff2] border-[#41cc58]" : "border-[#e5e5ec]"}`}>
                  <p className={`[word-break:break-word] leading-[1.4] not-italic relative shrink-0 text-[14px] tracking-[-0.35px] whitespace-nowrap ${on ? "font-semibold text-[#41cc58]" : "font-medium text-[#797979]"}`}>{m}</p>
                </button>
              );
            })}
          </div>
        </div>
        <button type="button" className="bg-[#f9f9f9] border-[#e2e2e2] border-[1.5px] border-dashed content-stretch flex flex-col gap-[8px] h-[163px] items-center justify-center relative rounded-[12px] shrink-0 w-full">
          <div className="content-stretch flex items-center overflow-clip p-[4px] relative shrink-0">
            <div className="relative shrink-0 size-[40px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.addCircle} />
            </div>
          </div>
          <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#8f8f8f] text-[16px] whitespace-nowrap">결제 수단 등록</p>
        </button>
      </div>
      <BottomCta
        onClick={() => navigate("/booking/done")}
        above={
          <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[1.4] not-italic relative shrink-0 w-full whitespace-nowrap">
            <p className="font-medium relative shrink-0 text-[#575757] text-[14px] tracking-[-0.35px]">예상 진료비</p>
            <p className="font-semibold relative shrink-0 text-[#41cc58] text-[20px] tracking-[-0.5px]">6,800원</p>
          </div>
        }
      >
        예약하기
      </BottomCta>
    </Phone>
  );
}
