import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";
import {numberFormat} from '../../../components/Elements/numberFormat.js'

const CartCheckout = () => {
    const {
        cartList,
        addToCartList,
        removeFromCartList,
        setQuantityToCartItem,
        removeItemFromCartList,
        getCartTotal,
    } = useContext(CartContext);

    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);

    const applyDiscount = () => {
        if (coupon.toLowerCase() === 'acme_five') {
            setDiscount(5);
        } else {
            setDiscount(0);
        }
    }

    return (
        <>
            {cartList.length === 0 ? (
                <EmptyCart />
            ) : (
                <main className="p-10 ">
                    <h1 className="text-3xl font-bold">Cart</h1>
                    <section className="cartDetails gap-12 mt-10 flex justify-between  ">
                        <div className="cartProducts  w-full ">
                            <ul className="header border-b  w-full pb-5 flex gap-10">
                                <li className=" w-full  font-bold">Products</li>
                                <li className=" w-1/3 font-bold ">Price</li>
                                <li className=" text-center w-1/2  font-bold ">
                                    Quantity
                                </li>
                                <li className=" w-1/3 font-bold ">Subtotal</li>
                                <li className=" w-1/4 font-bold "></li>
                            </ul>
                            <div className="flex flex-col-reverse">
                                {cartList.map((item) => (
                                    <ul
                                        className="border-b py-5 flex   items-center gap-10"
                                        key={item.id}
                                    >
                                        <li className="flex  gap-3 items-center  w-full   ">
                                            <img
                                                className="w-12 aspect-square rounded-md"
                                                src={item.image}
                                                alt=""
                                            />
                                            <p>{item.name}</p>
                                        </li>
                                        <li className="w-1/3 ">
                                            ${item.price}
                                        </li>
                                        <li className=" w-1/2 grid place-content-center">
                                            <div className="border flex items-center gap-1 rounded-lg   border-gray-500 p-2  ">
                                                <span
                                                    onClick={() =>
                                                        removeFromCartList(item)
                                                    }
                                                    className="px-2 text-lg cursor-pointer "
                                                >
                                                    -
                                                </span>
                                                <p className="">
                                                    {item.quantity}
                                                </p>

                                                <span
                                                    onClick={() =>
                                                        addToCartList(item)
                                                    }
                                                    className="px-2 text-lg cursor-pointer  "
                                                >
                                                    +
                                                </span>
                                            </div>
                                        </li>

                                        <li className=" w-1/3 ">
                                            ${numberFormat(item.price * item.quantity)}
                                        </li>
                                        <li
                                            className=" w-1/4  cursor-pointer"
                                            onClick={() =>
                                                removeItemFromCartList(item)
                                            }
                                        >
                                            {
                                                <svg
                                                    width="18"
                                                    height="22"
                                                    viewBox="0 0 24 28"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_2212_195)">
                                                        <path
                                                            d="M9.13393 2.76429L8.11607 4.28571H15.8839L14.8661 2.76429C14.7857 2.64643 14.6518 2.57143 14.5071 2.57143H9.4875C9.34286 2.57143 9.20893 2.64107 9.12857 2.76429H9.13393ZM17.0089 1.33929L18.975 4.28571H19.7143H22.2857H22.7143C23.4268 4.28571 24 4.85893 24 5.57143C24 6.28393 23.4268 6.85714 22.7143 6.85714H22.2857V23.1429C22.2857 25.5107 20.3679 27.4286 18 27.4286H6C3.63214 27.4286 1.71429 25.5107 1.71429 23.1429V6.85714H1.28571C0.573214 6.85714 0 6.28393 0 5.57143C0 4.85893 0.573214 4.28571 1.28571 4.28571H1.71429H4.28571H5.025L6.99107 1.33393C7.54821 0.503571 8.48571 0 9.4875 0H14.5071C15.5089 0 16.4464 0.503571 17.0036 1.33393L17.0089 1.33929ZM4.28571 6.85714V23.1429C4.28571 24.0911 5.05179 24.8571 6 24.8571H18C18.9482 24.8571 19.7143 24.0911 19.7143 23.1429V6.85714H4.28571ZM8.57143 10.2857V21.4286C8.57143 21.9 8.18571 22.2857 7.71429 22.2857C7.24286 22.2857 6.85714 21.9 6.85714 21.4286V10.2857C6.85714 9.81429 7.24286 9.42857 7.71429 9.42857C8.18571 9.42857 8.57143 9.81429 8.57143 10.2857ZM12.8571 10.2857V21.4286C12.8571 21.9 12.4714 22.2857 12 22.2857C11.5286 22.2857 11.1429 21.9 11.1429 21.4286V10.2857C11.1429 9.81429 11.5286 9.42857 12 9.42857C12.4714 9.42857 12.8571 9.81429 12.8571 10.2857ZM17.1429 10.2857V21.4286C17.1429 21.9 16.7571 22.2857 16.2857 22.2857C15.8143 22.2857 15.4286 21.9 15.4286 21.4286V10.2857C15.4286 9.81429 15.8143 9.42857 16.2857 9.42857C16.7571 9.42857 17.1429 9.81429 17.1429 10.2857Z"
                                                            fill="#FF0000"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_2212_195">
                                                            <rect
                                                                width="24"
                                                                height="27.4286"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            }
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </div>

                        <div className="border w-1/2 h-fit p-6">
                            <div className="flex justify-between mb-5 font-bold">
                                <h3>Subtotal</h3>
                                <h3> ${getCartTotal()}</h3>
                            </div>
                            <div className="py-4 border-y grid gap-1">
                                <small>Enter Coupon Code</small>
                                <div className="flex items-center ">
                                    <input
                                        className=" border-black border rounded-s-lg p-2.5 outline-0 w-full"
                                        placeholder="e.g FLAT50"
                                        type="text"
                                        value={coupon}
                                        onChange={(e) => setCoupon(e.target.value)}
                                    />
                                    <button onClick={applyDiscount} className="border border-black bg-black text-white py-2.5 px-6 rounded-e-lg">
                                        Apply
                                    </button>
                                </div>

                                <div className="flex justify-between mt-2">
                                    <p>Delivery Charge</p>
                                    <p>$5.00</p>
                                </div>

                                <div className="flex justify-between mt-2">
                                    <p>Discount</p>
                                    <p>{`$${discount ? discount : 0}.00`}</p>
                                </div>
                            </div>

                            <div className="flex justify-between mt-6 font-bold">
                                <h3>Grand Total</h3>
                                <h3>${(getCartTotal() + 5 - discount).toFixed(2)}</h3>
                            </div>

                            <div className="grid mt-6">
                                <Link
                                    to="/checkout"
                                    className="text-white text-center bg-black p-3 rounded-lg"
                                    state={{discount, coupon}}
                                >
                                    Proceed to Checkout
                                </Link>
                                <Link
                                    to="/products"
                                    className="text-black mt-8 text-center bg-white p-3 border border-black rounded-lg"
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>
            )}
        </>
    );
};
export default CartCheckout;
