import React, { useEffect, useState } from 'react';

const Destination = () => {
  const [clickedDestination, setClickedDestination] = useState('Moon');
  const [filteredDestination, setFilteredDestination] = useState([]);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('/assets/data/data.json')
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data.destinations);
        setFilteredDestination(data.destinations.filter((des) => des.name === clickedDestination));
      })
      .catch((err) => console.error('Failed to load destinations data:', err));
  }, []);

  useEffect(() => {
    setFilteredDestination(destinations.filter((des) => des.name === clickedDestination));
  }, [clickedDestination, destinations]);

  return (
    <div className="destinationPage min-h-screen pt-28 lg:pt-44 px-2 sm:px-5 md:px-10 lg:px-24">
      <section className="pb-10">
        <h1 className="text-xl mx-auto lg:mx-0 space-x-2 text-white">So, you want to travel to</h1>
        <main className="md:flex md:items-center md:mt-7">
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
          </div>
        </main>
      </section>
    </div>
  );
};

export default Destination;

