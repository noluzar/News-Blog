import { FaRegPenToSquare } from "react-icons/fa6"
import { GoBell } from "react-icons/go";

export const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between px-[200px] pt-11">
                <div className="font-bold text-3xl text-red-600">Buletin.</div>
                <ul className="flex gap-11 font-bold cursor-pointer ">
                    <li className="hover:underline"><a href="#">Stories</a></li>
                    <li className="hover:underline"><a href="#">Creator</a></li>
                    <li className="hover:underline"><a href="#">Community</a></li>
                    <li className="hover:underline"><a href="#">Subscribe</a></li>
                </ul>
                <div className="flex gap-11">
                    <div className="flex gap-2">
                    <FaRegPenToSquare className="h-6"/>
                    <h3 className="hover:underline"><a href="#">Write</a></h3>
                    </div>
                    <a href="#"><GoBell className="h-7" /></a>
                    <h3>icon</h3>
                </div>
            </nav>
        </div>
    )
}
