import React from "react";

const CheckoutModal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
            <div className="bg-white rounded-lg shadow-lg p-6 w-100 z-50">
                <div className="mt-4">{children}</div>
            </div>
        </div>
    );
};

export default CheckoutModal;
