import type { CSSProperties, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { img } from "../assets";

/** Phone-width column. Figma frames are 375 wide; we let it grow to 430 for wider phones. */
export function Phone({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`content-stretch flex flex-col items-start mx-auto min-h-dvh relative w-full max-w-[430px] overflow-x-clip ${className}`} style={style}>
      {children}
    </div>
  );
}

/** Figma reserves 44px for the iOS status bar. In a browser the status bar is outside the page, so we keep a small safe-area spacer instead. */
export function SafeTop() {
  return <div className="shrink-0 w-full" style={{ height: "max(env(safe-area-inset-top), 12px)" }} />;
}

/** 홈인디케이터 (component 111:14286) */
export function HomeIndicator({ className = "" }: { className?: string }) {
  return (
    <div className={`h-[34px] overflow-clip relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-full ${className}`}>
      <div className="-translate-x-1/2 absolute bg-[#111] bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" />
    </div>
  );
}

/** 56px title bar with 화살표_왼쪽 at left 24 / top 14 (28px). */
export function TopBar({ title, backIcon = img.back, onBack }: { title?: string; backIcon?: string; onBack?: () => void }) {
  const navigate = useNavigate();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <SafeTop />
      <div className="content-stretch flex gap-[10px] h-[56px] items-center justify-center overflow-clip px-[20px] py-[16px] relative shrink-0 w-full">
        {title && <p className="[word-break:break-word] font-medium leading-[24px] not-italic relative shrink-0 text-[20px] text-black text-center tracking-[-0.5px] whitespace-nowrap">{title}</p>}
        <button type="button" aria-label="뒤로" onClick={onBack ?? (() => navigate(-1))} className="absolute left-[24px] size-[28px] top-[14px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={backIcon} />
        </button>
      </div>
    </div>
  );
}

/** Primary CTA — Component 47 */
export function PrimaryButton({ children, onClick, className = "" }: { children: ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button type="button" onClick={onClick} className={`bg-[#41cc58] content-stretch flex items-center justify-center overflow-clip px-[24px] py-[16px] relative rounded-[8px] shrink-0 w-full ${className}`}>
      <p className="[word-break:break-word] font-semibold leading-[24px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.45px] whitespace-nowrap">{children}</p>
    </button>
  );
}

/** Sticky bottom CTA + home indicator (used on detail and booking steps). */
export function BottomCta({ children, onClick, above }: { children: ReactNode; onClick?: () => void; above?: ReactNode }) {
  return (
    <div className="sticky bottom-0 content-stretch flex flex-col items-start left-0 w-full mt-auto">
      <div className={`bg-white content-stretch flex flex-col ${above ? "gap-[16px]" : ""} items-start px-[24px] py-[12px] relative shrink-0 w-full`}>
        {above}
        <PrimaryButton onClick={onClick}>{children}</PrimaryButton>
      </div>
      <HomeIndicator className="bg-white" />
    </div>
  );
}

/** 8px progress bar under the title bar (booking steps). `fill` is the Figma width in px of a 327px track. */
export function ProgressBar({ fill }: { fill: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[10px] relative shrink-0 w-full">
      <div className="bg-[#f2f2f2] h-[8px] relative rounded-[8px] shrink-0 w-full overflow-clip">
        <div className="absolute bg-[#36d646] h-[8px] left-0 rounded-[8px] top-0" style={{ width: `${(fill / 327) * 100}%` }} />
      </div>
    </div>
  );
}

/** Step title block: 28px SemiBold heading + 16px gray sub. */
export function StepTitle({ lines, sub }: { lines: string[]; sub: string }) {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full">
      <div className="font-semibold leading-[0] relative shrink-0 text-[#111] text-[28px] tracking-[-0.7px] w-full whitespace-pre-wrap">
        {lines.map((l, i) => (
          <p key={i} className={`leading-[1.4] ${i < lines.length - 1 ? "mb-0" : ""}`}>{l}</p>
        ))}
      </div>
      <p className="font-normal leading-[1.4] relative shrink-0 text-[#8f8f8f] text-[16px] tracking-[-0.4px] w-full">{sub}</p>
    </div>
  );
}
