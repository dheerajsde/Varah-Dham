import React from 'react'
import logo from "../images/om-3322437_1280.png"

const Footer = () => {
  return (
   

<footer class="bg-white shadow dark:bg-orange-700">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap text-yellow-200">Shree Varaha Dham</span>
            </a>
            {/* <ul class="flex flex-wrap items-center mb-6 text-sm m-2 font-medium text-yellow-500 sm:mb-0 ">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul> */}
        </div>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-yellow-500">© 2024 <a href="https://flowbite.com/" class="hover:underline">Shree Varaha Dham ™</a>.  All Rights Reserved.</span>
        {/* <hr class="my-6 border-gray-200 sm:mx-auto dark:border-red-400 lg:my-8" /> */}
    </div>
</footer>
  )
}

export default Footer