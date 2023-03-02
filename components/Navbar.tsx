import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useCookies } from "react-cookie";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [cookies] = useCookies(["Token"]);

  // console.log("🚀 ~ file: Navbar.tsx:13 ~ Example ~ cookies", cookies)

  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const token = cookies?.Token;
    setLoggedIn(token ? true : false);
  }, [loggedIn,cookies]);

  return (
    <Disclosure as="nav" className="bg-primary-200 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-700"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-700"
                    href="/about"
                  >
                    About Us
                  </Link>
                  <h1></h1>
                  {/* <a
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                    href="https://github.com/sponsors/gita"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-700"
                  >
                    Donate
                  </a> */}
                </div>
              </div>

              <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <div className="flex text-blue-500 align-baseline">
                    <div className="my-auto">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 4H3C2.46957 4 1.96086 4.21071 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H12C12.5304 17 13.0391 16.7893 13.4142 16.4142C13.7893 16.0391 14 15.5304 14 15V10M7 11L17 1M17 1H12M17 1V6"
                          stroke="#4285F4"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <a
                      target="_blank"
                      rel="noreferrer"
                      referrerPolicy="no-referrer"
                      href="https://bhagavadgita.io/"
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium  hover:border-blue-300 hover:text-blue-700"
                    >
                      BhagavadGita.io
                    </a>
                  </div>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <div className="flex text-green-500 align-baseline">
                    <div className="my-auto">
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.25 1.78861V20.2105C0.250123 20.2505 0.262044 20.2895 0.284267 20.3227C0.30649 20.3559 0.338026 20.3819 0.374921 20.3972C0.411816 20.4126 0.452427 20.4167 0.491661 20.4091C0.530896 20.4015 0.567008 20.3825 0.595469 20.3544L10.1875 11L0.595469 1.64471C0.567008 1.61664 0.530896 1.59761 0.491661 1.58999C0.452427 1.58237 0.411816 1.58651 0.374921 1.60187C0.338026 1.61724 0.30649 1.64316 0.284267 1.67638C0.262044 1.7096 0.250123 1.74864 0.25 1.78861ZM14.2094 7.15627L2.18219 0.530018L2.17469 0.525799C1.9675 0.413299 1.77062 0.693612 1.94031 0.856736L11.3683 9.87174L14.2094 7.15627ZM1.94125 21.1433C1.77062 21.3064 1.9675 21.5867 2.17562 21.4742L2.18312 21.47L14.2094 14.8438L11.3683 12.1274L1.94125 21.1433ZM19.0647 9.82814L15.7061 7.97845L12.5481 11L15.7061 14.0202L19.0647 12.1719C19.9783 11.667 19.9783 10.333 19.0647 9.82814Z"
                          fill="#34A853"
                        />
                      </svg>
                    </div>

                    <a
                      target="_blank"
                      rel="noreferrer"
                      referrerPolicy="no-referrer"
                      href="https://play.google.com/store/apps/details?id=com.gitainitiative.bhagavadgita"
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium  hover:border-green-300 hover:text-green-700"
                    >
                      Bhagavad Gita App
                    </a>
                  </div>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 rounded-xl">
                  <div
                    className={`flex align-baseline ${
                      loggedIn ? "text-green-500" : " text-red-500"
                    } `}
                  >
                    <p className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium ">
                      <span
                        className={`${
                          loggedIn ? "bg-green-100" : "bg-red-100"
                        } text-sm font-medium mr-2 px-2.5 py-0.5 rounded`}
                      >
                        {loggedIn ? "Logged In" : "Log In Required"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}

              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-primary-500 hover:bg-primary-100 py-2 pl-3 pr-4 text-base font-medium text-gray-500"
              >
                Home
              </Disclosure.Button>

              <Disclosure.Button
                as="a"
                href="/about"
                className="block border-l-4 border-primary-500 hover:bg-primary-100 py-2 pl-3 pr-4 text-base font-medium text-gray-500"
              >
                About Us
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://opencollective.com/the-gita-initiative"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Donate
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://bhagavadgita.io/"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                BhagavadGita.io
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://play.google.com/store/apps/details?id=com.gitainitiative.bhagavadgita"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Bhagavad Gita App
              </Disclosure.Button>

              <div className="ml-2">
                <div
                  className={`flex align-baseline ${
                    loggedIn ? "text-green-500" : " text-red-500"
                  } `}
                >
                  <p className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium ">
                    <span
                      className={`${
                        loggedIn ? "bg-green-100" : "bg-red-100"
                      } text-sm font-medium mr-2 px-2.5 py-0.5 rounded`}
                    >
                      {loggedIn ? "Logged In" : "Log In Required"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
