/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Cart/Context/CartContext.jsx";

export function ProductCard(props) {
    const navigate = useNavigate();
    const { addToCartList } = useContext(CartContext);

    const itemSelectedHandler = () => {
        navigate(`/products/${props.id}`);
    };

    const handleAddToCart = () => {
        //add to the cart dunction is called
        addToCartList({
            id: props.id,
            name: props.name,
            price: props.price,
            description: props.description,
            undiscounted_price: props.undiscounted_price,
            image: props.src,
            category : props.category
        });
    };

    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden border pt-1 pb-3">
            <div onClick={itemSelectedHandler} className="px-4 hover:cursor-pointer">
                <img
                    src={props.src}
                    alt={props.name}
                    className="w-full h-48 object-contain"
                />
                <h2 className="text-lg font-semibold mt-3 mb-2">{props.name}</h2>
            </div>
            <div className="flex flex-col flex-1 px-4">
                <div className="flex-1">
                    <p className="text-gray-600 mb-2 capitalize">{props.category}</p>
                    <p className="text-gray-800 font-bold mb-4">
                        ${props.price}
                    </p>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="w-full mt-auto bg-neutral-900 hover:bg-neutral-800 px-4 py-2 text-white font-bold rounded-lg"
                >
                    Add to Cart
                </button>
            </div>
        </div>
        // <div id="product_card" className="w-50 shadow-lg m-5 pt-0 py-6 rounded cursor-pointer transition duration-300 ease-out
        // hover:scale-105">
        //     <div id="image_container">
        //         <img src={props.src} className={"w-full h-44 rounded"} alt="product_image" />
        //     </div>
        //     <div id="details" className="mx-4 my-4 flex flex-col gap-2">
        //         <h2 className="font-extrabold transition ease-out hover:underline"
        //             onClick={itemSelectedHandler}
        //         >
        //             {props.name}
        //         </h2>

        //         <p className='truncate'>{props.description}</p>
        //         <div className="flex gap-2 w-full justify-between">
        //             <div id="prices" className="flex gap-2">
        //                 <p id="price" className="font-md">${props.price}</p>
        //                 {/* <p id="undiscounted_price" className="font-light text-gray-500 line-through">${props.undiscounted_price}</p> */}
        //             </div>

        //             <div className="bg-blue-200 rounded-md p-1 hover:scale-105" >
        //                 <svg onClick={handleAddToCart} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        //                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3
        //                 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0
        //                     1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        //                 </svg>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
