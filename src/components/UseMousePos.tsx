import {useEffect, useState} from 'react';

interface MousePosition {
    x: number | null;
    y: number | null;
  }


const UseMousePos = () => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);
  return (
    mousePosition
  )
}

export default UseMousePos