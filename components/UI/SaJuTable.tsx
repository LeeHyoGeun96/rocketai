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
import { DEFAULT_THEME_NAME, themes } from "@/constants/theme";

const headers = ["", "時", "日", "月", "年"];

interface SaJuTableProps {
  data: SaJuData;
  themeName?: string;
}

// 생략된 import와 인터페이스

export default function SaJuTable({
  data,
  themeName = DEFAULT_THEME_NAME,
}: SaJuTableProps) {
  const currentTheme = themes[themeName];

  const renderRow = (
    title: { hanjaTitle: string; hangleTitle: string },
    row: SaJuColumn,
    customRowBottomBorder?: string
  ) => {
    const bottomBorderStyle =
      customRowBottomBorder || currentTheme.rowDefaultBottomBorderClassName;

    return (
      <div
        className={`${currentTheme.rowWrapperBaseClassName} ${bottomBorderStyle}`}
      >
        <div
          className={`${currentTheme.rowTitleCellClassName} flex items-center justify-center`}
          style={CELL_PADDING_STYLE}
        >
          <p style={FONT_TITLE_HANJA_STYLE}>{title.hanjaTitle}</p>
          <p style={FONT_TITLE_HANGLE_STYLE}>({title.hangleTitle})</p>
        </div>
        {["hour", "day", "month", "year"].map((key, idx) => {
          const cell = row[key as keyof SaJuColumn];
          const dataCellStyle = {
            ...currentTheme.getRowDataCellStyle(idx, 4),
            ...CELL_PADDING_STYLE,
          };

          return (
            <div key={idx} style={dataCellStyle}>
              {cell && (
                <div className="flex flex-col items-center justify-center">
                  {cell.koreanLabel && (
                    <p style={FONT_CELL_KOREAN_LABEL_STYLE}>
                      {cell.koreanLabel}
                    </p>
                  )}

                  {cell.labelArray?.length ? (
                    cell.labelArray.map((label, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <p style={FONT_CELL_MAIN_LABEL_STYLE}>{label}</p>
                        {cell.subLabelArray?.[i] && (
                          <p style={FONT_CELL_SUB_LABEL_STYLE}>
                            ({cell.subLabelArray[i]})
                          </p>
                        )}
                      </div>
                    ))
                  ) : (
                    <>
                      {cell.label && (
                        <p style={FONT_CELL_MAIN_LABEL_STYLE}>{cell.label}</p>
                      )}
                      {cell.subLabel && (
                        <p style={FONT_CELL_SUB_LABEL_STYLE}>
                          ({cell.subLabel})
                        </p>
                      )}
                    </>
                  )}

                  {cell.elementLabel && (
                    <p style={FONT_CELL_ELEMENT_STYLE}>{cell.elementLabel}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={`${currentTheme.tableWrapperClassName} grid grid-rows-[repeat(8,_auto)]`}
    >
      <div className={currentTheme.headerWrapperClassName}>
        {headers.map((head, i) => (
          <div
            key={i}
            style={{
              ...currentTheme.getHeaderCellStyle(i, headers.length),
              ...HEADER_CELL_PADDING_STYLE,
            }}
          >
            {head && <span style={FONT_HEADER_STYLE}>{head}</span>}
          </div>
        ))}
      </div>

      {renderRow({ hanjaTitle: "十星", hangleTitle: "십성" }, data.tenStar)}
      {renderRow(
        { hanjaTitle: "天干", hangleTitle: "천간" },
        data.heavenlyStems,
        "border-b border-black"
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
