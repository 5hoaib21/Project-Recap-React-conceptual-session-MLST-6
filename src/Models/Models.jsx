import React, { use } from "react";
import ModelCard from "../components/ModelCard/ModelCard";

const Models = ({ modelPromise, carts, setCarts }) => {
  const models = use(modelPromise);


  



  return (
    <div className="py-20 space-y-10 container mx-auto p-5">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Choose Your AI Model</h2>
        <p>One subscription gives you access to all frontier AI models.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {models.map((model) => (
         <ModelCard 
          key={model.id} 
          model={model}
          carts={carts} 
          setCarts={setCarts}
         />
        ))}

        <div />
      </div>
    </div>
  );
};

export default Models;
