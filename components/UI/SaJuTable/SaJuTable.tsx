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
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(100px, auto) repeat(4, 1fr)",
          borderBottom: "2px solid black",
        }}
      >
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

      {ROWS.map(({ index, title, dataKey }) => (
        <SaJuRenderRow
          key={dataKey}
          index={index}
          title={title}
          row={data[dataKey]}
          theme={currentTheme}
        />
      ))}
    </div>
  );
}
