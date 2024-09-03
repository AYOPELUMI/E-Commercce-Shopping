import axios from 'axios';
import { useQuery } from 'react-query';
import { FilterBar } from './components.js/FilterBar';
import { ProductCard } from './components.js/ProductCard';

export const ProductsList = () => {
  const baseUrl = "https://api.escuelajs.co/api/v1/products";

  const fetchProducts = async () => {
    const { data } = await axios.get(baseUrl);
    console.log({ data }); // Inspect the data structure
    return data;
  };

  const { isLoading, data } = useQuery("products", fetchProducts);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="flex flex-col gap-6 p-10 max-w-[1280px] m-auto">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div id="categories_productList" className="flex justify-center gap-6">
        <FilterBar />
        <div
          id="productList"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data.map((product) => (
            <ProductCard
              name={product.title}
              price={product.price}
              description={product.description}
              category={product.category?.name} // Handle cases where category might be an object
              src={Array.isArray(product.images) ? product.images[0] : product.images} // Access the first image if it's an array
              id={product.id}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
