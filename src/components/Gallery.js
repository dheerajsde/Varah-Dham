import React from 'react'
import img1 from '../images/temple.jpg'

const Gallery = () => {
    return (
        <div>


            <h1 className="text-yellow-700 text-center text-3xl lg:text-4xl mb-4 font-semibold font font-serif">Gallery</h1>
            <div class="m-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                    <img class="lg:h-[400px] max-w-full rounded-lg" src={img1} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                </div>

            </div>

        </div>
    )
}

export default Gallery