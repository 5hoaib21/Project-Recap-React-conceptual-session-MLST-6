import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({ model, carts, setCarts  }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubscribe = () => {
    setIsSubscribed(true)

    const isFound = carts.find(c => c.id === model.id);
    if(isFound){
      toast.error(`Already subscribed to ${model.title}!`)
      return;
    }



    setCarts([...carts, model])
    toast.success(`Subscribed to ${model.title} successfully!`, {
      position: "top-right",
      autoClose: 3000
    });
  }

  return (
     <div className=" shadow-lg rounded-xl p-5 border border-zinc-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="">
              <div className="flex justify-center h-56 bg-zinc-200 rounded-2xl">
                <img
                  className="h-40 w-40 mt-8 object-contain"
                  src={model.image}
                  alt={model.title}
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-bold">{model.title}</h3>
                <p className="mt-5">{model.description}</p>
                <div>
                  <p className="mt-5 text-2xl font-bold">
                    ${model.price}/month
                  </p>
                </div>
                <button onClick={()=>handleSubscribe()} className="btn w-full bg-red-500 text-white rounded-lg mt-5">
                  {isSubscribed ? 'Subscribed' : 'Subscribe Now'}
                </button>
              </div>
            </div>
          </div>
  );
};

export default ModelCard;