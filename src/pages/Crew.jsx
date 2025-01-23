import React,{ useState, useEffect} from 'react'
import {crew} from '../assets/data/data.js'

const Crew = () => {
  const [clickedMember, setClickedMember] = useState('Douglas Hurley')
  const [filteredMembers, setFilteredMembers] = useState([])

  useEffect(() => {
    setFilteredMembers(crew.filter((member) => member.name === clickedMember));
  }, [clickedMember]);

  return (
    <div className='crewPage min-h-screen py-28 lg:pt-44 px-2 sm:px-5 md:px-10 lg:px-24'>
       <h1 className='text-xl mx-auto lg:mx-0 space-x-2 text-white'><span className='text-gray-400'>02</span> MEET YOUR CREW</h1>
        <div className='flex flex-col md:flex-row-reverse md:justify-around'>
          <div className='mt-10 md:mt-0'>
            <img 
            src={filteredMembers.length > 0 ? filteredMembers[0].images.png : ''}
            alt={filteredMembers.length > 0 ? filteredMembers[0].name : 'Destination'}
            className='h-[80vw] w-[90%] max-h-[350px] max-w-80 object-fit mx-auto md:max-h-[400px] md:max-w-[100%]'
            />
          </div>
          <div className='flex flex-col md:flex-col-reverse'>
            <div className='flex gap-3 mx-auto mt-10 md:mx-0'>
              {
                crew.map( member => (
                  <div 
                    key={member.name} 
                    onClick={() => setClickedMember(member.name)}
                    className={`size-3 bg-gray-500 rounded-full ${member.name === clickedMember ? 'bg-white size-4' : ''}`}
                  > 
                  </div>          
                ))
              }  
            </div>
            <div className='md:max-w-md'>
              {
                filteredMembers.map(member => (
                  <div key={member.name} className='flex flex-col gap-5 text-center pt-10 md:text-left'>
                    <h1 className='text-gray-400 font-semibold'>{member.role.toUpperCase()}</h1>
                    <h1 className='text-3xl text-white font-semibold'>{member.name.toUpperCase()}</h1>
                    <p className='text-gray-400'>{member.bio}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Crew