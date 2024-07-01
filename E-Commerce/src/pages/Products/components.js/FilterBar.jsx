import axios from "axios";
import { useEffect, useState } from "react";

export function FilterBar (props){
  const baseUrl = "https://fakestoreapi.com";
  const [categories, updateCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response  =  await axios.get(`${baseUrl}/products/categories`);
        updateCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return <div className={"hidden w-[40vw] md:block md:w-[50vw]"}>
    <header className="flex justify-between my-6 mt-7 px-4">
      <h1 className="font-extrabold inline">Categories</h1>
    </header>

    {categories.map((category, index) => {
      return (
        <div key={index} className="flex mx-4 my-3 gap-4">
          <input type="checkbox" className="lg:w-8" name={category} id={category} onChange = {(e) => props.checkboxClickedHandler(e)} />
          <h2 className="font-normal text-sm">{category}</h2>
        </div>
      );
    })}
  </div>
}
