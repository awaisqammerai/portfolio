import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-screen"
      style={{
        left: `${position.x - 16}px`,
        top: `${position.y - 16}px`,
        background: 'radial-gradient(circle, rgba(57, 255, 20, 0.4) 0%, rgba(57, 255, 20, 0.1) 70%, transparent 100%)',
        boxShadow: '0 0 20px rgba(57, 255, 20, 0.3)',
        transition: 'all 0.1s ease-out',
      }}
    />
  );
}
