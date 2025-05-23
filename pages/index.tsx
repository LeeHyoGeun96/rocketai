"use client";

import { useUserStore } from "@/store/userStore";

export default function Home() {
  const userData = useUserStore((state) => state.userData);

  return (
    <main className="flex flex-col max-w-md w-full h-full bg-red-500 mx-auto">
      안녕하세요 {userData.name}님
    </main>
  );
}
