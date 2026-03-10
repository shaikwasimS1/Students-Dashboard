import { FaRegCircle } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import navLogo from "../assets/navLogo.svg";

const Navbar = () => {
    return (
        <>

            <nav className="flex flex-col md:flex-row">
                <div className="flex items-center justify-center md:justify-start gap-3 w-full md:w-[20%] border-r md:border-b border-b border-gray-300">
                    <FaRegCircle className="text-[20px] my-3 ms-3" />
                    <h3 className="font-medium text-[100%] sm:text-[14px] lg:text-[100%]">Sri Jayam School</h3>
                </div>

                <div className="flex justify-between items-center w-full md:w-[80%] border-b border-gray-300">
                    <div>
                        <h3 className="font-medium pl-4 md:pl-8">Students Overview</h3>
                    </div>
                    <div className="flex items-center gap-6 pr-4 md:pr-17">
                        <div className="text-2xl">
                            <BiBell />
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={navLogo} alt="Logo" className="w-8 h-8 rounded-full" />
                            <div>
                                <h5 className="text-sm font-medium">Kiran</h5>
                                <span className="text-xs text-gray-500">ad</span>
                            </div>
                        </div>

                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar