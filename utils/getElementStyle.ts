export default function getElementStyle(label?: string) {
  const styleMap: Record<
    string,
    { backgroundColor: string; textColor: string; border?: string }
  > = {
    陰金: {
      backgroundColor: "#fff",
      textColor: "#292929",
      border: "1px solid black",
    },
    陽火: {
      backgroundColor: "#c23030",
      textColor: "#fff",
    },
    陽水: {
      backgroundColor: "#2f2f2f",
      textColor: "#fff",
    },
    陰木: {
      backgroundColor: "#18868c",
      textColor: "#fff",
    },
    陽土: {
      backgroundColor: "#896c0c",
      textColor: "#fff",
    },
  };

  return (
    styleMap[label || ""] || {
      backgroundColor: "#f3f4f6",
      textColor: "#000",
      border: "1px solid #d1d5db",
    }
  );
}
