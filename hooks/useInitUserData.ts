import { defaultUserData } from "@/constants/bluemoonladysaju/userDefaults";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";

export const useInitUserData = () => {
  const setUserData = useUserStore((state) => state.setUserData);

  useEffect(() => {
    const saved = localStorage.getItem("userData");

    if (saved) {
      setUserData(JSON.parse(saved));
    } else {
      localStorage.setItem("userData", JSON.stringify(defaultUserData));
      setUserData(defaultUserData);
    }
  }, [setUserData]);
};
