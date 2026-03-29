import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Models from "./Models/Models";


// fetching data from public folder using fetch API
const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};
// storing the promise in a variable to pass it as a prop to Models component
const modelPromise = getModels();

function App() {

const [switchTab , setSwitchTab] = useState('models')
const [carts, setCarts] = useState([])



  return (
    <>
      <NavBar />

      <Banner />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center mt-10 bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 "
          aria-label="Models"
          onClick={()=>setSwitchTab('models')}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 "
          aria-label={`Cart (${carts.length})`} 
          onClick={()=>setSwitchTab('cart')}
        />
        
      </div>

      {switchTab === 'models' && <Models 
      modelPromise={modelPromise} 
      carts={carts} 
      setCarts={setCarts} />}
      
      
      {switchTab === 'cart' && <Cart 
      carts={carts}
      setCarts={setCarts}
       />}

      <Footer />
     
    </>
  );
}

export default App;
