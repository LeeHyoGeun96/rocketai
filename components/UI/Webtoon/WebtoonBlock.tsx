export interface WebtoonBlockProps {
  zIndex?: string;
  topM?: string;
  bottomM?: string;
  customClassName?: string;
  children?: React.ReactNode;
}

export function WebtoonBlock({
  zIndex = "0",
  topM = "0",
  bottomM = "0",
  customClassName = "",
  children,
}: WebtoonBlockProps) {
  return (
    <div
      className={`relative block ${customClassName || "w-full"}`}
      style={{
        zIndex,
        marginTop: topM,
        marginBottom: bottomM,
        containerType: "inline-size",
      }}
    >
      {children}
    </div>
  );
}
