export const cheongwolTheme: ThemeSpecificStyles = {
  tableWrapperClassName: "w-full h-auto",

  headerWrapperClassName: "grid grid-cols-5 border-b-2 border-t-0 border-black",

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

  rowWrapperBaseClassName: "grid grid-cols-5 text-center",

  rowDefaultBottomBorderClassName: "border-b-2 border-black",

  rowTitleCellClassName:
    "flex flex-col items-center justify-center border-r-2 border-black bg-transparent",

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
};

export const themes: Record<string, ThemeSpecificStyles> = {
  청월: cheongwolTheme,
};

export const DEFAULT_THEME_NAME = "청월";
