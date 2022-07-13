import { useMDXComponent } from "next-contentlayer/hooks";

import DownloadFileIcon from "components/icons/DownloadFileIcon";

const headingId = (text) =>
  text
    .trim()
    .replace(/\.|:|,|'|\?/g, "")
    .replace(/ /g, "-")
    .toLowerCase();

export default function PageContent({ page }) {
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
        h2: ({ children: text }) => {
          const id = headingId(text);
          return <h2 id={id}>{text}</h2>;
        },
        ToC,
      }}
    />
  );
}
