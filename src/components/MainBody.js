import React, { useState } from 'react'
// import varah from './varah.jpg'
import Temple from "../images/temple.jpg"

const MainBody = () => {
    const [lang,setlang]=useState("हिंदी में जाने");
    const langHandler=()=>{
        lang=="हिंदी में जाने"? setlang("Know In English"): setlang("हिंदी में जाने")
    }
    return (
        <section class="bg-white">
            <div class="gap-16 items-center py-2 px-2 mx-auto max-w-screen-2xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class=" mt-4 mb-4">
                    <img class="w-full rounded-lg" src={Temple} alt="office content 1" />
                </div>
                <div class="font-light text-gray-500  sm:text-lg dark:text-gray-400">
                    <h2 class=" mb-4 text-center lg:text-left text-xl mx-2 lg:text-4xl font-bold text-yellow-600 font-serif">Koti Teerth Shree Varaha Ji Dham</h2>
                    <p class="mb-4 font-serif m-4 text-justify lg:text-2xl text-yellow-800 ">
                    In the village Ramgarh of
                    Jaunpur, Uttar Pradesh, this temple is dedicated to Bhagawan 
                    Vishnu's third avatar. People visit to worship and find peace, surrounded 
                    by beautiful carvings and murals telling the stories of Lord Vishnu. 
                    The temple is a cultural treasure, preserving 
                    traditions and connecting the community with its rich heritage.
                    </p>
                    <button onClick={langHandler} type="button" class="shadow-xl shadow-yellow-700 m-4 
                    focus:outline-none text-white bg-yellow-500 
                    hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">{lang}</button>
                </div>
            </div>
        </section>
    )
}

export default MainBody