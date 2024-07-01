import { Link } from "react-router-dom";
import { LiaGlobeSolid } from "react-icons/lia";
export const PageNotFound = () => {
  return (
    <section className="w-screen h-screen p-24 flex">
      <aside className='pl-20'>
      <LiaGlobeSolid className='w-[600px] h-[600px]'/>
      </aside>
      <aside className='flex-1 pr-32'>
        <h2 className='font-black text-[140px] text-right leading-[o]'>404</h2>
        <h4 className='font-bold text-5xl text-right mb-24'>Page not found</h4>
        
        <div className='flex flex-col items-end'>
        <p className='font-normal text-black text-3xl mr-30 mb-4'>Please navigate to</p>
        <Link className='text-right text-2xl p-4 py-2 hover:px-8 hover:text- underline w-fit' to="/">Home</Link>
        <Link className='text-right text-2xl p-4 py-2 hover:px-8 underline w-fit' to="/products">Products</Link>
        <Link className='text-right text-2xl p-4  py-2 hover:px-8 underline  w-fit' to="/cartCheckout">Cart</Link>
        </div>
      </aside>
    </section>
  );
};
