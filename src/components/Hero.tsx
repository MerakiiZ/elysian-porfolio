
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
      <div className="absolute inset-0 top-200 flex items-center justify-center z-5">
        <AboutCard />
      </div>
    </section>
    )
}
export default Hero;