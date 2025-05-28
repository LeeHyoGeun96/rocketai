interface SaJuTableBackGroundProps {
  children: React.ReactNode;
}

export default function SaJuTableBackGround({
  children,
}: SaJuTableBackGroundProps) {
  return (
    <div
      className="w-full h-full pt-[120px] px-5 pb-1"
      style={{ backgroundColor: "#f5f3ec" }}
    >
      {children}
    </div>
  );
}
