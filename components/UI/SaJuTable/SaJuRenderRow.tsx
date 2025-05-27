import { SaJuFontStyles, SaJuPaddingStyles } from "@/constants/layoutConstants";
import SaJuLabelCell from "./SaJuLabelCell";
import { TIME_KEYS } from "@/constants/SaJuTable/SaJuTableMeta";

interface SaJuRenderRowProps {
  title: { hanjaTitle: string; hangleTitle: string };
  row: SaJuColumn;
  theme: ThemeSpecificStyles;
  customRowBottomBorder?: string;
}

export default function SaJuRenderRow({
  title,
  row,
  theme,
  customRowBottomBorder,
}: SaJuRenderRowProps) {
  return (
    <div
      className={`${theme.rowWrapperBaseClassName} ${
        customRowBottomBorder || theme.rowDefaultBottomBorderClassName
      }`}
    >
      <div
        className={`${theme.rowTitleCellClassName} flex items-center justify-center`}
        style={SaJuPaddingStyles.cell}
      >
        <p style={SaJuFontStyles.titleHanja}>{title.hanjaTitle}</p>
        <p style={SaJuFontStyles.titleHangle}>({title.hangleTitle})</p>
      </div>

      {TIME_KEYS.map((key, idx) => {
        const cell = row[key];
        return (
          <div
            key={key}
            style={{
              ...theme.getRowDataCellStyle(idx, TIME_KEYS.length),
              ...SaJuPaddingStyles.cell,
            }}
          >
            <SaJuLabelCell cell={cell} />
          </div>
        );
      })}
    </div>
  );
}
