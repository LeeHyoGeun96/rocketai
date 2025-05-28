import { defaultUserData } from "@/constants/userDefaults";
import { create } from "zustand";

interface UserStore {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userData: defaultUserData,
  setUserData: (data) => set({ userData: data }),
}));
