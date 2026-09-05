import { useNavigate } from "react-router-dom";
import { img } from "../assets";
import { HomeIndicator } from "./Shell";

const items = [
  { key: "home", label: "홈", icon: img.navHome, to: "/home", wrap: false },
  { key: "health", label: "건강 관리", icon: img.navHeart, to: undefined, wrap: "inset-[9.37%_5.21%]" },
  { key: "pharmacy", label: "약국 찾기", icon: img.navSearch, to: undefined, wrap: false },
  { key: "booking", label: "예약 내역", icon: img.navMemo, to: "/call", wrap: "inset-[5.21%_11.46%]" },
  { key: "me", label: "내 정보", icon: img.navProfile, to: "/review", wrap: false },
] as const;

/** Bottom tab bar (763:185). Only 홈 has an active state in the design; the other tabs route to demo screens. */
export function BottomNav({ shadow = "rgba(0,0,0,0.05)" }: { shadow?: string }) {
  const navigate = useNavigate();
  return (
    <div className="sticky bottom-0 bg-white content-stretch flex flex-col items-start left-0 pt-[16px] rounded-tl-[32px] rounded-tr-[32px] w-full mt-auto" style={{ filter: `drop-shadow(0px 0px 15px ${shadow})` }}>
      <div className="content-stretch flex items-center px-[24px] relative shrink-0 w-full">
        {items.map((it) => (
          <button key={it.key} type="button" onClick={() => it.to && navigate(it.to)} className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center justify-center min-w-px relative">
            <div className={`${it.wrap ? "overflow-clip" : ""} relative shrink-0 size-[24px]`}>
              {it.wrap ? (
                <div className={`absolute ${it.wrap}`}>
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={it.icon} />
                </div>
              ) : (
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={it.icon} />
              )}
            </div>
            <p className={`[word-break:break-word] leading-[1.4] not-italic relative shrink-0 text-[10px] text-center whitespace-nowrap ${it.key === "home" ? "font-semibold text-[#80e171]" : "font-medium text-[#c4c4c4]"}`}>{it.label}</p>
          </button>
        ))}
      </div>
      <HomeIndicator />
    </div>
  );
}
