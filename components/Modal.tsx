import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

export default function Modal({ isOpen, setIsOpen, lang }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden bg-white p-10 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="prose-2xl text-center pb-6">
                  Do you already have an installation code?
                </Dialog.Title>
                <div className="mt-4">
                  <a
                    download
                    href={`/manual-${lang}.pdf`}
                    className="inline-block mb-4 py-8 text-xl text-center w-full rounded-lg text-white bg-gray-700 hover:bg-green-500 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    Yes, I&apos;m ready to download &amp; install!
                  </a>
                  <Link href={`/flashcards/purchase?lang=${lang}`}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className="inline-block mb-4 py-8 text-xl text-center w-full rounded-lg text-white bg-gray-700 hover:bg-green-500 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                    >
                      No, I need to purchase a license.
                    </a>
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
