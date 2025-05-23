"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const activeLinkStyle = "underline underline-offset-4 decoration-sky-500";

  return (
    <div className="w-screen">
      <ul className="flex mx-auto w-full max-w-screen-lg justify-end gap-4  items-center">
        <li>
          <Link
            href="/"
            className={`text-2xl hover:text-sky-600 transition-colors ${
              pathname === "/" ? activeLinkStyle : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/custom"
            className={`text-2xl hover:text-sky-600 transition-colors ${
              pathname === "/custom" ? activeLinkStyle : ""
            }`}
          >
            Custom
          </Link>
        </li>
      </ul>
    </div>
  );
}
