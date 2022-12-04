import { useEffect, useState } from 'react';

const useDisplay = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    if (window.innerWidth < 1200) return setIsMobile(true);
    setIsMobile(false);
  }, []);

  return !!isMobile;
};

export { useDisplay };
