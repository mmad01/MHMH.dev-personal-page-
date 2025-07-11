import type { Navclick } from "../../types";
import { useEffect } from "react";
import { Dropdown } from "flowbite";

function Navbar({
  onServicesClick,
  onPortfolioClick,
  onContactUsClick,
  onMainClick,
  onAboutUsClick,
}: Navclick) {
  useEffect(() => {
    const $targetEl = document.getElementById("menuDropdown");
    const $triggerEl = document.getElementById("menuButton");

    if ($targetEl && $triggerEl) {
      new Dropdown($targetEl, $triggerEl);
    }
  }, []);
  return (
    <div>
      <div className="sm:hidden fixed right-3 top-3 text-end">
        <div className="relative">
          <button
            id="menuButton"
            data-dropdown-toggle="menuDropdown"
            className="inline-flex items-center px-4 py-2 text-sm font-[Yekan-Fat] text-white  bg-gradient-to-r from-[#4f349f] via-[#030e21] to-[#18416b] rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            type="button"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            منو
          </button>

          {/* Dropdown */}
          <div
            id="menuDropdown"
            className="z-10 hidden  bg-gradient-to-r from-[#4f349f] via-[#030e21] to-[#18416b] text-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute mt-2 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-white font-[Yekan-Fat] dark:text-gray-200"
              aria-labelledby="menuButton"
            >
              <li>
                <a
                  onClick={onMainClick}
                  className="block px-4 py-2 active:bg-gray-600 active:text-white active:text-xl transition-all duration-75 dark:hover:bg-gray-600"
                >
                  محمدمهدی
                </a>
              </li>
              <li>
                <a
                  onClick={onServicesClick}
                  className="block px-4 py-2 active:bg-gray-600 active:text-white active:text-xl transition-all duration-75 dark:hover:bg-gray-600"
                >
                  خدمات
                </a>
              </li>
              <li>
                <a
                  onClick={onPortfolioClick}
                  className="block px-4 py-2 active:bg-gray-600 active:text-white active:text-xl transition-all duration-75 dark:hover:bg-gray-600"
                >
                  نمونه‌کارها
                </a>
              </li>
              <li>
                <a
                  onClick={onContactUsClick}
                  className="block px-4 py-2 active:bg-gray-600 active:text-white active:text-xl transition-all duration-75 dark:hover:bg-gray-600"
                >
                  ارتباط
                </a>
              </li>
              <li>
                <a
                  onClick={onAboutUsClick}
                  className="block px-4 py-2 active:bg-gray-600 active:text-white active:text-xl transition-all duration-75 dark:hover:bg-gray-600"
                >
                  درباره
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" h-[90px] sm:h-[128px] hidden fixed sm:flex flex-col justify-center items-center w-full bg-gradient-to-r from-[#4f349f] via-[#030e21] to-[#18416b] mt-5">
        <div className="h-[48px] w-10/12 flex items-center justify-between relative right-5 sm:right-0">
          <div className="w-[500px] flex flex-row-reverse justify-between text-[#FFFFFF] font-[Yekan-Bold]">
            <button
              onClick={onServicesClick}
              className="px-4 py-2 border-2 border-[#8a2be2] rounded-md text-[8px] sm:text-[16px] md:text-[20px] font-[Yekan-Bold] hover:font-[Yekan-Fat] hover:bg-[#8a2be2] hover:text-black cursor-pointer transition-all duration-300 active:scale-110 "
            >
              خدمات
            </button>
            <button
              onClick={onPortfolioClick}
              className="px-4 py-2 border-2 border-[#8a2be2] rounded-md text-[8px] sm:text-[16px] md:text-[20px] font-[Yekan-Bold] hover:font-[Yekan-Fat] hover:bg-[#8a2be2] hover:text-black cursor-pointer transition-all duration-300 active:scale-110 "
            >
              نمونه‌کار‌‌‌‌ها
            </button>
            <button
              onClick={onContactUsClick}
              className="px-4 py-2 border-2 border-[#8a2be2] rounded-md text-[8px] sm:text-[16px] md:text-[20px] font-[Yekan-Bold] hover:font-[Yekan-Fat] hover:bg-[#8a2be2] hover:text-black cursor-pointer transition-all duration-300 active:scale-110 "
            >
              ارتباط
            </button>
            <button
              onClick={onAboutUsClick}
              className="px-4 py-2 border-2 border-[#8a2be2] rounded-md text-[8px] sm:text-[16px] md:text-[20px] font-[Yekan-Bold] hover:font-[Yekan-Fat] hover:bg-[#8a2be2] hover:text-black cursor-pointer transition-all duration-300 active:scale-110 "
            >
              درباره
            </button>
          </div>
          <div className="flex items-center">
            <button className="font-[Yekan-Bold] text-3xl text-[#8a2be2] mr-1">
              *
            </button>
            <button
              onClick={onMainClick}
              className="px-4 py-2 border-2 border-[#8a2be2] rounded-md font-[Yekan-Fat] text-sm sm:text-2xl text-white hover:bg-[#8a2be2] hover:text-black cursor-pointer transition-all duration-300 active:scale-110"
            >
              محمدمِهدی
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
