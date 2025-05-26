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
