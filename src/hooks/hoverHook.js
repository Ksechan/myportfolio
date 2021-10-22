import { useEffect, useState, useRef } from 'react';

function useHover() {
  const [onHover, setOnHover] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => {
    setOnHover(true);
  };
  const handleMouseOut = () => {
    setOnHover(false);
  };

  useEffect(() => {
    const currentHover = ref.current;

    if (currentHover) {
      currentHover.addEventListener('mouseover', handleMouseOver);
      currentHover.addEventListener('mouseout', handleMouseOut);

      return () => {
        currentHover.removeEventListener('mouseover', handleMouseOver);
        currentHover.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, onHover];
}

export default useHover;
