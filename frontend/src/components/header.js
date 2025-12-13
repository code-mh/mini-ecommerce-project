import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header({cartItems}){

    return <nav className="flex flex-col md:flex-row items-center justify-between px-4 py-4 bg-[#232f3e] w-full">
                <div className="mb-3 md:mb-0">
                    <Link to={"/"}><img className="w-15 h-12" src="/images/logo.png" alt="logo" /></Link>
                </div>

                <div className="w-full md:w-1/2">
                    <Search/>
                </div>

                <div>
                    <Link to={"/cart"} className="text-center mt-4 md:mt-0 flex items-center gap-2">
                        <span id="cart" className="text-white text-base font-medium">Cart</span>
                        <span
                            id="cart_count"
                            className="bg-[#febd69] text-black font-bold text-sm px-2 py-1 rounded"
                        >
                            {cartItems.length}
                        </span>
                    </Link>
                </div>
        </nav>
}