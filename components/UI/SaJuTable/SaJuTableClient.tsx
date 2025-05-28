"use client";

import { useEffect, useState } from "react";
import { useUserStore } from "@/store/userStore";
import SaJuTable from "./SaJuTable";

export default function SaJuTableClient() {
  const { userData } = useUserStore();
  const [sajuData, setSajuData] = useState<SaJuData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSaJu() {
      try {
        setIsLoading(true);
        setError(null); // 에러 초기화

        const res = await fetch("/api/getSaJu", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user: userData }),
        });

        if (!res.ok) {
          throw new Error(`API Error: ${res.status}`);
        }

        const data = await res.json();
        setSajuData(data);
      } catch (err: any) {
        console.error("사주 데이터 가져오기 실패:", err);
        setError("사주 데이터를 불러오는 중 문제가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchSaJu();
  }, [userData]);

  if (isLoading) {
    return <div>사주 데이터를 불러오는 중입니다...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-4">{error}</div>;
  }

  if (!sajuData) {
    return <div>사주 데이터가 없습니다.</div>; // 혹은 fallback UI
  }

  return <SaJuTable data={sajuData} />;
}
