// stores/useUserStore.ts
import { defaultUserData } from "@/constants/bluemoonladysaju/userDefaults";
import { create } from "zustand";

interface UserStore {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userData: defaultUserData,
  setUserData: (data) => set({ userData: data }),
}));
