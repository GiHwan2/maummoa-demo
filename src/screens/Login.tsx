import { useNavigate } from "react-router-dom";
import { img } from "../assets";
import { HomeIndicator, Phone, SafeTop } from "../components/Shell";

/** 763:58 — 로그인 */
export default function Login() {
  const navigate = useNavigate();
  const go = () => navigate("/home");

  const social = [
    { key: "naver", label: "네이버로 시작하기", bg: "bg-white", icon: img.naver },
    { key: "kakao", label: "카카오톡으로 시작하기", bg: "bg-[#fee500]", icon: img.kakao },
    { key: "google", label: "구글로 시작하기", bg: "bg-[#fcfcfc]", icon: img.google },
  ];

  return (
    <Phone className="overflow-clip" style={{ backgroundImage: "linear-gradient(160.1488077148854deg, rgb(100, 228, 121) 1.5594%, rgb(146, 215, 131) 98.441%)" }}>
      <div className="absolute inset-[-7.76%_-101.07%_-25.45%_-67.2%] pointer-events-none">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.loginPattern} />
      </div>
      <SafeTop />
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px relative w-full">
        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px not-italic px-[24px] relative w-full">
          <div className="bg-clip-text font-semibold leading-[0] relative shrink-0 text-[40px] text-[transparent] tracking-[-1px] w-full" style={{ backgroundImage: "linear-gradient(114.6136854590287deg, rgb(17, 17, 17) 2.5053%, rgb(80, 80, 80) 76.154%)" }}>
            <p className="leading-[1.4] mb-0">비대면</p>
            <p className="leading-[1.4]">정신과 상담</p>
          </div>
          <p className="font-normal leading-[1.4] relative shrink-0 text-[#4b4b4b] text-[18px] tracking-[-0.45px] w-full">언제 어디서나, 당신의 마음을 돌봐드려요.</p>
        </div>

        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[4px] relative shrink-0 w-full">
            <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#505050] text-[14px] tracking-[-0.35px] whitespace-nowrap">간편 로그인</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] relative shrink-0 w-full">
            {social.map((s) => (
              <button key={s.key} type="button" onClick={go} className={`${s.bg} content-stretch flex gap-[8px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full`}>
                <div className="overflow-clip relative shrink-0 size-[22px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={s.icon} />
                </div>
                <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[-0.4px] whitespace-nowrap">{s.label}</p>
              </button>
            ))}
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
            <div className="content-stretch flex gap-[12px] items-center justify-center px-[36px] py-[4px] relative shrink-0 w-full">
              <div className="flex-[1_0_0] h-0 min-w-px relative">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={img.loginLine} />
                </div>
              </div>
              <p className="[word-break:break-word] font-normal leading-[1.4] not-italic relative shrink-0 text-[#505050] text-[12px] tracking-[-0.3px] whitespace-nowrap">또는</p>
              <div className="flex-[1_0_0] h-0 min-w-px relative">
                <div className="absolute inset-[-1px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={img.loginLine} />
                </div>
              </div>
            </div>
            <button type="button" onClick={go} className="content-stretch flex items-center justify-center px-[24px] py-[4px] relative shrink-0 w-full">
              <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-normal leading-[1.4] not-italic relative shrink-0 text-[#505050] text-[12px] tracking-[-0.3px] underline whitespace-nowrap">이메일로 시작하기</p>
            </button>
          </div>
        </div>
        <HomeIndicator />
      </div>
    </Phone>
  );
}
