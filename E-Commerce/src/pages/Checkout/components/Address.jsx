import React, { useState } from "react";
import { hasNoEmptyValue } from "../utils";
import { states } from "../data";

const Address = ({ formData, handleChange, step, setStep, setIsSubmited }) => {
    const [errorMessage, setErrorMessage] = useState("");
    const submit = (e) => {
        e.preventDefault();

        setErrorMessage("");

        if (!formData.state && !hasNoEmptyValue(formData)) {
            setErrorMessage("All fields are required.");
            return;
        }

        setIsSubmited(true);
        setStep(step + 1);
    };

    return (
        <div>
            {errorMessage && (
                <p className="bg-red-200 text-red-900 text-sm px-3 py-2 rounded-md">
                    {errorMessage}
                </p>
            )}
            <form className="mt-4">
                <div className="flex flex-col gap-4">
                    <div className="">
                        <label
                            htmlFor="fullName"
                            className="mb-[2px] block text-base font-medium text-neutral-700"
                        >
                            Full Name <small className="text-red-800">*</small>
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="">
                            <label
                                htmlFor="email"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Email{" "}
                                <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor="phoneNumber"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Phone Number{" "}
                                <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="">
                        <label
                            htmlFor="address"
                            className="mb-[2px] block text-base font-medium text-neutral-700"
                        >
                            Address <small className="text-red-800">*</small>
                        </label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="">
                            <label
                                htmlFor="city"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                City <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="City"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor="state"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                State <small className="text-red-800">*</small>
                            </label>
                            <select
                                name="state"
                                id="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-[10px] px-4 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                            >
                                <option value="">--Select an option--</option>
                                {states.map((state, index) => (
                                    <option key={index} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-2">
                    <button
                        className="bg-neutral-900 px-4 py-2 text-white rounded-lg mt-4"
                        onClick={submit}
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Address;
