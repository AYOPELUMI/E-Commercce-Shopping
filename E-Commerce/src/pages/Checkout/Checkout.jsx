import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import Address from "./components/Address";
import OrderReview from "./components/OrderReview";
import PaymentMethod from "./components/PaymentMethod";
import CheckoutModal from "./components/CheckoutModal";
import CheckoutSuccess from "./components/CheckoutSuccess";
import CheckoutFailure from "./components/CheckoutFailure";
import { RiHome7Line } from "react-icons/ri";
import { FaRegCreditCard, FaRegRectangleList } from "react-icons/fa6";
import { CartContext } from "../Cart/Context/CartContext";

const Checkout = () => {
    const {state} = useLocation();
    const [step, setStep] = useState(1);
    const {cartList, getCartTotal} = useContext(CartContext);
    const [isAddressSubmited, setIsAddressSubmited] = useState(false);
    const [isPaymentSubmited, setIsPaymentSubmited] = useState(false);
    const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
    const [deliveryCharge, setDeliveryCharge] = useState(5);
    const [discount, setDiscount] = useState(state.discount ?? 0);
    const [coupon, setCoupon] = useState(state.coupon ?? '');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [addressFormData, setAddressFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
    });
    const [paymentFormData, setPaymentFormData] = useState({
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        cardPin: "",
    });

    const applyDiscount = () => {
        if (coupon.toLowerCase() === 'acme_five') {
            setDiscount(5);
        } else {
            setDiscount(0);
        }
    }

    function handlePaymentFormChange(e) {
        const { name, value, type, checked } = e.target;
        const elementValue = type === "checkbox" ? checked : value;

        setPaymentFormData((prev) => ({
            ...prev,
            [name]: elementValue,
        }));
    }

    function handleAddressFormChange(e) {
        const { name, value, type, checked } = e.target;
        const elementValue = type === "checkbox" ? checked : value;

        setAddressFormData((prev) => ({
            ...prev,
            [name]: elementValue,
        }));
    }

    const submit = () => {
        setIsSubmittingOrder(true);
        setTimeout(() => {
            // console.log("Congratulations!");
            openModal();
            setIsSubmittingOrder(false);
        }, 3000);
    };

    const showAddressForm = () => {
        if (isAddressSubmited) {
            setStep(1);
        }
    };

    const showPaymentForm = () => {
        if (isPaymentSubmited) {
            setStep(2);
        }
    };

    const showReview = () => {
        if (isPaymentSubmited) {
            setStep(3);
        }
    };

    return (
        <div className="container p-10 max-w-[1280px] m-auto">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-10">
                <div className="multistep-form-container flex-1">
                    <div className="multistep-form">
                        <div className="step-indicator">
                            <div className="flex items-center">
                                <div className="flex flex-col items-center gap-1">
                                    <div
                                        className={`icon p-2 ${
                                            isAddressSubmited
                                                ? "bg-neutral-700"
                                                : "bg-gray-200"
                                        } rounded-md hover:cursor-pointer`}
                                        onClick={showAddressForm}
                                    >
                                        <RiHome7Line
                                            className={
                                                isAddressSubmited &&
                                                `text-neutral-200`
                                            }
                                        />
                                    </div>
                                    <span className="">Address</span>
                                </div>

                                <div
                                    className={`separator flex-1 h-[2px] ${
                                        isAddressSubmited
                                            ? "bg-neutral-700"
                                            : "bg-neutral-200"
                                    } -mt-6`}
                                ></div>

                                <div className="flex flex-col items-center gap-1">
                                    <div
                                        className={`icon p-2 ${
                                            isPaymentSubmited
                                                ? "bg-neutral-700"
                                                : "bg-gray-200"
                                        } rounded-md hover:cursor-pointer`}
                                        onClick={showPaymentForm}
                                    >
                                        <FaRegCreditCard
                                            className={
                                                isPaymentSubmited &&
                                                `text-neutral-200`
                                            }
                                        />
                                    </div>
                                    <span className="">Payment</span>
                                </div>

                                <div
                                    className={`separator flex-1 h-[2px] ${
                                        isPaymentSubmited
                                            ? "bg-neutral-700"
                                            : "bg-neutral-200"
                                    } -mt-6`}
                                ></div>

                                <div className="flex flex-col items-center gap-1">
                                    <div
                                        className={`icon p-2 ${
                                            isPaymentSubmited
                                                ? "bg-neutral-700"
                                                : "bg-gray-200"
                                        } rounded-md hover:cursor-pointer`}
                                        onClick={showReview}
                                    >
                                        <FaRegRectangleList
                                            className={
                                                isPaymentSubmited &&
                                                `text-neutral-200`
                                            }
                                        />
                                    </div>
                                    <span className="">Review</span>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-medium pt-5 pb-2">
                            {step === 1
                                ? "Shipping Address"
                                : step === 2
                                ? "Payment Method"
                                : "Order Review"}
                        </h2>


                        <div className="body">
                            {step === 1 ? (
                                <Address
                                    formData={addressFormData}
                                    handleChange={handleAddressFormChange}
                                    step={step}
                                    setStep={setStep}
                                    setIsSubmited={setIsAddressSubmited}
                                />
                            ) : step === 2 ? (
                                <PaymentMethod
                                    formData={paymentFormData}
                                    handleChange={handlePaymentFormChange}
                                    step={step}
                                    setStep={setStep}
                                    setIsSubmited={setIsPaymentSubmited}
                                />
                            ) : (
                                <OrderReview
                                    addressInfo={addressFormData}
                                    paymentInfo={paymentFormData}
                                    step={step}
                                    setStep={setStep}
                                    cartList={cartList}
                                />
                            )}
                        </div>

                        {/* <div className="flex justify-between nav-buttons-container">
                            {step > 1 && (
                                <button
                                    className="bg-neutral-900 px-4 py-2 text-white rounded-lg"
                                    onClick={handlePrevious}
                                >
                                    Previous
                                </button>
                            )}

                            {step < 3 && (
                                <button
                                    className="bg-neutral-900 px-4 py-2 text-white rounded-lg"
                                    onClick={handleNext}
                                >
                                    Continue
                                </button>
                            )}
                        </div> */}
                    </div>
                </div>

                <div className="order-summary flex flex-col w-38 gap-4 p-4 border border-gray-200">
                    <div className="flex justify-between pb-2 border-b">
                        <h1 className="font-bold">Subtotal</h1>
                        <h1 className="font-bold">{`$${getCartTotal()}`}</h1>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-xs">Enter Coupon Code</span>
                        <div className="flex">
                            <input
                                type="text"
                                name="discount-code"
                                id="discount-code"
                                className="border p-2 rounded-s-lg"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                            />
                            <button onClick={applyDiscount} className="bg-neutral-900 text-neutral-200  px-6 rounded-e-lg -ml-1">
                                Apply
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <h1 className="">Delivery Charge</h1>
                        <h1 className="">{`$${deliveryCharge}.00`}</h1>
                    </div>

                    <div className="flex justify-between">
                        <h1 className="">Discount</h1>
                        <h1 className="">{`$${discount ? discount : 0}.00`}</h1>
                    </div>

                    <div className="flex justify-between pt-2 border-t">
                        <h1 className="font-bold">Grand Total</h1>
                        <h1 className="font-bold">{`$${(getCartTotal() + deliveryCharge - discount).toFixed(2)}`}</h1>
                    </div>

                    {step === 3 && (
                        <button
                            className="bg-neutral-900 hover:bg-neutral-800 px-4 py-3 text-white font-bold rounded-lg mt-4"
                            onClick={submit}
                        >
                            {isSubmittingOrder
                                ? "Submitting Order..."
                                : "Submit Order"}
                        </button>
                    )}

                    {/* Checkout Modal */}
                    <CheckoutModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        title="Checkout Modal"
                    >
                        <CheckoutSuccess addressData={addressFormData} paymentData={paymentFormData} deliveryCharge={deliveryCharge} discount={discount} />
                        {/* <CheckoutFailure onClose={closeModal} /> */}
                    </CheckoutModal>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
