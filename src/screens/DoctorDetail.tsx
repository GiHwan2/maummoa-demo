import { useNavigate } from "react-router-dom";
import { img } from "../assets";
import { BottomCta, Phone, TopBar } from "../components/Shell";

const Divider = () => (
  <div className="h-0 relative shrink-0 w-full">
    <div className="absolute inset-[-1px_0_0_0]">
      <img alt="" className="block max-w-none size-full" src={img.divider} />
    </div>
  </div>
);

const SectionTitle = ({ children }: { children: string }) => (
  <p className="[word-break:break-word] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#2a2a2a] text-[16px] text-center tracking-[-0.4px] whitespace-nowrap">{children}</p>
);

function FeeRow({ label, price, line }: { label: string; price: string; line: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-normal leading-[1.4] not-italic relative shrink-0 text-[#666] text-[14px] text-center tracking-[-0.35px] whitespace-nowrap">{label}</p>
      <div className="flex-[1_0_0] h-0 min-w-px relative">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={line} />
        </div>
      </div>
      <p className="[word-break:break-word] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1ac42b] text-[14px] text-center tracking-[-0.35px] whitespace-nowrap">{price}</p>
    </div>
  );
}

function FeeBox({ age, revisit, first, lines }: { age: string; revisit: string; first: string; lines: [string, string] }) {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-full">
      <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#242424] text-[14px] text-center tracking-[-0.35px] whitespace-nowrap">{age}</p>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
        <FeeRow label="재진" price={revisit} line={lines[0]} />
        <FeeRow label="초진" price={first} line={lines[1]} />
      </div>
    </div>
  );
}

