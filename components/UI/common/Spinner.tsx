import Image from "next/image";
import {
  themes,
  DEFAULT_THEME_NAME,
  ThemeDefinition,
} from "@/constants/themes";

interface SpinnerProps {
  themeName?: string;
}

export default function Spinner({
  themeName = DEFAULT_THEME_NAME,
}: SpinnerProps) {
  const currentTheme: ThemeDefinition =
    themes[themeName] || themes[DEFAULT_THEME_NAME];

  const spinnerAsset = currentTheme.getSpinnerAsset();

  if (!spinnerAsset || !spinnerAsset.src) {
    console.warn(
      `Spinner asset or src not found for theme: ${themeName}. Using fallback.`
    );
    return (
      <div className="flex justify-center items-center py-10">Loading...</div>
    );
  }

  return (
    <div className="flex justify-center items-center py-10">
      <Image
        src={spinnerAsset.src}
        alt={spinnerAsset.alt}
        width={spinnerAsset.width}
        height={spinnerAsset.height}
        sizes="(max-width: 768px) 100vw, 512px"
        className="w-auto max-w-[90%] h-auto"
        priority
      />
    </div>
  );
}
