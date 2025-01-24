import React,{ useState, useEffect} from 'react'
import {crew} from '../assets/data/data.js'
import CrewMemberInfo from '../components/CrewMemberInfo.jsx'

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
            alt={filteredMembers.length > 0 ? filteredMembers[0].name : 'crew'}
            className='h-[80vw] w-[90%] max-h-[350px] max-w-80 object-fit mx-auto md:max-h-[400px] md:max-w-[100%]'
            />
          </div>
          <CrewMemberInfo 
            filteredMembers={filteredMembers}  
            crew={crew} 
            clickedMember={clickedMember}
            setClickedMember={setClickedMember}
          />
        </div>
    </div>
  )
}

export default Crew