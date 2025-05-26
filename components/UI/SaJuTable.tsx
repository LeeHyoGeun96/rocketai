import { generateClampFontSize } from "@/utils/generateClampFontSize";

const FONT_HEADER_STYLE = { fontSize: generateClampFontSize(1, 28) }; // 기존 text-2xl 대체
const FONT_TITLE_HANJA_STYLE = { fontSize: generateClampFontSize(1, 16) }; // 행 제목 한자
const FONT_TITLE_HANGLE_STYLE = { fontSize: generateClampFontSize(1, 12) }; // 행 제목 한글 (기존 text-xs)
const FONT_CELL_MAIN_LABEL_STYLE = { fontSize: generateClampFontSize(1, 16) }; // 셀 메인 라벨 (한자 등)
const FONT_CELL_SUB_LABEL_STYLE = { fontSize: generateClampFontSize(1, 12) }; // 셀 서브 라벨 (한글, 기존 text-xs)
const FONT_CELL_KOREAN_LABEL_STYLE = {
  fontSize: generateClampFontSize(1, 12),
}; // 셀 한글 간단 표기 (기존 text-xs)
const FONT_CELL_ELEMENT_STYLE = { fontSize: generateClampFontSize(1, 14) }; // 오행 표시

// 패딩 (셀 내부 여백) - generateClampFontSize 함수를 패딩 값 생성에도 활용
const CELL_PADDING_STYLE = {
  padding: `${generateClampFontSize(1, 8)} ${generateClampFontSize(1, 10)}`,
}; // 상하, 좌우
const HEADER_CELL_PADDING_STYLE = {
  padding: `${generateClampFontSize(1, 12)} ${generateClampFontSize(1, 14)}`,
};

interface SaJuColumnData {
  // Props에서 사용되므로, 간단한 형태라도 정의가 필요할 수 있습니다.
  label?: string;
  subLabel?: string;
  koreanLabel?: string;
  elementLabel?: string;
  labelArray?: string[];
  subLabelArray?: string[];
}

interface SaJuColumn {
  hour?: SaJuColumnData;
  day?: SaJuColumnData;
  month?: SaJuColumnData;
  year?: SaJuColumnData;
}
interface SaJuData {
  tenStar: SaJuColumn;
  heavenlyStems: SaJuColumn;
  earthlyBranches: SaJuColumn;
  secondTenStar: SaJuColumn;
  twelveUnseong: SaJuColumn;
  twelveShinsal: SaJuColumn;
  noblePeople: SaJuColumn;
}

interface Props {
  data: SaJuData;
}

const headers = ["", "時", "日", "月", "年"];

const renderRow = (
  title: { hanjaTitle: string; hangleTitle: string },
  row: SaJuColumn,
  borderStyle = "border-b-2" // 기본 보더 스타일 유지
) => {
  const { hanjaTitle, hangleTitle } = title;
  return (
    <div
      className={`grid grid-cols-5 ${borderStyle} border-black bg-[#fdfdfb] text-center `}
    >
      <div
        className=" flex flex-col items-center justify-center border-r-2 border-black"
        style={CELL_PADDING_STYLE} // 행 제목 셀 패딩 적용
      >
        <p style={FONT_TITLE_HANJA_STYLE}>{hanjaTitle}</p>
        <p style={FONT_TITLE_HANGLE_STYLE}>({hangleTitle})</p>
      </div>
      {["hour", "day", "month", "year"].map((key, idx) => {
        const cell = row[key as keyof SaJuColumn];

        return (
          <div
            key={idx}
            className={` border-r ${
              idx === 3 ? `border-r-2 border-black` : ``
            } flex items-center justify-center `}
            style={CELL_PADDING_STYLE} // 데이터 셀 패딩 적용
          >
            {cell && (
              <div className="flex flex-col items-center justify-center ">
                {/* 한글 간단 표기 */}
                {cell.koreanLabel && (
                  <p style={FONT_CELL_KOREAN_LABEL_STYLE}>{cell.koreanLabel}</p>
                )}

                {/* labelArray + subLabelArray 쌍으로 출력 */}
                {cell.labelArray && cell.subLabelArray ? (
                  cell.labelArray.map((label, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <p style={FONT_CELL_MAIN_LABEL_STYLE}>{label}</p>
                      <p style={FONT_CELL_SUB_LABEL_STYLE}>
                        ({cell.subLabelArray?.[i]})
                      </p>
                    </div>
                  ))
                ) : (
                  <>
                    {cell.label && (
                      <p style={FONT_CELL_MAIN_LABEL_STYLE}>{cell.label}</p>
                    )}
                    {cell.subLabel && (
                      <p style={FONT_CELL_SUB_LABEL_STYLE}>({cell.subLabel})</p>
                    )}
                  </>
                )}

                {/* 오행 (elementLabel) */}
                {cell.elementLabel && (
                  <p
                    style={FONT_CELL_ELEMENT_STYLE}
                    className="flex flex-col items-center justify-center "
                  >
                    {cell.elementLabel}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default function SaJuTable({ data }: Props) {
  return (
    <div
      className=" w-full h-auto grid grid-rows-[auto_auto_auto_auto_auto_auto_auto_auto] " // row 높이 auto로 변경 고려
    >
      {/* Header */}
      <div className="grid grid-cols-5 border-b-2 border-t-0 border-black">
        {" "}
        {/* text-2xl 제거 */}
        {headers.map((head, i) => (
          <div
            key={i}
            className={`flex justify-center items-center ${
              i === 0
                ? "border-r-2 border-black"
                : i === 4
                ? "border-r-2 border-black"
                : "border-r"
            }`}
            style={HEADER_CELL_PADDING_STYLE}
          >
            {head && <span style={FONT_HEADER_STYLE}>{head}</span>}
          </div>
        ))}
      </div>

      {/* Row Components */}
      {renderRow({ hanjaTitle: "十星", hangleTitle: "십성" }, data.tenStar)}
      {renderRow(
        { hanjaTitle: "天干", hangleTitle: "천간" },
        data.heavenlyStems
      )}
      {renderRow(
        { hanjaTitle: "地支", hangleTitle: "지지" },
        data.earthlyBranches
      )}
      {renderRow(
        { hanjaTitle: "十星", hangleTitle: "십성" },
        data.secondTenStar
      )}
      {renderRow(
        { hanjaTitle: "十二運星", hangleTitle: "십이운성" },
        data.twelveUnseong
      )}
      {renderRow(
        { hanjaTitle: "十二神殺", hangleTitle: "십이신살" },
        data.twelveShinsal
      )}
      {renderRow({ hanjaTitle: "貴人", hangleTitle: "귀인" }, data.noblePeople)}
    </div>
  );
}
