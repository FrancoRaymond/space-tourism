import React,{ useState, useEffect} from 'react'
import { crew } from '../../public/assets/data/data.json'

const Crew = () => {
  const [clickedMember, setClickedMember] = useState('')
  const [filteredMembers, setFilteredMembers] = useState([])

  useEffect(() => {
    setFilteredMembers(crew.filter(des => des.name === clickedMember))
  },[clickedMember])

  return (
    <div className='crewPage min-h-screen'>
       <h1 className='text-xl mx-auto lg:mx-0 space-x-2 text-white'><span className='text-gray-400'>02</span>MEET YOUR CREW</h1>
        <div>
          {
            crew.map( member => (
              <div key={member.name} className={`size-2 bg-gray-500 rounded-full `}>
                 
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Crew
