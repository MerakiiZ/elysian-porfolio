import { useState } from "react";

export default function AboutCard() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateLimit = 12; // max tilt
    const rY = ((x / width) - 0.5) * (rotateLimit * 2);
    const rX = -((y / height) - 0.5) * (rotateLimit * 2);

    setRotateX(rX);
    setRotateY(rY);
  };

  const resetTilt = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
    <div
      className="relative w-[1273px] h-[703px] cursor-pointer"
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      {/* Background Frame */}
      <img
        src="/assets/card_frame.png"
        className="absolute left-[281px] top-[91px] w-2/3"
        style={{
          transform: `rotateX(${rotateX * 0.3}deg) rotateY(${rotateY * 0.3}deg) translateZ(5px)`,
          transition: "transform 0.15s ease-out",
          transformStyle: "preserve-3d",
        }}
      />

      {/* Text Layer */}
      <img
        src="/assets/CARd TEXT.png"
        className="absolute left-[490px] top-[300px] w-1/2"
        style={{
          transform: `rotateX(${rotateX * 0.6}deg) rotateY(${rotateY * 0.6}deg) translateZ(10px)`,
          transition: "transform 0.15s ease-out",
          transformStyle: "preserve-3d",
        }}
      />

      {/* Portrait */}
      <img
        src="/assets/portrait.png"
        className="absolute left-15 top-13 w-1/3"
        style={{
          transform: `rotateX(${rotateX * 1.1}deg) rotateY(${rotateY * 1.1}deg) translateZ(20px)`,
          transition: "transform 0.15s ease-out",
          transformStyle: "preserve-3d",
        }}
      />

      {/* Banner */}
      <img
        src="/assets/NameCard.png"
        className="absolute left-[650px] top-[180px] w-2/5"
        style={{
          transform: `rotateX(${rotateX * 1.3}deg) rotateY(${rotateY * 1.3}deg) translateZ(5px)`,
          transition: "transform 0.15s ease-out",
          transformStyle: "preserve-3d",
        }}
      />
    </div>
    </div>
  );
}
