import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Social = () => {
    return (
        <div className="flex w-[80vw] mx-[190px] my-6 justify-between">
            <div>
            <h1 className="text-red-600 font-bold text-4xl">Buletin.</h1>
                <p className="text-xl">Craft narratives that ignite inspiration,
                    <br></br> knowledge, and entertainment</p>
            </div>
            <div className="p-6 space-y-2">
                <h3 className="font-semibold text-xl">Visit Our Socials</h3>
                <div className="flex justify-evenly gap-4">
                    <a href="#">
                <RiTwitterXLine className="bg-red-600 h-[30px] w-[30px] text-white rounded-2xl p-1" />
                    </a>
                    <a href="#">
                <FaFacebook className="bg-red-600 h-[30px] w-[30px] text-white rounded-2xl p-1" />
                    </a>
                <a href="#">
                <FaLinkedinIn className="bg-red-600 h-[30px] w-[30px] text-white rounded-2xl p-1" />
                </a>
                <a href="#">
                <FaInstagram className="bg-red-600 h-[30px] w-[30px] text-white rounded-2xl p-1" />
                </a>
                </div>
            </div>
              
        </div>
    )
}
