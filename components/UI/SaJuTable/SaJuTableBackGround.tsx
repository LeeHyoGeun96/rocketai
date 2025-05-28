import { DEFAULT_THEME_NAME, themes } from "@/constants/theme";

interface SaJuTableBackGroundProps {
  theme?: string;
  children: React.ReactNode;
}

export default function SaJuTableBackGround({
  theme = DEFAULT_THEME_NAME,
  children,
}: SaJuTableBackGroundProps) {
  return (
    <div
      className="w-full h-full"
      style={{
        ...themes[theme].getSaJuTableBackGroundStyle(),
      }}
    >
      <div
        style={{
          ...themes[theme].getInnerBoxStyle1(),
        }}
      />
      <div
        style={{
          ...themes[theme].getInnerBoxStyle2(),
        }}
      />
      {children}
    </div>
  );
}
