import "../app/global.css";
import TiltCard from "./TiltCard.tsx";

function Card() {
    return(
        <div className="top-1 flex justify-center items-center bg-gray-100">
      <TiltCard
      frame="/assets/card_frame.png"
      text="/assets/CARd TEXT.png"
      portrait="/assets/portrait.png"
      codename="/assets/NameCard.png"
      />
    </div>
    )
}

export default Card;