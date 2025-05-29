import SaJuCell from "./SaJuCell";
import { TIME_KEYS } from "@/constants/SaJuTable/saJuTableMeta";
import { SaJuFontStyles } from "@/constants/SaJuTable/saJuTableLayoutConstants";
import {
  DEFAULT_THEME_NAME,
  ThemeDefinition,
  themes,
} from "@/constants/themes";

interface SaJuRenderRowProps {
  index: number;
  title: { hanjaTitle: string; hangleTitle: string };
  row: SaJuColumn;
  themeName?: string;
}

export default function SaJuRenderRow({
  title,
  row,
  index,
  themeName = DEFAULT_THEME_NAME,
}: SaJuRenderRowProps) {
  const currentTheme: ThemeDefinition =
    themes[themeName] || themes[DEFAULT_THEME_NAME];

  return (
    <div style={{ ...currentTheme.getRowCellStyle(index) }}>
      <div
        style={{
          ...currentTheme.getRowTitleCellStyle(index),
        }}
      >
        <p style={SaJuFontStyles.rowTitleHanja}>{title.hanjaTitle}</p>
        <p style={{ ...SaJuFontStyles.rowTitleHangle, textAlign: "center" }}>
          ({title.hangleTitle})
        </p>
      </div>

      {TIME_KEYS.map((key, idx) => {
        const cell = row[key];
        return (
          <div
            key={key}
            style={{
              ...currentTheme.getRowDataCellStyle(idx, TIME_KEYS.length),
            }}
          >
            <SaJuCell cell={cell} />
          </div>
        );
      })}
    </div>
  );
}
