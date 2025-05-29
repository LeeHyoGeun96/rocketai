import {
  SaJuFontStyles,
  SaJuPaddingStyles,
} from "@/constants/SaJuTable/saJuTableLayoutConstants";
import {
  DEFAULT_THEME_NAME,
  themes,
} from "@/constants/SaJuTable/saJuTableTheme";

interface SaJuCellProps {
  cell?: SaJuCell;
  themeName?: string;
}

export default function SaJuCell({
  cell,
  themeName = DEFAULT_THEME_NAME,
}: SaJuCellProps) {
  if (!cell) return null;

  return (
    <div style={{ ...SaJuPaddingStyles.cell }}>
      {cell.elementLabel ? (
        <div style={themes[themeName].getElementCellStyle(cell.elementLabel)}>
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
