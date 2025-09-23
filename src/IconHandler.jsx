import { useCart } from './CartContext';
import { MdDelete } from "react-icons/md";
import { MdDangerous } from "react-icons/md";

export default function IconHandler() {

  const { cart, increment, decrement, removeFromCart } = useCart();

  return (
    <div className="container max-w-3x mx-auto w-full shadow-lg border-1 border-stone-950 z-50 my-6">

      {/* cart heading */}
      <div className="bg-red-600 text-white border-1 border-stone-950 px-4">
        <h2 className="text-2xl font-bold mb-4 text-white text-center py-2">Your Cart</h2>
        {/* <span className="grid"><MdDangerous className="text-3xl"/></span> */}
        <hr className="text-stone-950" />
      </div>


      {/* cart items */}
      <div className="max-h-[70vh] overflow-y-auto">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="p-4 border-b">
              <div className="flex items-center gap-4">
                <img src={item.img} className="w-20 h-20 object-cover rounded" alt={item.name} />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-red-600 font-medium">{item.price}</p>

                  {/* Quantity Controller */}
                  <div className="flex items-center gap-4 mt-2 border border-stone-950 px-4 py-1 w-max">
                    <button onClick={() => decrement(index)} className="text-lg font-bold px-2">-</button>
                    <span className="min-w-[24px] text-center">{item.quantity}</span>
                    <button onClick={() => increment(index)} className="text-lg font-bold px-2">+</button>
                  </div>
                </div>

                {/* Delete Button */}
                <button onClick={() => removeFromCart(index)} className="text-red-600 hover:text-black">
                  <MdDelete className="text-3xl" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-10 text-lg py-8">No items in cart.</p>
        )}
      </div>
    </div>
  );
}