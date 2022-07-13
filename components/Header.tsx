import Link from "next/link";

import HelpIcon from "./icons/HelpIcon";
import Logo from "./Logo";

export default function Header ({section = null}) {
  return (
    <header className="container max-w-screen-xl mx-auto flex items-center px-8 py-16 pb-12">
      <div className="w-1/2">
        <Link href="/flashcards/">
          <a><Logo /></a>
        </Link>
      </div>
      {section?.hide_help ? null :
        <div className="w-1/2 text-right">
          <Link href="/flashcards/help">
          <a
            className="inline-flex space-x-2 items-center py-2 px-4 border-2 border-current text-slate-800 hover:bg-green-500 hover:text-white focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
          >
            <HelpIcon />
            <span>Help Center</span>
          </a>
          </Link>
        </div>
      }
    </header>
  );
}
