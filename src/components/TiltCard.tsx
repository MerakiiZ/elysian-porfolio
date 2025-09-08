import { useState } from "react";

interface TiltCardProps {
  frame: string;
  text: string;     
  portrait: string; 
  codename: string; 
}

export default function TiltCard({ frame, text, portrait, codename }: TiltCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateLimit = 10; // subtle
    const rotateY = ((x / width) - 0.5) * (rotateLimit * 2);
    const rotateX = -((y / height) - 0.5) * (rotateLimit * 2);

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const resetTilt = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className="relative w-[320px] md:w-[400px] h-[550px] cursor-pointer"
      style={{
        perspective: "1200px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      <div
        className="relative w-full h-full rounded-2xl shadow-2xl"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {/* Base Frame */}
        <img
          src={frame}
          className="absolute inset-0 w-full h-full object-contain"
          style={{ transform: "translateZ(0px)" }}
        />

        {/* Text Frame */}
        <img
          src={text}
          className="w-80 left-[516px] top-[292px] inset-0 h-full object-contain"
          style={{ transform: "translateZ(20px)" }}
        />

        {/* Portrait Layer */}
        <img
          src={portrait}
          className="absolute inset-0 w-full h-full object-contain"
          style={{ transform: "translateZ(40px)" }}
        />

        {/* Codename Layer */}
        <img
          src={codename}
          className="absolute inset-0 w-full h-full object-contain"
          style={{ transform: "translateZ(60px)" }}
        />

        {/* Extra Glow / Decoration Layer */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.2), transparent 70%)",
            transform: "translateZ(80px)",
            mixBlendMode: "overlay",
          }}
        />
      </div>
    </div>
  );
}
