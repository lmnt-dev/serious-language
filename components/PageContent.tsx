import { useRouter } from "next/router";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

import { downloadNameFromPath } from "lib/pdf";
import PaypalButton from "components/PaypalButton";
import DownloadFileIcon from "components/icons/DownloadFileIcon";

const headingId = (text) =>
  text
    .trim()
    .replace(/\.|:|,|'|\?/g, "")
    .replace(/ /g, "-")
    .toLowerCase();

export default function PageContent({ page }) {
  const router = useRouter();
  const source = page.body.raw;
  const Content = useMDXComponent(page.body.code);

  const ToC = () => {
    const regex = /##(.*?)\n/g;
    const matches = source.match(regex);

    if (!matches) {
      return null;
    }

    const headings = matches.map((h2) => {
      const text = h2.slice(2);
      const id = headingId(text);
      return {
        id,
        text,
      };
    });

    return (
      <details open>
        <summary>
          <span>Table of Contents</span>
        </summary>
        <div>
          <ol>
            {headings.map(({ id, text }) => (
              <li key={id}>
                <a href={"#" + id}>{text}</a>
              </li>
            ))}
          </ol>
        </div>
      </details>
    );
  };

  const DownloadButton = () => {
    return (
      <a
        download
        href={`/${downloadNameFromPath(page._raw.flattenedPath)}.pdf`}
        className="float-right inline-flex space-x-2 items-center py-2 px-4 border-2 border-current text-slate-800 hover:bg-green-500 hover:text-white focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md no-underline"
      >
        <DownloadFileIcon />
        <span>Download PDF</span>
      </a>
    );
  };

  return (
    <Content
      components={{
        DownloadButton,
        h2({ children: text }) {
          const id = headingId(text);
          return <h2 id={id}>{text}</h2>;
        },
        Link,
        BackLink() {
          return <span onClick={() => router.back()}><a>Return to previous page</a></span>
        },
        FreeLink() {
          return <Link href={`/dist/sls-install-${router.query.lang}-free.exe`}><a>
            Download free sample version
          </a></Link>;
        },
        PurchaseLink() {
          return <Link href={`/flashcards/purchase/payment?lang=${router.query.lang}`}><a>
            I accept these conditions and want to continue with the purchase
          </a></Link>;
        },
        ToC,
        Param({ name }) {
          const upper = (x) => (x && x.at(0).toUpperCase()) + (x && x.slice(1));
          return upper(router.query[name] || "");
        },
        PaypalButton,
      }}
    />
  );
}
