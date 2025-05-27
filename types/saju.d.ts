interface SaJuCell {
  label?: string;
  subLabel?: string;
  koreanLabel?: string;
  elementLabel?: string;
  labelArray?: string[];
  subLabelArray?: string[];
}

interface SaJuColumn {
  hour?: SaJuCell;
  day?: SaJuCell;
  month?: SaJuCell;
  year?: SaJuCell;
}

interface SaJuData {
  tenStar: SaJuColumn;
  heavenlyStems: SaJuColumn;
  earthlyBranches: SaJuColumn;
  secondTenStar: SaJuColumn;
  twelveUnseong: SaJuColumn;
  twelveShinsal: SaJuColumn;
  noblePeople: SaJuColumn;
}

interface ThemeSpecificStyles {
  // 전체 테이블 최상위 div에 적용될 클래스 (예: 테마별 기본 폰트, 배경색 등)
  tableWrapperClassName: string;

  // 헤더 영역 스타일
  headerWrapperClassName: string; // 헤더 행 전체를 감싸는 div의 클래스
  // 각 헤더 셀에 적용될 클래스를 반환하는 함수 (인덱스, 전체 헤더 수, 헤더 배열을 받아 동적으로 클래스 결정)

  getHeaderCellStyle: (
    index: number,
    totalHeaders: number
  ) => React.CSSProperties;

  getRowDataCellStyle: (
    index: number,
    totalDataCells?: number
  ) => React.CSSProperties;

  // 데이터 행 (renderRow 내부) 스타일
  rowWrapperBaseClassName: string; // 각 데이터 행을 감싸는 div의 기본 클래스 (grid, 배경, 정렬 등)
  // 데이터 행의 기본 하단 테두리 클래스 (renderRow의 customRowBottomBorder 프롭으로 개별 오버라이드 가능)
  rowDefaultBottomBorderClassName: string;
  // 데이터 행의 첫 번째 셀 (제목 셀: 예: "십성", "천간")의 클래스
  rowTitleCellClassName: string;
  // 각 데이터 셀 (시, 일, 월, 년 데이터가 들어가는 셀)에 적용될 클래스를 반환하는 함수
}
