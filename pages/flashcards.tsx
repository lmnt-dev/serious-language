import Head from "next/head";
import Link from "next/link";

import BackgroundImage from "components/BackgroundImage";
import Footer from "components/Footer";
import Header from "components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flashcards | Serious Language Student</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BackgroundImage src={`/bg-default.jpg`} />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="grow relative">
          <section className="gap-8 px-6 mb-12 mx-auto max-w-screen-xl xl:gap-16 lg:grid lg:grid-cols-2 lg:px-6">
            <div className="prose prose-xl px-8">
              <h1 className="text-3xl lg:text-5xl">
                Welcome to{" "}
                <span className="whitespace-nowrap">Serious Language</span>{" "}
                <span className="whitespace-nowrap">Student Flashcards</span>
              </h1>
              <p className="mb-12">
                Vocabulary is the hard part of learning such languages as
                Arabic, Chinese and Japanese. As students of those languages
                know, one can fairly quickly master the basic grammar and common
                sentence patterns. Then the challenge becomes{" "}
                <strong className="text-2xl italic">learning vocabulary</strong>
                .
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <div className="flex flex-col p-10 xl:px-14 xl:py-12 bg-white lg:max-w-xl lg:ml-auto rounded-4xl shadow-2xl">
                <h2 className="mb-7 text-2xl lg:text-3xl font-bold">
                  Choose your language
                </h2>
                <h3 className="leading-7 mb-10">
                  Select the language you are studying to see how Serious
                  Language Student Flashcards can help you succeed in mastering
                  an adequate target language vocabulary.
                </h3>
                <ul className="flex w-full items-center text-center divide-x divide-gray-900 text-white">
                  <li className="w-full">
                    <Link href="/flashcards/arabic">
                      <a className="inline-block py-8 text-xl w-full rounded-l-lg bg-gray-700 hover:bg-green-500 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        <h2>عربية</h2>
                        <p>Arabic</p>
                      </a>
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link href="/flashcards/japanese">
                      <a className="inline-block py-8 text-xl w-full bg-gray-700 hover:bg-green-500 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        <h2>日本語</h2>
                        <p>Japanese</p>
                      </a>
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link href="/flashcards/chinese">
                      <a className="inline-block py-8 text-xl w-full bg-gray-700 hover:bg-green-500 rounded-r-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <h2>中文</h2>
                        <p>Chinese</p>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <Footer bgSummary="“Body of Knowledge” by Jaume Plensa" />
      </div>
    </>
  );
}
