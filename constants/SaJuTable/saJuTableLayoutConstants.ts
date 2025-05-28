import { generateClampFontSize } from "@/utils/generateClampFontSize";

export const SaJuFontStyles = {
  header: { fontSize: generateClampFontSize(1, 20.92) },
  rowTitleHanja: { fontSize: generateClampFontSize(1, 12) },
  rowTitleHangle: { fontSize: generateClampFontSize(1, 7.82) },
  cellMainLabel: { fontSize: generateClampFontSize(1, 14.6) },
  cellSubLabel: { fontSize: generateClampFontSize(1, 9.78) },
  cellElementHangle: { fontSize: generateClampFontSize(1, 7) },
  cellElementHanja: { fontSize: generateClampFontSize(1, 25.11) },
  cellElementElement: { fontSize: generateClampFontSize(1, 8.37) },
};

export const SaJuPaddingStyles = {
  cell: {
    padding: `${generateClampFontSize(1, 5)}`,
  },
  headerCell: {
    padding: `${generateClampFontSize(1, 12)} `,
  },

  cellElementLabel: {
    padding: `${generateClampFontSize(1, 15)} ${generateClampFontSize(1, 15)}`,
  },
};

export const SaJuGridStyles = {
  row: {
    gridTemplateColumns: `minmax(1px, 0.65fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr)`,
  },
};
