import React from 'react'

const CrewMemberInfo = ({filteredMembers, crew, clickedMember, setClickedMember}) => {
  return (
    <div className='flex flex-col md:flex-col-reverse'>
        <div className='flex gap-3 mx-auto mt-10 md:mx-0 items-center'>
            {
            crew.map( member => (
                <div 
                key={member.name} 
                onClick={() => setClickedMember(member.name)}
                className={`size-3 bg-gray-500 rounded-full cursor-pointer ${member.name === clickedMember ? 'bg-white size-4' : ''}`}
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
  )
}

export default CrewMemberInfo
