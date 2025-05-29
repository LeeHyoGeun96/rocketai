import {
  DEFAULT_THEME_NAME,
  ThemeDefinition,
  themes,
} from "@/constants/themes";

interface SaJuTableBackGroundProps {
  themeName?: string;
  children: React.ReactNode;
}

export default function SaJuTableBackGround({
  themeName = DEFAULT_THEME_NAME,
  children,
}: SaJuTableBackGroundProps) {
  const currentTheme: ThemeDefinition =
    themes[themeName] || themes[DEFAULT_THEME_NAME];

  return (
    <div
      className="w-full h-full"
      style={{
        ...currentTheme.getSaJuTableBackGroundStyle(),
      }}
    >
      <div
        style={{
          ...currentTheme.getInnerBoxStyle1(),
        }}
      />
      <div
        style={{
          ...currentTheme.getInnerBoxStyle2(),
        }}
      />
      {children}
    </div>
  );
}
