import { Phone, SafeTop } from "../components/Shell";

/** 763:20853 — 후기 작성. The Figma frame only contains the 56px title bar (375×100); nothing below it is designed yet. */
export default function Review() {
  return (
    <Phone className="bg-white">
      <SafeTop />
      <div className="content-stretch flex h-[56px] items-center justify-center overflow-clip px-[20px] py-[16px] relative shrink-0 w-full">
        <p className="[word-break:break-word] font-medium leading-[24px] not-italic relative shrink-0 text-[20px] text-black text-center tracking-[-0.5px] whitespace-nowrap">후기 작성</p>
      </div>
    </Phone>
  );
}
