import React from 'react'
import om from "../images/om-3322437_1280.png"

export const Header = () => {
    return (
        <nav class=" sticky top-0 z-50 w-full border-gray-200 bg-orange-700">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between lg:p-7 p-4">
                <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={om} class="animate-bounce h-10 lg:h-16 lg:mx-23" alt="Flowbite Logo" />
                    <span class="self-center lg:text-2xl text-lg font-semibold whitespace-nowrap text-yellow-200">Shree Varaha Dham</span>
                </a>
                <div class=" justify-between flex md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" class="text-white   rounded-lg lg:text-lg  text-sm lg:py-3 lg:px-6 px-2 py-0 text-center bg-yellow-500">English</button>
                    <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-200 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div class="items-center text-xl justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-orange-700 dark:border-gray-700">
                        <li>
                            <a href="/" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
