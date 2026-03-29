import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { MdOutlineAutoDelete } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0);
  const handleProceedToCheckout = () => {
    setCarts([]);
    toast.success("Proceeding to checkout!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleDelete = (i) => {
    // filter out the cart and stored in a variable
    const filteredCart = carts.filter((c) => c.id !== i.id);
    setCarts(filteredCart);
    
    toast(`${i.title} removed from cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="container mx-auto p-5 py-20 text-center">
      <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
        Your Cart <FaArrowDown />
      </h1>

      {carts.length === 0 ? (
        <p className="p-20 m-20 bg-zinc-500 items-center text-white font-bold text-2xl rounded-2xl shadow-lg ">
          <FiAlertTriangle className="inline mr-2" />
          Your Cart is Empty
        </p>
      ) : (
        <>
          <div>
            {carts.map((cart) => (
              <div
                className="flex justify-between items-center space-x-5 mt-5 border border-zinc-200 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                key={cart.id}
              >
                <div className="flex items-center space-x-5">
                  <div>
                    <img
                      className="h-20 w-20 object-contain"
                      src={cart.image}
                      alt={cart.title}
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-start">
                      {cart.title}
                    </h2>
                    <p className="text-sm text-zinc-500 text-start">
                      {cart.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-5">
                  <p className="text-lg font-bold">${cart.price}/month</p>
                  <button
                    onClick={() => handleDelete(cart)}
                    className="btn btn-soft btn-error rounded-full text-black hover:text-white"
                  >
                    <MdOutlineAutoDelete size={"20px"} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between bg-black text-white p-5 m-5 rounded-2xl    text-2xl font-bold">
            <div> total: </div>
            <div>$ {totalPrice}/month</div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => handleProceedToCheckout()}
              className="btn w-full m-5 p-5 bg-red-500 text-white text-2xl font-bold rounded-2xl"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
