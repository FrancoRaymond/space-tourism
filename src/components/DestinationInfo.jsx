import React from 'react'

const DestinationInfo = ({filteredDestination}) => {
  return (
    <div className="mt-8 md:mt-16">
        {filteredDestination.map((selected) => (
        <div key={selected.name}>
            <div className="flex flex-col gap-6">
            <h1 className="text-white text-5xl font-semibold mx-auto md:mx-0">{selected.name.toUpperCase()}</h1>
            <p className="text-gray-400 text-center md:text-left">{selected.description}</p>
            <div className="flex flex-col md:flex-row gap-7 text-gray-400 pt-4 border-t-2 border-gray-400 text-center md:text-left">
                <div>
                <h2>AVG DISTANCE</h2>
                <h3 className="text-3xl text-gray-300 font-semibold">{selected.distance}</h3>
                </div>
                <div>
                <h2>EST TRAVEL TIME</h2>
                <h3 className="text-3xl text-gray-300 font-semibold">{selected.travel}</h3>
                </div>
            </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default DestinationInfo
