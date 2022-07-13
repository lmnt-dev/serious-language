import { useRouter } from "next/router";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
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
  const Content = useMDXComponent(page.body.code);
  const ToC = () => {
    const regex = /##(.*?)\n/g;
    const source = page.body.raw;
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
  return (
    <Content
      components={{
        DownloadFileIcon,
        h2({ children: text }) {
          const id = headingId(text);
          return <h2 id={id}>{text}</h2>;
        },
        Link,
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
