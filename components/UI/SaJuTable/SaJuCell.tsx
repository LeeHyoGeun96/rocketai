import { SaJuFontStyles, SaJuPaddingStyles } from "@/constants/layoutConstants";
import { themes } from "@/constants/theme";

interface SaJuCellProps {
  cell?: SaJuCell;
}

export default function SaJuCell({ cell }: SaJuCellProps) {
  if (!cell) return null;

  return (
    <div style={{ ...SaJuPaddingStyles.cell }}>
      {cell.elementLabel ? (
        <div style={themes["청월"].getElementCellStyle(cell.elementLabel)}>
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
