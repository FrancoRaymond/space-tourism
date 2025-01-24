import React, { useEffect, useState } from 'react';
import  {destinations}  from '../assets/data/data.js'
import DestinationInfo from '../components/DestinationInfo.jsx';

const Destination = () => {
  const [clickedDestination, setClickedDestination] = useState('Moon');
  const [filteredDestination, setFilteredDestination] = useState([]);

  useEffect(() => {
    setFilteredDestination(destinations.filter((des) => des.name === clickedDestination));
  }, [clickedDestination]);

  return (
    <div className="destinationPage min-h-screen pt-28 lg:pt-44 px-2 sm:px-5 md:px-10 lg:px-24">
      {<section className="pb-10">
        <h1 className="text-xl mx-auto lg:mx-0 space-x-2 text-white">So, you want to travel to</h1>
        <main className="md:flex md:mt-7">
          <img
            className="mt-8 size-3/4 mx-auto max-w-80"
            src={filteredDestination.length > 0 ? filteredDestination[0].images.png : ''}
            alt={filteredDestination.length > 0 ? filteredDestination[0].name : 'Destination'}
          />
          <div className="md:max-w-sm md:relative">
            <ul className="text-white flex justify-evenly mt-8 max-w-sm mx-auto md:mx-0 md:fixed md:mt-0 md:gap-8">
              {destinations.map((destiny) => (
                <span
                  key={destiny.name}
                  onClick={() => setClickedDestination(destiny.name)}
                  className={`cursor-pointer ${destiny.name === clickedDestination ? 'border-b-2 border-white pb-3' : ''}`}
                >
                  {destiny.name}
                </span>
              ))}
            </ul>
            <DestinationInfo filteredDestination={filteredDestination}/>
          </div>
        </main>
      </section>}
    </div>
  );
};

export default Destination;

