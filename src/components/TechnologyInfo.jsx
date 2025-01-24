import React from 'react'

const TechnologyInfo = ({technology, setClickedTechnology, filteredTechnologies, clickedTechnology}) => {
  return (
    <div className='flex flex-col mt-5 md:flex-row md:gap-10 items-center'>
        <div className='flex gap-5 mx-auto md:flex-col '>
        {
            technology.map((tech, ind) => (
            <div 
            key={tech.name}
            onClick={() => setClickedTechnology(tech.name)}
            className={`size-7 md:size-14 border cursor-pointer border-gray-400 rounded-full flex items-center justify-center ${tech.name === clickedTechnology ? 'bg-white text-blue-950' : 'text-gray-300'} `}>{ind + 1}</div>
            ))
        }
        </div>
        <div>
        {
        filteredTechnologies.map(tech => (
            <div key={tech.name} className='flex flex-col gap-5 text-center pt-10 md:pt-0 md:text-left'>
            <h1 className='text-gray-400 font-semibold'>THE TECHNOLOGY...</h1>
            <h1 className='text-3xl text-white font-semibold'>{tech.name.toUpperCase()}</h1>
            <p className='text-gray-400 md:max-w-2xl'>{tech.description}</p>
            </div>
        ))
        }
        </div>
    </div> 
  )
}

export default TechnologyInfo
