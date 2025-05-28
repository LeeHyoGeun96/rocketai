"use client";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/userStore";
import SaJuTable from "./SaJuTable";

export default function SaJuTableClient() {
  const { userData } = useUserStore();
  const [sajuData, setSajuData] = useState<SaJuData | null>(null);

  useEffect(() => {
    async function fetchSaJu() {
      try {
        const res = await fetch("/api/getSaJu", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user: userData }),
        });
        const data = await res.json();
        setSajuData(data);
      } catch (error) {
        console.error("사주 데이터 가져오기 실패:", error);
      }
    }

    fetchSaJu();
  }, [userData]);

  if (!sajuData) return <div>Loading SaJu...</div>;

  return <SaJuTable data={sajuData} />;
}
