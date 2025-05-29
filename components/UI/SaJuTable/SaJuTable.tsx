import SaJuRenderRow from "./SaJuRenderRow";
import {
  SaJuFontStyles,
  SaJuGridStyles,
  SaJuPaddingStyles,
} from "@/constants/SaJuTable/saJuTableLayoutConstants";
import { headers, ROWS } from "@/constants/SaJuTable/saJuTableMeta";
import {
  DEFAULT_THEME_NAME,
  ThemeDefinition,
  themes,
} from "@/constants/themes";

interface SaJuTableProps {
  data: SaJuData;
  themeName?: string;
}

export default function SaJuTable({
  data,
  themeName = DEFAULT_THEME_NAME,
}: SaJuTableProps) {
  const currentTheme: ThemeDefinition =
    themes[themeName] || themes[DEFAULT_THEME_NAME];

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: SaJuGridStyles.row.gridTemplateColumns,
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
          themeName={themeName}
        />
      ))}
    </div>
  );
}
