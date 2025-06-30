import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";
import { useAppSelector } from "../../store/hooks";

const navLinks = [
  { id: 1, name: "Product", dropdown: true },
  { id: 2, name: "Team" },
  { id: 3, name: "Enterprise" },
  { id: 4, name: "Explore", dropdown: true },
  { id: 5, name: "Marketplace" },
  { id: 6, name: "Pricing", dropdown: true },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const theme = useAppSelector((state) => state.theme.theme);
  

  return (
    <div className="py-4 mx-auto max-w-7xl w-full px-4 duration-300">
      <div className="flex items-center justify-between">
        <div className="flex gap-[6px] items-center justify-center p-2">
          {theme ==="dark" ?(<img src="./header/logo-dark-theme.svg" alt="DOML Logo" />):(<img src="./header/logo.svg" alt="DOML Logo" />)}
        </div>

        <div className="hidden lg:flex items-center space-x-8 ">
          <nav>
            <ul className="flex items-center space-x-1">
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className="p-2 font-[Actor] text-[16px] flex items-center font-medium hover:text-blue-600 cursor-pointer  dark:hover:text-blue-400"
                >
                  {item.name}
                  {item.dropdown && (
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="bg-[#272F43] dark:bg-gray-700 rounded relative">
              <input
                type="text"
                placeholder="Search DOML"
                className="font-[Actor] text-[#C0C3C9] dark:text-gray-300 py-1.5 px-3.5 rounded bg-transparent outline-none"
              />
              <svg
                className="absolute top-[8px] right-[8px]"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.81982 0.599609H13.4722C15.125 0.599772 16.4644 1.93991 16.4644 3.59277V14.3672C16.4643 16.02 15.125 17.3602 13.4722 17.3604H3.81982C2.16686 17.3604 0.826667 16.0201 0.82666 14.3672V3.59277C0.82666 1.93981 2.16686 0.599609 3.81982 0.599609Z"
                  stroke="#515868"
                  strokeWidth="1.19718"
                />
                <line
                  x1="6.39769"
                  y1="14.3926"
                  x2="9.76477"
                  y2="4.85252"
                  stroke="#7A7D86"
                  strokeWidth="1.19718"
                />
              </svg>
            </div>

            <ThemeToggle />

            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="font-default p-2 font-medium hover:text-blue-600  dark:hover:text-blue-400"
              >
                Sign in
              </a>
              <a
                className="border-gray font-default p-2 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 "
                href="#"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <motion.svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
          >
            <motion.nav
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="pt-4"
            >
              <ul className="space-y-2">
                {navLinks.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <a
                      href="#"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mt-4 px-3"
            >
              <div className="bg-[#272F43] dark:bg-gray-700 rounded relative">
                <input
                  type="text"
                  placeholder="Search DOML"
                  className="w-full font-[Actor] text-[#C0C3C9] dark:text-gray-300 py-2 px-3 rounded bg-transparent outline-none"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mt-4 px-3 pb-4 space-y-2"
            >
              <a
                href="#"
                className="block w-full text-center px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 border border-gray-300 dark:border-gray-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-md transition-all duration-200 hover:scale-105"
              >
                Sign in
              </a>
              <a
                href="#"
                className="block w-full text-center px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-200 hover:scale-105"
              >
                Sign up
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
