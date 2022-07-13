import Link from "next/link";

export default function Footer({ bgSummary }) {
  return (
    <footer className="sticky top-[100vh] bg-gray-800 text-gray-300/75 ">
      <div className="py-6 px-4 text-sm md:flex md:items-center md:justify-between">
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
          <div>
            <em>In the background:</em> {bgSummary}
          </div>
        </div>
        <span className="sm:text-center">
          © 2022{" "}
          <Link href="/">
            <a>Serious Language Student</a>
          </Link>
        </span>
      </div>
    </footer>
  );
}
