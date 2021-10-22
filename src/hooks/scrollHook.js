import react, { useEffect, useState } from 'react';

function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  const scrollListener = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop === 0) {
      setScrollY(0);
      return;
    }

    const windowHeight = scrollHeight - clientHeight;
    const currentPercent = (scrollTop / windowHeight) * 100;

    setScrollY(currentPercent.toFixed(0));
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return { scrollY };
}

export default useScroll;
