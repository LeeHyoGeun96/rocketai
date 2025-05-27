import { SaJuFontStyles } from "@/constants/layoutConstants";

interface SaJuLabelCellProps {
  cell?: SaJuCell;
}

export default function SaJuLabelCell({ cell }: SaJuLabelCellProps) {
  if (!cell) return null;

  return (
    <div className="flex flex-col items-center justify-center">
      {cell.koreanLabel && (
        <p style={SaJuFontStyles.cellKoreanLabel}>{cell.koreanLabel}</p>
      )}

      {cell.labelArray?.length ? (
        cell.labelArray.map((label, i) => (
          <div key={i} className="flex flex-col items-center">
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

      {cell.elementLabel && (
        <p style={SaJuFontStyles.cellElementLabel}>{cell.elementLabel}</p>
      )}
    </div>
  );
}
