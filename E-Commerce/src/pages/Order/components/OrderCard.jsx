import React from "react";

const OrderCard = ({ info }) => {
    return (
        <div className="flex gap-2 items-center py-4 border-b">
            <div className="p-2 bg-neutral-100">
                <img src={info.img} alt={info.name} className="w-10 h-10" />
            </div>

            <div className="flex flex-col text-sm">
                <h4 className="font-bold">{info.name}</h4>
                <p>{info.price}</p>
                <p>Qty: {info.qty}</p>
            </div>
        </div>
    );
};

export default OrderCard;
