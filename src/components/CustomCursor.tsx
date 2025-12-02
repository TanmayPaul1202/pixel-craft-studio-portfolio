import { useEffect, useRef, useCallback } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const isPointer = useRef(false);
  const rafId = useRef<number>();

  const animate = useCallback(() => {
    // Smooth follow for the ring (lerp)
    ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
    ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

    if (dotRef.current) {
      dotRef.current.style.left = `${mousePos.current.x}px`;
      dotRef.current.style.top = `${mousePos.current.y}px`;
    }

    if (ringRef.current) {
      ringRef.current.style.left = `${ringPos.current.x}px`;
      ringRef.current.style.top = `${ringPos.current.y}px`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.closest('[role="button"]') !== null ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (isClickable !== isPointer.current) {
        isPointer.current = isClickable;
        if (dotRef.current) {
          dotRef.current.querySelector('div')?.classList.toggle('scale-[4]', isClickable);
          dotRef.current.querySelector('div')?.classList.toggle('opacity-50', isClickable);
        }
        if (ringRef.current) {
          ringRef.current.querySelector('div')?.classList.toggle('scale-150', isClickable);
          ringRef.current.querySelector('div')?.classList.toggle('opacity-30', isClickable);
        }
      }
    };

    const handleMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    // Start animation loop
    rafId.current = requestAnimationFrame(animate);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [animate]);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference opacity-0"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-3 h-3 rounded-full bg-white transition-transform duration-150 ease-out" />
      </div>
      
      {/* Cursor ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] mix-blend-difference opacity-0"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-8 h-8 rounded-full border-2 border-white transition-transform duration-200 ease-out opacity-50" />
      </div>
    </>
  );
}
