import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineError } from "react-icons/md";

const CheckoutFailure = ({ onClose }) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center self-center p-1 bg-red-100 shadow-md rounded-full h-20 w-20">
                <div className="flex justify-center items-center p-1 bg-red-200 rounded-full h-16 w-16">
                    <MdOutlineError className="text-5xl text-red-900" />
                </div>
            </div>

            <div className="text-center">
                <h3 className="text-lg font-bold mb-2">
                    Something went wrong :(
                </h3>
                <p className="">
                    An error occurred while processing your order,
                </p>
                <p className="">
                    please check your internet connection and try again.
                </p>
            </div>

            <div className="flex flex-col gap-2 mt-1">
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-center bg-neutral-900 text-white font-medium rounded-lg border-2 border-neutral-900 hover:bg-neutral-700 hover:border-neutral-700"
                >
                    Retry
                </button>

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

export default CheckoutFailure;
