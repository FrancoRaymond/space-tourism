import React,{useState, useEffect, createContext, useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

const AppContext = createContext()

function App() {
  const [size, setSize] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
            if (window.innerWidth >= 640) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
      return () => {
          document.body.style.overflow = 'auto';
      };
  }, [isMenuOpen]);
 
  return (
    <AppContext.Provider value={{size, setIsMenuOpen, isMenuOpen}}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/crew' element={<Crew/>}/>
        <Route path='/technology' element={<Technology/>}/>
      </Routes>
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
};

export default App