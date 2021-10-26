import { useEffect, useState, useRef, useCallback } from 'react';

function useHover() {
  const [onHover, setOnHover] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = useCallback(() => {
    setOnHover(true);
  }, []);
  const handleMouseOut = useCallback(() => {
    setOnHover(false);
  }, []);

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
  });

  return [ref, onHover];
}

export default useHover;
