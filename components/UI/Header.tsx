import { generateClampFontSize } from "@/utils/generateClampFontSize";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const activeLinkStyle = "underline underline-offset-4 decoration-sky-500";

  return (
    <div className="w-screen">
      <ul
        className="flex mx-auto w-full max-w-screen-lg justify-end  items-center"
        style={{
          gap: generateClampFontSize(1, 4),
        }}
      >
        <li
          style={{
            fontSize: generateClampFontSize(1, 24),
          }}
        >
          <Link
            href="/"
            className={`hover:text-sky-600 transition-colors ${
              router.pathname === "/" ? activeLinkStyle : ""
            }
            `}
            style={{
              fontSize: generateClampFontSize(1, 24),
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blank"
            className={` hover:text-sky-600 transition-colors ${
              router.pathname === "/blank" ? activeLinkStyle : ""
            }`}
            style={{
              fontSize: generateClampFontSize(1, 24),
            }}
          >
            Blank
          </Link>
        </li>
      </ul>
    </div>
  );
}
