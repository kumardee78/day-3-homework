export default function Header(){
    return(
        <>
            <header>
                <h1 className="text-4xl py-2 px-10 text-pink-700 font-medium">Family Wellness</h1>
                <p className="text-base px-10 text-pink-700 font-medium">MESSAGE THERAPY</p>
                <nav className="pt-8 pb-4">
                    <ul className="flex text-[white] font-semibold bg-pink-400 py-4">
                        <li><a href="" className="bg-pink-900 py-4 px-24">HOME</a></li>
                        <li><a href="" className="py-4 bg-pink-400 px-24">ABOUT</a></li>
                        <li><a href="" className="py-4 bg-pink-400 px-24">SERVICE</a></li>
                        <li><a href="" className="py-4 bg-pink-400 px-24">FAQ</a></li>
                        <li><a href="" className="py-4 bg-pink-400 px-24">CONTACT</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}