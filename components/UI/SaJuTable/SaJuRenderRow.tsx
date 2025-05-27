import { SaJuFontStyles, SaJuPaddingStyles } from "@/constants/layoutConstants";
import SaJuLabelCell from "./SaJuLabelCell";
import { TIME_KEYS } from "@/constants/SaJuTable/SaJuTableMeta";

interface SaJuRenderRowProps {
  index: number;
  title: { hanjaTitle: string; hangleTitle: string };
  row: SaJuColumn;
  theme: ThemeSpecificStyles;
}

export default function SaJuRenderRow({
  title,
  row,
  theme,
  index,
}: SaJuRenderRowProps) {
  return (
    <div style={{ ...theme.getRowCellStyle(index) }}>
      <div
        style={{
          ...SaJuPaddingStyles.cell,
          ...theme.getRowTitleCellStyle(index),
        }}
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
