import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const CheckoutSuccess = ({ addressData, paymentData, deliveryCharge, discount }) => {
    console.log(deliveryCharge, discount)
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center self-center p-1 bg-neutral-100 rounded-full shadow-md h-20 w-20">
                <div className="flex justify-center items-center p-1 bg-neutral-200 rounded-full h-16 w-16">
                    <IoCheckmarkDoneCircle className="text-5xl text-green-700" />
                </div>
            </div>

            <div className="text-center">
                <h3 className="text-lg font-bold mb-2">
                    Your order is confirmed
                </h3>
                <p className="">
                    Thanks for shopping! Your order hasn't shipped yet,
                </p>
                <p className="">
                    but we will send you a message when it's done.
                </p>
            </div>

            <div className="flex flex-col gap-2 mt-1">
                <Link
                    to="/order"
                    state={{addressData, paymentData, deliveryCharge, discount}}
                    className="px-4 py-2 text-center bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-700"
                >
                    View Order
                </Link>

                <Link
                    to="/"
                    className="px-4 py-2 text-center text-neutral-900 rounded-lg border-2 font-medium border-neutral-800 hover:bg-neutral-100"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default CheckoutSuccess;
