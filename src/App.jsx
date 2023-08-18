import { useState, useEffect } from 'react';
import Header  from './components/Header'
import MainPage from './components/MainPage'
import './App.css'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); 

  useEffect(() => {
    // Add a resize event listener to update the layout when the screen size changes
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-almost-white font-epilogue'>
      <Header isMobile={isMobile} />
      <MainPage isMobile={isMobile} />
    </div>
  )
}

export default App
