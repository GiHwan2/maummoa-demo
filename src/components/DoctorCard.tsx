import { useNavigate } from "react-router-dom";
import { img } from "../assets";

export type Doctor = {
  id: string;
  hospital: string;
  name: string;
  specialist: boolean;
  rating: string;
  reviews: number;
  photo: string;
  /** object-position tweak copied from Figma's image crop (top offset %) */
  photoH: string;
  photoTop: string;
  available?: boolean;
};

export const doctors: Doctor[] = [
  { id: "kim-yuhyeon", hospital: "서울봄봄정신과의원", name: "김유현 의사", specialist: true, rating: "5.0", reviews: 353, photo: img.doctorKim, photoH: "138.22%", photoTop: "0.27%" },
  { id: "park-byeongho", hospital: "연세메디컬정신전문의원", name: "박병호 의사", specialist: true, rating: "5.0", reviews: 86, photo: img.doctorPark, photoH: "118.23%", photoTop: "-1.39%" },
  { id: "choi-yeonseo", hospital: "마음정신과의원", name: "최연서 의사", specialist: false, rating: "5.0", reviews: 45, photo: img.doctorChoi, photoH: "134.05%", photoTop: "0.32%" },
  { id: "kim-eunseo", hospital: "소원정신전문의원", name: "김은서 의사", specialist: true, rating: "4.8", reviews: 96, photo: img.doctorKimEunseo, photoH: "122.97%", photoTop: "-2.68%" },
];

/** Doctor list card (763:673 / 763:502). `starIcon` differs between the home and list exports; both are passed in. */
export function DoctorCard({ d, starIcon, reviews, available, photoSize = 60 }: { d: Doctor; starIcon: string; reviews?: number; available?: boolean; photoSize?: number }) {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate(`/doctors/${d.id}`)} className="bg-white content-stretch flex gap-[4px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
        <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#bcbcbc] text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">{d.hospital}</p>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <p className="[word-break:break-word] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#252525] text-[16px] tracking-[-0.4px] whitespace-nowrap">{d.name}</p>
          {d.specialist && (
            <div className="bg-[#d7f5dc] content-stretch flex items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
              <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#26ae3d] text-[10px] text-center tracking-[-0.25px] whitespace-nowrap">전문의</p>
            </div>
          )}
        </div>
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[10px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={starIcon} />
          </div>
          <div className="[word-break:break-word] content-stretch flex gap-[2px] items-center leading-[1.4] not-italic relative shrink-0 text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">
            <p className="font-medium relative shrink-0 text-black">{d.rating}</p>
            <p className="font-normal relative shrink-0 text-[#bcbcbc]">({reviews ?? d.reviews})</p>
          </div>
        </div>
        {available && (
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <div className="h-[7px] relative shrink-0 w-[10px]">
              <div className="absolute inset-[-10.71%_-7.5%]">
                <img alt="" className="block max-w-none size-full" src={img.availableCheck} />
              </div>
            </div>
            <p className="[word-break:break-word] font-medium leading-[1.4] not-italic relative shrink-0 text-[#36d646] text-[12px] text-center tracking-[-0.3px] whitespace-nowrap">지금 진료가능</p>
          </div>
        )}
      </div>
      {/* Figma: square photo, 60×60 on the home card and 85×85 on the list card (self-stretch × 1:1). */}
      <div className="relative rounded-[12px] shrink-0" style={{ width: photoSize, height: photoSize }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <img alt="" className="absolute left-0 max-w-none w-full" style={{ height: d.photoH, top: d.photoTop }} src={d.photo} />
        </div>
      </div>
    </button>
  );
}
