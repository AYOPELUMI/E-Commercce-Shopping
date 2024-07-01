
import emptyCart from "../../../assets/emptyCart.png"
import { Link } from "react-router-dom"
const EmptyCart = () => {
  return (
    <main className="grid place-content-center text-center gap-8">
      <img className="mb-4 mx-auto" src={emptyCart} alt="" />
      <h1 className="text-3xl font-bold">Your cart is empty</h1>
      <p className="text-gray-500">Looks like you have not added anything  to your cart.
        <br /> Go ahead and explore our top categories
      </p>
      <Link to="/products">
        <button className="bg-black text-white p-4 rounded-lg w-1/2">Continue Shopping</button>

      </Link>


    </main>
  )
}

export default EmptyCart