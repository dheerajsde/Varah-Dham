import React from 'react'

const HowToReach = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-3xl font-semibold mb-4">How to Reach Us</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis
          tristique, lobortis metus in, congue dolor.
        </p>
        <div className="relative h-0 overflow-hidden max-w-full mb-4 rounded-lg">
          <iframe
            title="Location Map"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.2077475043167!2d-122.08437368468386!3d37.42200397985742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858087a99a06a5%3A0x8bf1e40ad9136785!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1634910085029!5m2!1sen!2sus"
          ></iframe>
        </div>
        <p className="text-gray-600">
          Our office is located at 1234 Street, City, Country.
        </p>
      </div>
    </div>

    </div>
  )
}

export default HowToReach