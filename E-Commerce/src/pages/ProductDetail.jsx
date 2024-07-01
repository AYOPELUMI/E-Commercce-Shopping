import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './Cart/Context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCartList } = useContext(CartContext);
  const [activeTab, setActiveTab] = useState('description');
  const [product, setProduct] = useState({
    id: 0,
    name: '',
    price: 0,
    category: '',
    description: '',
    image: '',
  });
  const baseUrl = 'https://fakestoreapi.com';

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`${baseUrl}/products/${id}`);
      console.log(response.data);
      setProduct(response.data);
    };

    getProduct();
  }, []);

  const handleAddToCart = () => {
    //add to the cart dunction is called
    addToCartList({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      category : product.category
    });
  };

    return (
        <div className="container max-w-[1280px] m-auto p-10">
            <div className="flex flex-col md:flex-row">
                <div className=" p-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-60 h-60 object-contain"
                    />
                </div>
                <div className="flex flex-col gap-5 flex-1 p-4">
                    <h1 className="text-3xl font-bold ">{product.title}</h1>
                    <p className="text-xl text-gray-700  font-bold">
                        ${product.price}
                    </p>
                    <p className="text-gray-700  w-2/3">
                        {`${product.description
                            .slice(0, 1)
                            .toUpperCase()}${product.description.slice(1)}`}
                    </p>
                    <p className="text-gray-600 bg-neutral-100 py-1 px-2 rounded-lg self-start capitalize">{product.category}</p>
                    <div className="">
                        <button onClick={handleAddToCart} className="bg-neutral-900 hover:bg-neutral-800 px-4 py-2 text-white font-bold rounded-lg">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="border-b">
                    <nav className="-mb-px flex">
                        <button
                            className={`mr-1 ${
                                activeTab === "description"
                                    ? "border-neutral-800 text-neutral-800"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            } whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm`}
                            onClick={() => setActiveTab("description")}
                        >
                            Description
                        </button>
                        <button
                            className={`mr-1 ${
                                activeTab === "information"
                                    ? "border-neutral-800 text-neutral-800"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            } whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm`}
                            onClick={() => setActiveTab("information")}
                        >
                            Other Information
                        </button>
                    </nav>
                </div>
                <div className="mt-4">
                    {activeTab === "description" && (
                        <div>
                            {/* <h2 className="text-lg font-semibold mb-2">
                                Product Description
                            </h2> */}
              <p>{`${product.description
                .slice(0, 1)
                .toUpperCase()}${product.description.slice(1)}`}</p>
            </div>
          )}
          {activeTab === 'information' && (
            <div>
              {/* <h2 className="text-lg font-semibold mb-2">
                                Other Information
                            </h2> */}
              <ul>
                <li>
                  Price:{' '}
                  <span className="font-bold">{`$${product.price}`}</span>
                </li>
                <li className="capitalize">
                  Category:{' '}
                  <span className="font-bold">{product.category}</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
