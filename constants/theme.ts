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
      textAlign: "center",
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
      borderRadius: generateClampFontSize(1, 15),
      backgroundColor,
      color: textColor,
      border,
    };
    return baseStyle;
  },

  getSaJuTableBackGroundStyle: () => ({
    backgroundColor: "#f5f3ec",
    paddingTop: generateClampFontSize(1, 130),
    paddingBottom: generateClampFontSize(1, 25),
    paddingLeft: generateClampFontSize(1, 20),
    paddingRight: generateClampFontSize(1, 20),
    border: `${generateClampFontSize(1, 5)} solid black`,
  }),
  getInnerBoxStyle1: () => ({
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    height: "100%",
    border: `${generateClampFontSize(1, 2)} solid black`,
    justifyContent: "center",
    alignItems: "stretch",
    padding: generateClampFontSize(1, 10),
    boxSizing: "border-box",
  }),

  getInnerBoxStyle2: () => ({
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "99%",
    height: "97%",
    border: `${generateClampFontSize(1, 2)} solid black`,
    justifyContent: "center",
    alignItems: "stretch",
    padding: generateClampFontSize(1, 10),
    boxSizing: "border-box",
  }),
};

export const themes: Record<string, ThemeSpecificStyles> = {
  청월: cheongwolTheme,
};

export const DEFAULT_THEME_NAME = "청월";
