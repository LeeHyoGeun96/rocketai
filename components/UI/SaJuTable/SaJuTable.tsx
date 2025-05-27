import { DEFAULT_THEME_NAME, themes } from "@/constants/theme";
import SaJuRenderRow from "./SaJuRenderRow";
import { SaJuFontStyles, SaJuPaddingStyles } from "@/constants/layoutConstants";
import { headers, ROWS } from "@/constants/SaJuTable/SaJuTableMeta";

interface SaJuTableProps {
  data: SaJuData;
  themeName?: string;
}

export default function SaJuTable({
  data,
  themeName = DEFAULT_THEME_NAME,
}: SaJuTableProps) {
  const currentTheme = themes[themeName];

  return (
    <div
      className={`${currentTheme.tableWrapperClassName} grid grid-rows-[repeat(${ROWS.length},_auto)]`}
    >
      <div className={currentTheme.headerWrapperClassName}>
        {headers.map((head, i) => (
          <div
            key={i}
            style={{
              ...currentTheme.getHeaderCellStyle(i, headers.length),
              ...SaJuPaddingStyles.headerCell,
            }}
          >
            {head && <span style={SaJuFontStyles.header}>{head}</span>}
          </div>
        ))}
      </div>

      {ROWS.map(({ title, dataKey, customStyle }) => (
        <SaJuRenderRow
          key={dataKey}
          title={title}
          row={data[dataKey]}
          theme={currentTheme}
          customRowBottomBorder={customStyle}
        />
      ))}
    </div>
  );
}
