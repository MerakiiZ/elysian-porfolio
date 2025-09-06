import '../index.css';

function Navbar() {
    return (
        <div className="h-24 relative bg-white/70 shadow-[0px_10px_12.899999618530273px_0px_rgba(0,0,0,0.25)] border-b-[5px] border-white backdrop-blur-blur overflow-hidden">
    <div className="justify-center">
        <div className="text-center justify-start text-stone-700 text-4xl font-normal font-orbit">About</div>
        <div className="text-center justify-start text-stone-700 text-4xl font-normal font-orbit">Gallery</div>
        <div className="text-center justify-start text-red-800 text-6xl font-normal font-audiowide">Ely Sian</div>
        <div className="text-center justify-start text-stone-700 text-4xl font-normal font-orbit">Portfolio</div>
        <div className="text-center justify-start text-stone-700 text-4xl font-normal font-orbit">Contact</div>
    </div>
</div>
    )
}

export default Navbar;
