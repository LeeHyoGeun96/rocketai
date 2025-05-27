import getElementStyle from "@/utils/getElementStyle";
import { SaJuGridStyles } from "./layoutConstants";
import { generateClampFontSize } from "@/utils/generateClampFontSize";

export const cheongwolTheme: ThemeSpecificStyles = {
  getHeaderCellStyle: (index: number, totalHeaders: number) => {
    const baseStyle: React.CSSProperties = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRight: "1px solid black",
    };
    if (index === 0 || index === totalHeaders - 1) {
      baseStyle.borderRight = "2px solid black";
    }
    return baseStyle;
  },

  getRowCellStyle: (index: number) => {
    const baseStyle: React.CSSProperties = {
      display: "grid",
      gridTemplateColumns: SaJuGridStyles.row.gridTemplateColumns,
      borderBottom: index === 1 ? "1px solid black" : "2px solid black",
    };
    return baseStyle;
  },

  getRowTitleCellStyle: () => {
    const baseStyle: React.CSSProperties = {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRight: "2px solid black",
    };
    return baseStyle;
  },

  getRowDataCellStyle: (index: number, totalDataCells = 4) => {
    const baseStyle: React.CSSProperties = {
      backgroundColor: "#fdfdfb",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRight:
        index === totalDataCells - 1 ? "2px solid black" : "1px solid black",
    };
    return baseStyle;
  },

  getElementCellStyle: (elementLabel: string) => {
    const { backgroundColor, textColor, border } =
      getElementStyle(elementLabel);
    const baseStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: generateClampFontSize(1, 70),
      height: generateClampFontSize(1, 70),
      gap: generateClampFontSize(1, 5),
      borderRadius: "10px",
      backgroundColor,
      color: textColor,
      border,
    };
    return baseStyle;
  },
};

export const themes: Record<string, ThemeSpecificStyles> = {
  청월: cheongwolTheme,
};

export const DEFAULT_THEME_NAME = "청월";
