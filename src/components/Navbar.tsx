import '../app/global.css';

function Navbar() {
    return (
        <nav className="fixed z-10 top-0 left-0 w-screen h-20 bg-white/70 shadow-[0px_10px_12.899999618530273px_0px_rgba(0,0,0,0.25)] border-b-[5px] border-white backdrop-blur-md overflow-hidden">
            <ul className="flex justify-center items-center gap-9 py-3">
                <li className="text-center justify-start text-stone-700 text-2xl font-normal font-orbit">About</li>
                <li className="text-center justify-start text-stone-700 text-2xl font-normal font-orbit">Gallery</li>
                <li className="text-center justify-start text-red-800 text-5xl font-normal font-audiowide">Ely Sian</li>
                <li className="text-center justify-start text-stone-700 text-2xl font-normal font-orbit">Commissions</li>
                <li className="text-center justify-start text-stone-700 text-2xl font-normal font-orbit">Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;
