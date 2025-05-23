"use client";

import { useInitUserData } from "@/hooks/useInitUserData";

export const ClientInit = () => {
  useInitUserData();
  return null;
};
