import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OrderCard from "./components/OrderCard";
// import { orders } from "./data";
import { CartContext } from "../Cart/Context/CartContext";

const OrderPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { cartList, getCartTotal, clearCartList } = useContext(CartContext);

    const { addressData, paymentData, deliveryCharge, discount } = state;

    const continueShoppingHandler = (e) => {
        e.preventDefault();

        clearCartList();
        localStorage.removeItem('cartList');
        navigate('/');
    };

    return (
        <div className="flex flex-col gap-4 p-6 m-auto max-w-[1280px]">
            <h1 className="text-2xl font-bold">Your Order</h1>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex flex-1 flex-col gap-2 rounded-xl shadow-sm border">
                    <h3 className="px-5 py-2 font-semibold rounded-t-xl text-neutral-800 bg-neutral-50 mb-2">
                        Order Info
                    </h3>

                    <div className="flex flex-1 flex-col gap-2 px-5 py-2">
                        <div className="flex justify-between ">
                            <p className="font-semibold text-neutral-600">
                                Reference:
                            </p>
                            <p className="text-right">12er-etua-9ujk-zxkl</p>
                        </div>

                        <div className="flex justify-between ">
                            <p className="font-semibold text-neutral-600">
                                Order Date:
                            </p>
                            <p className="text-right">
                                {new Date().toLocaleDateString()}
                            </p>
                        </div>

                        <div className="flex justify-between  items-end">
                            <p className="font-semibold text-neutral-600">
                                Delivery Status:
                            </p>
                            <p className="px-4 py-1 text-xs w-28 text-center rounded-md bg-orange-200 text-orange-500 font-bold">
                                In Progress
                            </p>
                        </div>

                        <div className="flex justify-between  items-end">
                            <p className="font-semibold text-neutral-600">
                                Payment Status:
                            </p>
                            <p className="px-4 py-1 text-xs w-28 text-center rounded-md font-bold bg-green-200 text-green-600">
                                Paid
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 flex-col gap-2 rounded-xl shadow-sm border">
                    <h3 className="px-5 py-2 font-semibold rounded-t-xl text-neutral-800 bg-neutral-50 mb-2">
                        Customer Info
                    </h3>

                    <div className="flex flex-1 flex-col gap-2 px-5 py-2">
                        <div className="flex justify-between ">
                            <p className="font-semibold text-neutral-600">
                                Name:
                            </p>
                            <p className="text-right">{addressData.fullName}</p>
                        </div>

                        <div className="flex justify-between ">
                            <p className="font-semibold text-neutral-600">
                                Email:
                            </p>
                            <p className="text-right">
                                {addressData.email}
                            </p>
                        </div>

                        <div className="flex justify-between ">
                            <p className="font-semibold text-neutral-600">
                                Phone:
                            </p>
                            <p className="text-right">
                                {addressData.phoneNumber}
                            </p>
                        </div>

                        <div className="flex justify-between ">
                            <p className="font-semibold text-neutral-600">
                                Address:
                            </p>
                            <p className="text-right">
                                {`${addressData.address}, ${addressData.city}, ${addressData.state} State.`}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 flex-col gap-2 rounded-xl shadow-sm border">
                    <h3 className="px-5 py-2 font-semibold rounded-t-xl text-neutral-800 bg-neutral-50 mb-2">
                        Contact Us
                    </h3>

                    <div className="flex flex-1 flex-col gap-2 px-5 py-2">
                        <div className="flex justify-between ">
                            <p className="font-semibold text-neutral-600">
                                Company:
                            </p>
                            <p className="text-right">Shop Master</p>
                        </div>

                        <div className="flex justify-between ">
                            <p className="font-semibold text-neutral-600">
                                Email:
                            </p>
                            <p className="text-right">support@shopmaster.com</p>
                        </div>

                        <div className="flex justify-between ">
                            <p className="font-semibold text-neutral-600">
                                Phone:
                            </p>
                            <p className="text-right">{"+2348001010101"}</p>
                        </div>

                        <div className="flex justify-between ">
                            <p className="font-semibold text-neutral-600">
                                Address:
                            </p>
                            <p className="text-right">
                                {
                                    "89A, Villa Park Crescent, Opposite Banex Plaza, Abuja."
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-auto border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th
                                scope="col"
                                className="py-3  font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            ></th>
                            <th
                                scope="col"
                                className="py-3  font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                                Product Name
                            </th>

                            <th
                                scope="col"
                                className="py-3  font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                                Quantity
                            </th>

                            <th
                                scope="col"
                                className="py-3  font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                                Price
                            </th>

                            <th
                                scope="col"
                                className="py-3  font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                                Amount
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {cartList.map((order) => (
                            <tr key={order.id}>
                                <td className="p-2  font-medium whitespace-nowrap">
                                    <img
                                        src={order.image}
                                        alt={order.name}
                                        className="w-10 h-10"
                                    />
                                </td>
                                <td className="py-2  font-medium whitespace-nowrap">
                                    {order.name}
                                </td>
                                <td className="py-2  font-medium whitespace-nowrap">
                                    {order.quantity}
                                </td>
                                <td className="py-2  font-medium whitespace-nowrap">{`$${order.price}`}</td>
                                <td className="py-2  font-medium whitespace-nowrap">{`$${
                                    order.price * order.quantity
                                }`}</td>
                            </tr>
                        ))}

                        <tr>
                            <td className=""></td>
                            <td className=""></td>
                            <td className="py-3  font-bold whitespace-nowrap">
                                Delivery Charge
                            </td>
                            <td className=""></td>
                            <td className="py-3  font-bold whitespace-nowrap">{`$${deliveryCharge}.00`}</td>
                        </tr>
                        <tr>
                            <td className=""></td>
                            <td className=""></td>
                            <td className="py-3  font-bold whitespace-nowrap">
                                Discount
                            </td>
                            <td className=""></td>
                            <td className="py-3  font-bold whitespace-nowrap">{`$${discount}.00`}</td>
                        </tr>
                        <tr>
                            <td className=""></td>
                            <td className=""></td>
                            <td className="py-3  font-bold whitespace-nowrap">
                                Grand Total
                            </td>
                            <td className=""></td>
                            <td className="py-3  font-bold whitespace-nowrap">{`$${
                                getCartTotal() + deliveryCharge - discount
                            }`}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex justify-end">
                <button
                    className="bg-neutral-900 hover:bg-neutral-800 px-4 py-3 text-white font-bold rounded-lg mt-4"
                    onClick={continueShoppingHandler}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default OrderPage;
