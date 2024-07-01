import axios from 'axios';
import { useEffect, useState } from 'react';
import { FilterBar } from './components.js/FilterBar';
import { ProductCard } from './components.js/ProductCard';

export const ProductsList = () => {
  // const baseUrl = 'https://paschal.pythonanywhere.com/api/v1/';
  const baseUrl = "https://fakestoreapi.com";
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/products`)
      .then((response) => {
        setProducts(response.data);
        setOriginalProducts(response.data); // Store original products
      })
      .catch((error) => console.log(error));
  }, []);

  const fetchDataBasedOnCategory = async (categories) => {
    if (categories.length === 0) {
      setProducts(originalProducts); // Restore original products if no category is selected
      return;
    }

    try {
      const categoryPromises = categories.map(category =>
        axios.get(`${baseUrl}/products/category/${category}`)
      );
      const categoryResponses = await Promise.all(categoryPromises);
      const combinedProducts = categoryResponses.flatMap(response => response.data);
      setProducts(combinedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckboxChange = (category) => {
    setSelectedCategories(prevSelectedCategories => {
      const newSelectedCategories = prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter(c => c !== category)
        : [...prevSelectedCategories, category];
      
      fetchDataBasedOnCategory(newSelectedCategories);
      return newSelectedCategories;
    });
  };

  return (
    <div className="flex flex-col gap-6 p-10 max-w-[1280px] m-auto">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div id='categories_productList' className='flex justify-center gap-6'>
        <FilterBar checkboxClickedHandler={(e) => handleCheckboxChange(e.target.name)} />
        <div
          id="productList"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <ProductCard
              name={product.title} 
              price={product.price}
              description={product.description}
              category={product.category}
              src={product.image}
              id={product.id}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};