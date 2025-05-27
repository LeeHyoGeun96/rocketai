import { generateClampFontSize } from "@/utils/generateClampFontSize";

export const MAX_WIDTH = 448;

export const SaJuFontStyles = {
  header: { fontSize: generateClampFontSize(3, 28) },
  titleHanja: { fontSize: generateClampFontSize(3, 12) },
  titleHangle: { fontSize: generateClampFontSize(3, 10) },
  cellMainLabel: { fontSize: generateClampFontSize(3, 16) },
  cellSubLabel: { fontSize: generateClampFontSize(3, 12) },
  cellKoreanLabel: { fontSize: generateClampFontSize(3, 12) },
  cellElementLabel: { fontSize: generateClampFontSize(3, 14) },
};

export const SaJuPaddingStyles = {
  cell: {
    padding: `${generateClampFontSize(1, 8)} ${generateClampFontSize(3, 10)}`,
  },
  headerCell: {
    padding: `${generateClampFontSize(1, 12)} ${generateClampFontSize(3, 14)}`,
  },

  cellElementLabel: {
    padding: `${generateClampFontSize(1, 15)} ${generateClampFontSize(1, 15)}`,
  },
};

export const SaJuGridStyles = {
  row: {
    gridTemplateColumns: `minmax(1px, 0.8fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr)`,
  },
};
