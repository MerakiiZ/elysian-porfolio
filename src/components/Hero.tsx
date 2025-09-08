
import '../app/global.css'
import AboutCard from './AboutCard.tsx'

function Hero() {
    return (
        <section className="relative w-full h-[1022px] ">
            <img
        src="/images/Ruby Zayne no wm.webp"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover blur-[5.15px]"
      />

        {/* Overlay Card */}
      <div className="hidden md:flex absolute inset-0 top-200 items-center justify-center z-5">
        <AboutCard />
      </div>

       <div className="flex md:hidden absolute inset-0 items-center justify-center z-5">
        <img
          src="/assets/ABOUT CARD.png"
          alt="About Card"
          className="max-w-[90%] h-auto"
        />
      </div>
    </section>
    )
}
export default Hero;