interface WebtoonContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function WebtoonContainer({
  children,
  className = "",
}: WebtoonContainerProps) {
  return (
    <div
      className={`max-w-md mx-auto flex flex-col items-center w-full ${className}`}
      style={{
        containerType: "inline-size",
      }}
    >
      {children}
    </div>
  );
}
