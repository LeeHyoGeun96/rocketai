import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen">
      <Header />
      {children}
    </div>
  );
}
