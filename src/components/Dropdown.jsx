import { useState, useEffect, useRef } from 'react';
import up from '../assets/images/icon-arrow-up.svg';
import down from '../assets/images/icon-arrow-down.svg';


const Dropdown = ({ label, options, pos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if(!divEl.current){
        return;
      }

      if(!divEl.current.contains(event.target)){
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    }

  }, [])

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const renderedOptions = options.map(option => {
    return (
      <div key={option.text} className="flex space-x-2 items-center cursor-poiner">
          <img src={option.icon} className={`${!option.icon && 'hidden'}`} alt='icon' />
          <span className=' hover:text-almost-black'>{option.text}</span>
      </div>
    )
  })

  

  return (
    <div ref={divEl} className="relative">
      <div onClick={handleToggle} className="flex items-center space-x-2 cursor-pointer hover:text-almost-black">
        <span className=''>{label}</span>
        <img src={isOpen ? up : down} alt="dropdown" />
      </div>
      {isOpen &&  (<div className={`md:absolute md:w-[120px] mx-auto space-y-2 md:bg-white  md:top-8 md:${pos} p-3 md:shadow-2xl md:rounded-xl`}>
          {renderedOptions}
      </div>)}
    </div>
  );
};

export default Dropdown;

