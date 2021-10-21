import react, { useEffect, useState } from 'react';

function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  const scrollListener = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return { scrollY };
}

export default useScroll;
