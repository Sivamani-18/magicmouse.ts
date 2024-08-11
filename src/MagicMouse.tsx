'use client'; // For Next.js compatibility if you're using it in a Next.js project
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

interface MagicMouseProps {
  children: React.ReactNode;
  color?: string;
  MagicMouseOff?: boolean;
}

// Outer cursor style
const CursorOuter = styled.div<{ color: string }>`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  border-radius: 50%;
  margin-left: -15px;
  margin-top: -15px;
  width: 30px;
  height: 30px;
  border: 2px solid ${({ color }) => color};
  box-sizing: border-box;
  z-index: 100;
  opacity: 0.5;
  transition: all 0.08s ease-out;
  visibility: hidden;

  &.cursor-hover {
    opacity: 0;
  }
`;

// Inner cursor style
const CursorInner = styled.div<{ color: string }>`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  border-radius: 50%;
  margin-left: -3px;
  margin-top: -3px;
  width: 6px;
  height: 6px;
  z-index: 100;
  background-color: ${({ color }) => color};
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out,
    margin 0.3s ease-in-out, opacity 0.3s ease-in-out;
  visibility: hidden;

  &.cursor-hover {
    margin-left: -40px;
    margin-top: -40px;
    width: 80px;
    height: 80px;
    background-color: ${({ color }) => color};
    opacity: 0.3;
  }
`;

// Wrapper for the magic mouse component
const MagicMouseWrapper = styled.div`
  position: relative;

  &[data-magic-cursor='hide'] .mouse-cursor {
    display: none;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    z-index: -1111;
  }
`;

const MagicMouse: React.FC<MagicMouseProps> = ({
  children,
  color = '#ff451b', // Default color
  MagicMouseOff = true, // Default state is on
}) => {
  const innerCursorRef = useRef<HTMLDivElement>(null);
  const outerCursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (innerCursorRef.current && outerCursorRef.current) {
        innerCursorRef.current.style.left = `${event.clientX}px`;
        innerCursorRef.current.style.top = `${event.clientY}px`;
        outerCursorRef.current.style.left = `${event.clientX}px`;
        outerCursorRef.current.style.top = `${event.clientY}px`;
      }
    };

    const handleMouseEnter = () => {
      if (innerCursorRef.current && outerCursorRef.current) {
        innerCursorRef.current.style.visibility = 'visible';
        outerCursorRef.current.style.visibility = 'visible';
      }
    };

    const handleMouseLeave = () => {
      if (innerCursorRef.current && outerCursorRef.current) {
        innerCursorRef.current.style.visibility = 'hidden';
        outerCursorRef.current.style.visibility = 'hidden';
      }
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        innerCursorRef.current &&
        outerCursorRef.current &&
        (target.closest('button') || target.closest('a'))
      ) {
        innerCursorRef.current.classList.add('cursor-hover');
        outerCursorRef.current.classList.add('cursor-hover');
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        innerCursorRef.current &&
        outerCursorRef.current &&
        (target.closest('button') || target.closest('a'))
      ) {
        innerCursorRef.current.classList.remove('cursor-hover');
        outerCursorRef.current.classList.remove('cursor-hover');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <MagicMouseWrapper data-magic-cursor={`${MagicMouseOff ? 'show' : 'hide'}`}>
      <CursorOuter
        className='mouse-cursor cursor-outer'
        ref={outerCursorRef}
        color={color}
      />
      <CursorInner
        className='mouse-cursor cursor-inner'
        ref={innerCursorRef}
        color={color}
      />
      {children}
    </MagicMouseWrapper>
  );
};

export default MagicMouse;
