import { useContext, useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { CartContext } from "../../pages/Cart/Context/CartContext";

export const Header = () => {
    const { cartList } = useContext(CartContext);
    const [cartItemNumber, setCartItemNumber] = useState(cartList.length);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setCartItemNumber(cartList.length);
    }, [cartList]);

    const menuItems = [
        { path: "/", label: "Home" },
        { path: "/products", label: "Products" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" },
        // Add more menu items as needed
    ];

    return (
        <header>
            <nav className="bg-white dark:bg-gray-900">
                <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
                    <Link to="/" className="flex items-center">
                        <img
                            src={Logo}
                            className="mr-3 h-10"
                            alt="ShopMaster Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Shopmaster
                        </span>
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden"
                    >
                        <span className="text-3xl">{isMenuOpen ? '×' : '☰'}</span>
                    </button>
                    <div
                        className={`w-full md:flex md:items-center md:w-auto ${
                            isMenuOpen ? "" : "hidden"
                        }`}
                    >
                        {menuItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                className={({isActive}) => [
                                  "block mt-4 md:inline-block md:mt-0 text-gray-700 dark:text-white mr-4 py-1 hover:text-neutral-950 hover:border-b-2 border-neutral-800",
                                  isActive ? "md:text-neutral-950 md:border-b-2" : "",
                                ].join(" ")}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                        <div className="flex items-center relative mt-4 md:mt-0">
                            <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5">
                                <CiSearch />
                            </span>
                            <Link
                                to="/cartCheckout"
                                className="text-gray-700 dark:text-white mr-5"
                            >
                                <span className="text-2xl relative">
                                    <FaCartArrowDown />
                                    <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">
                                        {cartItemNumber}
                                    </span>
                                </span>
                            </Link>
                            <span className="cursor-pointer text-2xl text-gray-700 dark:text-white">
                                <BsPersonCircle />
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
