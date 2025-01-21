import React from 'react'


const Home = () => {
  return (
    <div className='homePage min-h-screen py-10 px-2 sm:px-5 md:px-10 lg:px-24'>
      <section className=' mt-28 lg:flex lg:justify-around lg:mt-44 w-full'>
        <article className='text-gray-300 flex flex-col lg:gap-1 text-center lg:text-left'>
          <h1 className='text-xl mx-auto lg:mx-0 space-x-2'>So, you want to travel to</h1>
          <h2 className='text-white mx-auto lg:mx-0 text-[6rem] font-md lg:text-[7]'>SPACE</h2>
          <p className='max-w-xs md:max-w-lg md:px-5 mx-auto lg:px-0 lg:max-w-lg lg:pr-24'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back and relax becuase we'll give you a truly out of this world experience.</p>
        </article>
        <div className='bg-white rounded-full size-32 flex items-center mx-auto lg:mx-0 lg:mx mt-10 lg:size-40 lg:mt:auto'>
          <span className='mx-auto font-medium'>EXPLORE</span>
        </div>
      </section>
    </div>
  )
}

export default Home
