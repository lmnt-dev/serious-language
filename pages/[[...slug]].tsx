import { useState } from 'react';
import Link from 'next/link';

import BackgroundImage from 'components/BackgroundImage';
import Footer from 'components/Footer';
import Head from 'components/Head';
import Header from 'components/Header';
import Modal from 'components/Modal';
import PageContent from 'components/PageContent';
import PageTabs from 'components/PageTabs';
import { allPages, allSections } from 'contentlayer/generated';

export async function getStaticPaths() {
  const paths = allPages.map((page) => page.url);
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug = [] } }) {
  const url = '/' + slug.join('/');
  const urlSection = slug[1];
  return {
    props: {
      page: allPages.find((page) => page.url === url),
      section: allSections.find((section) => section.key === urlSection) || null,
    },
  };
}

export default function SlugPage({ page, section }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{page.title}</title>
      </Head>
      <BackgroundImage src={`/bg-${section.bg || 'default'}.jpg`} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex min-h-screen flex-col">
        <Header section={section} />
        <div className="flex flex-col grow relative">
          {section.hero_title
          ? (
              <section className="gap-8 px-6 mb-12 mx-auto max-w-screen-xl xl:gap-16 lg:grid lg:grid-cols-2 lg:px-6">
                <div className="prose prose-xl px-8">
                  <h1 className="text-3xl lg:text-5xl">{section.hero_title}</h1>
                  <p>{section.hero_text}</p>
                </div>

                <div className="mt-4 lg:mt-0">
                  <div className="flex flex-col p-10 xl:px-14 xl:py-12 bg-white lg:max-w-xl lg:ml-auto rounded-4xl shadow-2xl">
                    <a download href="/manual-japanese.pdf" className="inline-block mb-4 py-8 text-xl text-center w-full rounded-lg text-white bg-gray-700 hover:bg-green-500 focus:ring-4 focus:ring-blue-300 focus:outline-none">Download Free Sample Version</a>
                    <button type="button" onClick={() => setIsOpen(true)} className="inline-block py-8 text-xl text-center w-full rounded-lg text-white bg-gray-700 hover:bg-green-500 focus:ring-4 focus:ring-blue-300 focus:outline-none">Download Full Version</button>
                  </div>
                </div>
              </section>
            )
            : null
          }
          {section?.tabs
            ? <PageTabs page={page} section={section} />
            : <PageContent page={page} />
          }
        </div>
        <Footer bgSummary={section.bg_summary} />
      </div>
    </>
  );
}
