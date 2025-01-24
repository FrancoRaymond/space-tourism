import React,{ useState, useEffect } from 'react'
import { useAppContext } from '../App.jsx'
import { technology } from '../assets/data/data.js'
import TechnologyInfo from '../components/TechnologyInfo.jsx'


const Technology = () => {
  const [clickedTechnology, setClickedTechnology] = useState('Launch vehicle')
  const [filteredTechnologies, setFilteredTechnologies] = useState([])
  const { size } = useAppContext()

  useEffect(() => {
    setFilteredTechnologies(technology.filter((tech) => tech.name === clickedTechnology));
  }, [clickedTechnology]);


  return (
    <div className='technologyPage min-h-screen py-28 lg:pt-44 px-2 sm:px-5 md:px-10 lg:px-24'>
      <h1 className='text-xl mx-auto lg:mx-0 space-x-2 text-white'><span className='text-gray-400'>03</span> SPACE LAUNCH 101</h1>
      <div className='mt-10 md:flex flex-row-reverse md:gap-16 md:items-center'>
        <img 
        src={size < 768 ? filteredTechnologies.map(img => img.images.landscape) : filteredTechnologies.map(img => img.images.portrait)}
        alt={'technology'}
        className='md:w-1/2'
        />
        <TechnologyInfo technology={technology} setClickedTechnology={setClickedTechnology} filteredTechnologies={filteredTechnologies} clickedTechnology={clickedTechnology}/>
      </div>  
    </div>
  )
}

export default Technology
