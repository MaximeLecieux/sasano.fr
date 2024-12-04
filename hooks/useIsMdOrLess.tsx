import { useState, useEffect } from 'react';

const useIsMdOrLess = () => {
  const [isMdOrLarger, setisIsMdOrLess] = useState(() => window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
        setisIsMdOrLess(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMdOrLarger;
};

export default useIsMdOrLess;