function Review({ name, date, text }: { name: string; date: string; text: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[1.4] not-italic relative shrink-0 text-[#969696] text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">
          <p className="font-normal relative shrink-0">{name}</p>
          <p className="font-medium relative shrink-0">{date}</p>
        </div>
        <div className="relative shrink-0 size-[20px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.overflowMenu} />
        </div>
      </div>
      <p className="[word-break:break-word] font-normal leading-[1.4] not-italic relative shrink-0 text-[#101010] text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">{text}</p>
      <div className="h-[12px] relative shrink-0 w-[79.2px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.starsRow} />
      </div>
    </div>
  );
}

/** 763:969 — 의사 상세 */
export default function DoctorDetail() {
  const navigate = useNavigate();
  return (
    <Phone className="bg-white">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" style={{ filter: "drop-shadow(0px 0px 15px rgba(0,0,0,0.05))" }}>
        <TopBar title="의사 찾기" />
        <div className="content-stretch flex h-[206px] items-center overflow-clip relative rounded-[12px] shrink-0 w-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover object-[center_30%] pointer-events-none size-full" src={img.doctorHero} />
        </div>
        <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#bcbcbc] text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">서울봄봄정신과의원</p>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <p className="[word-break:break-word] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#252525] text-[20px] tracking-[-0.5px] whitespace-nowrap">김유현 의사</p>
                <div className="bg-[#d7f5dc] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0">
                  <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#26ae3d] text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">전문의</p>
                </div>
              </div>
              <div className="relative shrink-0 size-[20px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.heartFilled} />
              </div>
            </div>
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[10px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.starDetail} />
              </div>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[12px] text-black text-center tracking-[-0.3px] whitespace-nowrap">5.0</p>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <p className="[word-break:break-word] font-normal leading-[1.4] not-italic relative shrink-0 text-[#b4b4b4] text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">86개의 후기</p>
                  <div className="relative shrink-0 size-[12px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.arrowRightSmall} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full">
          <div className="border-b border-black border-solid content-stretch flex flex-[1_0_0] h-[36px] items-center justify-center min-w-px relative">
            <p className="[word-break:break-word] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#252525] text-[14px] tracking-[-0.35px] whitespace-nowrap">소개</p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] h-[36px] items-center justify-center min-w-px relative">
            <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#989898] text-[14px] tracking-[-0.35px] whitespace-nowrap">진료비</p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] h-[36px] items-center justify-center min-w-px relative">
            <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#989898] text-[14px] tracking-[-0.35px] whitespace-nowrap">리뷰(86개)</p>
          </div>
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[20px] relative shrink-0 w-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[1.4] not-italic relative shrink-0 text-center w-full whitespace-nowrap">
          <SectionTitle>의사 정보</SectionTitle>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
            <p className="font-medium relative shrink-0 text-[#2a2a2a] text-[14px] tracking-[-0.35px]">정신의학과 전문의</p>
            <p className="font-normal relative shrink-0 text-[#bcbcbc] text-[12px] tracking-[-0.3px]">정신의학과 전문의 자격증 보유</p>
          </div>
        </div>
        <Divider />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[1.4] not-italic relative shrink-0 text-center w-full whitespace-nowrap">
          <SectionTitle>약력</SectionTitle>
          <div className="content-stretch flex flex-col font-medium gap-[8px] items-start relative shrink-0 text-[#666] text-[14px] tracking-[-0.35px]">
            <p className="relative shrink-0">연세대학교 의과대학 졸업</p>
            <p className="relative shrink-0">연세대학병원 정신건강의학과 전공의 수료</p>
            <p className="relative shrink-0">대한신경정신의학회 정회원</p>
          </div>
        </div>
        <Divider />
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <SectionTitle>진료비</SectionTitle>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <FeeBox age="만 1세 - 64세" revisit="5,100원" first="6,800원" lines={[img.feeLineA, img.feeLineB]} />
            <FeeBox age="만 64세-" revisit="1,700원" first="4,500원" lines={[img.feeLineA, img.feeLineB]} />
            <FeeBox age="-만 1세" revisit="800원" first="1,200원" lines={[img.feeLineC, img.feeLineD]} />
          </div>
        </div>
        <Divider />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[1.4] not-italic relative shrink-0 text-center w-full whitespace-nowrap">
          <SectionTitle>비대면 진료 시간</SectionTitle>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[14px] tracking-[-0.35px]">
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[#666]">
              <p className="font-normal relative shrink-0">평일</p>
              <p className="font-semibold relative shrink-0">13:00 - 23:00</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
              <p className="font-normal relative shrink-0 text-[#4098e1]">토요일</p>
              <p className="font-semibold relative shrink-0 text-[#666]">13:00 - 23:00</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
              <p className="font-normal relative shrink-0 text-[#ff6f6f]">일요일</p>
              <p className="font-semibold relative shrink-0 text-[#666]">13:00 - 23:00</p>
            </div>
          </div>
        </div>
        <Divider />
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <SectionTitle>병원 위치</SectionTitle>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.4] not-italic relative shrink-0 text-center whitespace-nowrap">
            <p className="font-medium relative shrink-0 text-[#2a2a2a] text-[14px] tracking-[-0.35px]">서울봄봄정신과의원</p>
            <p className="font-normal relative shrink-0 text-[#bcbcbc] text-[12px] tracking-[-0.3px]">서울시 강남구 테헤란로 224길 18</p>
          </div>
          <div className="h-[188px] overflow-clip relative rounded-[12px] shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img.hospitalMap} />
          </div>
        </div>
        <Divider />
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <SectionTitle>진료 후기</SectionTitle>
          <Review name="김*준" date="2026.08.31" text="친절한 진료 감사합니다." />
          <Divider />
          <Review name="조*석" date="2026.08.30" text="감사합니다! " />
          <Divider />
          <Review name="지*수" date="2026.08.29" text="친절하게 상담해주십니다." />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
            <div className="content-stretch flex items-center relative shrink-0">
              <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#9d9d9d] text-[14px] tracking-[-0.35px] whitespace-nowrap">모두 보기</p>
              <div className="relative shrink-0 size-[16px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={img.arrowRightGray} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomCta onClick={() => navigate("/booking/time")}>김유현 의사와 상담하기</BottomCta>
    </Phone>
  );
}
