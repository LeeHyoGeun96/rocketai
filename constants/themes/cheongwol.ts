// constants/themes/cheongwol.ts
import { ThemeDefinition } from "./index"; // 또는 './interfaces' 등 인터페이스 파일 경로
import getElementStyle from "@/utils/getElementStyle"; // 실제 경로로 수정 필요
import { SaJuGridStyles } from "@/constants/SaJuTable/saJuTableLayoutConstants"; // 실제 경로로 수정 필요
import { generateClampFontSize } from "@/utils/generateClampFontSize"; // 실제 경로로 수정 필요

export const cheongwolTheme: ThemeDefinition = {
  // --- SaJuTable Styles ---
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

  // --- Spinner Asset ---
  getSpinnerAsset: () => ({
    src: "/images/bluemoonladysaju/loading/analyzing.png", // "청월" 테마의 스피너 이미지 경로
    alt: "분석중 이미지 (청월 테마)", // 테마별 alt 텍스트
    width: 1024, // 테마별 기본 너비
    height: 1536, // 테마별 기본 높이
  }),

  // --- 예시: 일반적인 테마 색상 ---
  // getPrimaryColor: () => "#003366", // 청월 테마의 주 색상
  // getSecondaryColor: () => "#e6f2ff", // 청월 테마의 보조 색상

  // --- 예시: 버튼 스타일 ---
  // getButtonVariantStyle: (variant: 'primary' | 'secondary' = 'primary') => {
  //   if (variant === 'primary') {
  //     return { backgroundColor: "#003366", color: "white", padding: "10px 20px", border: "none" };
  //   }
  //   return { backgroundColor: "#e6f2ff", color: "#003366", padding: "10px 20px", border: "1px solid #003366" };
  // },
};
