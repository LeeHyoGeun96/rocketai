"use client";

import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const activeLinkStyle = "underline underline-offset-4 decoration-sky-500";

  return (
    <div className="w-screen">
      <ul className="flex mx-auto w-full max-w-screen-lg justify-end gap-4  items-center">
        <li>
          <Link
            href="/"
            className={`text-2xl hover:text-sky-600 transition-colors ${
              router.pathname === "/" ? activeLinkStyle : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blank"
            className={`text-2xl hover:text-sky-600 transition-colors ${
              router.pathname === "/blank" ? activeLinkStyle : ""
            }`}
          >
            Blank
          </Link>
        </li>
      </ul>
    </div>
  );
}
