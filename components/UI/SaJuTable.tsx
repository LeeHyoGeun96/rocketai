import {
  CELL_PADDING_STYLE,
  FONT_CELL_ELEMENT_STYLE,
  FONT_CELL_KOREAN_LABEL_STYLE,
  FONT_CELL_MAIN_LABEL_STYLE,
  FONT_CELL_SUB_LABEL_STYLE,
  FONT_HEADER_STYLE,
  FONT_TITLE_HANGLE_STYLE,
  FONT_TITLE_HANJA_STYLE,
  HEADER_CELL_PADDING_STYLE,
} from "@/constants/layoutConstants";

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

interface SaJuTableProps {
  data: SaJuData;
}

export default function SaJuTable({ data }: SaJuTableProps) {
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
                : i === headers.length - 1
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
