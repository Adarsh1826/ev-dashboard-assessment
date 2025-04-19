import { useEffect, useState } from 'react';
const Background = () => {
  const [pos, setPos] = useState({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
  });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  const bg = `
    radial-gradient(circle at ${pos.x}px ${pos.y}px,
      rgba(96,165,250,0.5) 0%,    /* blue-400 @ 50% */
      rgba(96,165,250,0) 70%
    ),
    radial-gradient(circle at ${pos.x}px ${pos.y}px,
      rgba(110,231,183,0.2) 30%,  /* emerald-300 @ 20% */
      rgba(110,231,183,0) 100%
    )
  `;
  return (
    <div
      aria-hidden="true"
      className="
        fixed inset-0 
        -z-10 
        pointer-events-none
        filter blur-2xl 
        transition-all 
        duration-200 
        ease-out
      "
      style={{ backgroundImage: bg }}
    />
  );
};

export default Background;
