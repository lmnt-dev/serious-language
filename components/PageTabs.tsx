import cx from 'classnames';
import Link from 'next/link';

import PageContent from 'components/PageContent';

const upper = (x) => x.at(0).toUpperCase() + x.slice(1);

export default function PageTabs({ page, section }) {
    return (<>
        <div className="container max-w-screen-xl mx-auto">
            <ul className="flex flex-wrap text-center">
              {section.tabs.map((href, i) => {
                const url =
                  '/' + page._raw.sourceFileDir + (href && `/${href}`);
                const active = page.url === url;
                return (
                  <li key={url} className={'mr-2 ' + cx({ 'ml-6 lg:ml-16': i === 0 })}>
                    <Link href={url}>
                    <a
                      className={
                        'inline-block p-4 rounded-t-lg ' +
                        cx({
                          'bg-white/75 active': active,
                          'bg-gray-100/50': !active,
                        })
                      }
                    >
                      {href.length ? upper(href) : section.index_label}
                    </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="bg-white/75">
            <div className="container max-w-screen-xl mx-auto pl-10 pr-5 lg:pl-20 lg:pr-8 py-14 prose lg:prose-lg">
              <PageContent page={page} />
            </div>
          </div>
        </>)
    }