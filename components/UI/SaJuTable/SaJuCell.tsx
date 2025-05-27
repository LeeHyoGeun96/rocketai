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
          <p className="text-[10px] leading-none">{cell.koreanLabel}</p>

          <p className="text-xl font-semibold leading-none">{cell.label}</p>

          <p className=" text-[10px] leading-none">{cell.elementLabel}</p>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
