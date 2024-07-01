import React, { useState } from "react";
import { hasNoEmptyValue } from "../utils";

const PaymentMethod = ({
    formData,
    handleChange,
    step,
    setStep,
    setIsSubmited,
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const submit = (e) => {
        e.preventDefault();

        setErrorMessage("");
        setIsSubmitting(true);

        if (!hasNoEmptyValue(formData)) {
            setErrorMessage("All fields are required.");
            return;
        }

        setTimeout(() => {
            setIsSubmited(true);
            setIsSubmitting(false);
            setStep(step + 1);
        }, 3000);
    };

    const goBack = (e) => {
        e.preventDefault();

        setStep(step - 1);
    };

    return (
        <div>
            {errorMessage && (
                <p className="bg-red-200 text-red-900 text-sm px-3 py-2 rounded-md">
                    {errorMessage}
                </p>
            )}

            <form className="mt-3">
                <div className="flex flex-col gap-4">
                    <div className="">
                        <label
                            htmlFor="cardName"
                            className="mb-[2px] block text-base font-medium text-neutral-700"
                        >
                            Card Name <small className="text-red-800">*</small>
                        </label>
                        <input
                            type="text"
                            name="cardName"
                            id="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            placeholder="Card Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="">
                            <label
                                htmlFor="cardNumber"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Card Number{" "}
                                <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="text"
                                name="cardNumber"
                                id="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                placeholder="Card Number"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor="expiry"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Expiry <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="text"
                                name="expiry"
                                id="expiry"
                                value={formData.expiry}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="">
                            <label
                                htmlFor="cvv"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                CVV <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="password"
                                name="cvv"
                                id="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                placeholder="CVV"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor="cardPin"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Card Pin <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="password"
                                name="cardPin"
                                id="cardPin"
                                value={formData.cardPin}
                                onChange={handleChange}
                                placeholder="Card Pin"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>
                        

                    </div>
                </div>

                <div className="flex justify-between nav-buttons-container mt-2">
                    <button
                        className="bg-neutral-900 px-4 py-2 text-white rounded-lg mt-4"
                        onClick={goBack}
                    >
                        Previous
                    </button>

                    <button
                        className="bg-neutral-900 px-4 py-2 text-white rounded-lg mt-4"
                        onClick={submit}
                    >
                        {isSubmitting ? "Processing..." : "Continue"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaymentMethod;
