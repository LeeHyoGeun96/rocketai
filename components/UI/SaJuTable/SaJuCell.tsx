import React from "react";
import {
  SaJuFontStyles,
  SaJuPaddingStyles,
} from "@/constants/SaJuTable/saJuTableLayoutConstants"; // 경로는 실제 프로젝트에 맞게
import {
  themes,
  DEFAULT_THEME_NAME,
  ThemeDefinition,
} from "@/constants/themes";

interface SaJuCellProps {
  cell?: SaJuCell;
  themeName?: string;
}

export default function SaJuCell({
  cell,
  themeName = DEFAULT_THEME_NAME,
}: SaJuCellProps) {
  if (!cell) return null;

  const currentTheme: ThemeDefinition =
    themes[themeName] || themes[DEFAULT_THEME_NAME];

  return (
    <div style={{ ...SaJuPaddingStyles.cell }}>
      {cell.elementLabel ? (
        <div style={currentTheme.getElementCellStyle(cell.elementLabel)}>
          <p style={{ ...SaJuFontStyles.cellElementHangle }}>
            {cell.koreanLabel}
          </p>

          <p style={{ ...SaJuFontStyles.cellElementHanja }}>{cell.label}</p>

          <p style={{ ...SaJuFontStyles.cellElementElement }}>
            {cell.elementLabel}
          </p>
        </div>
      ) : (
        <>
          {cell.labelArray?.length ? (
            cell.labelArray.map((label, i) => (
              <div key={i}>
                <p style={SaJuFontStyles.cellMainLabel}>{label}</p>
                {cell.subLabelArray?.[i] && (
                  <p style={SaJuFontStyles.cellSubLabel}>
                    ({cell.subLabelArray[i]})
                  </p>
                )}
              </div>
            ))
          ) : (
            <>
              {cell.label && (
                <p style={SaJuFontStyles.cellMainLabel}>{cell.label}</p>
              )}
              {cell.subLabel && (
                <p style={SaJuFontStyles.cellSubLabel}>({cell.subLabel})</p>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
