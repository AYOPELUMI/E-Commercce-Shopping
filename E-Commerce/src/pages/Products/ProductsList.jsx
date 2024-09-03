import axios from 'axios';
import { useQuery } from 'react-query';
import { FilterBar } from './components.js/FilterBar';
import { ProductCard } from './components.js/ProductCard';

export const ProductsList = () => {
  // const baseUrl = 'https://paschal.pythonanywhere.com/api/v1/';
  const baseUrl = "https://api.escuelajs.co/api/v1/products";

  const{isLoading, data} = useQuery("products",()=>{
    return axios.get(baseUrl)
  })
  // useEffect(() => {
  //   axios
  //     .get(`${baseUrl}/products`)
  //     .then((response) => {
  //       setProducts(response.data);
  //       setOriginalProducts(response.data); // Store original products
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  if(isLoading){
    return <h2> Loading</h2>
  }


  return (
    <div className="flex flex-col gap-6 p-10 max-w-[1280px] m-auto">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div id='categories_productList' className='flex justify-center gap-6'>
        <FilterBar  />
        <div
          id="productList"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data.map((product) => (
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