'use client';
import { useEffect } from 'react';
import useScroll from './useScroll';

export default function Scroll({ children, setScrollRef }) {
  const { handleMouseDown, handleMouseUp, scrollRef } = useScroll();

  useEffect(() => {
    setScrollRef(scrollRef);
  }, [scrollRef, setScrollRef]);

  return (
    <>
      <div
        ref={scrollRef}
        className="scroll"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {children}
      </div>
    </>
  );
}
