import React, { useEffect, useState } from "react";
import { API } from "../constants/api";
import { useParams } from "react-router-dom";
import Nav from "../components/Navbar";
import { deals } from "../constants";

const SingleRestaurant = () => {
  const [product, setProduct] = useState([]);
  const [popular, setPopular] = useState([]);
  const { firmId } = useParams();
  const { firmName } = useParams();
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const popularRestaurants = async () => {
    try {
      const response = await fetch(`${API}/firm/getFirm/${firmId}`);
      const newData = await response.json();
      setPopular(newData.firm);
      console.log("This is Api data for single", newData.firm);
    } catch (error) {
      console.log(error);
      /* alert("Failed to fetch data") */
    }
  };

  useEffect(() => {
    popularRestaurants();
  }, []);

  const productHandler = async () => {
    try {
      const response = await fetch(`${API}/product/${firmId}/products`);
      const newData = await response.json();
      setProduct(newData.products);
      console.log(newData.products);
    } catch (error) {
      console.log("Failed to fetch", error);
    }
  };

  useEffect(() => {
    productHandler();
  }, [firmId]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Nav />
      <section className="justify-center flex flex-col sm:w-4/6 w-5/6 my-10">
        <h1 className="text-2xl font-bold font-Montserrat">{firmName}</h1>

        <div className="my-2 mt-6 border border-gray-300 py-4 px-6 rounded-3xl shadow-xl gap-1 flex flex-col font-OpenSans">
          <p className="text-xl font-bold">{popular.offer}</p>
          <p className="text-lg font-semibold capitalize">
            {popular.region && Array.isArray(popular.region)
              ? popular.region.join(", ")
              : ""}
          </p>
          <p className="text-lg font-medium underline text-red-500 capitalize">
            {popular.category && Array.isArray(popular.category)
              ? popular.category.join(", ")
              : ""}
          </p>
          <p className="mb-4 text-gray-500">
            <span className="text-lg font-semibold mr-5 text-black">
              Outlet{" "}
            </span>
            {popular.area}
          </p>
          <hr />
          <p className="font-medium text-gray-500">
            30-40 mins | Free Delivery
          </p>
        </div>
        <div className="">
          <h2 className="my-2 mt-10 font-bold text-xl font-Montserrat">
            Deals for you
          </h2>
          <div className="my-4 grid sm:grid-cols-3 grid-cols-1 gap-2 font-OpenSans">
            <div className="flex gap-4 border border-gray-400 p-4 rounded-3xl">
              <img src={deals} alt="deal" className="w-[50px]" />
              <div>
                <h2 className="font-bold text-lg">35% Off Upto ₹89</h2>
                <p className="uppercase font-medium text-gray-500">
                  use cravoonew
                </p>
              </div>
            </div>
            <div className="flex gap-4 border border-gray-400 p-4 rounded-3xl">
              <img src={deals} alt="deal" className="w-[50px]" />
              <div>
                <h2 className="font-bold text-lg">Flat ₹125 Off</h2>
                <p className="uppercase font-medium text-gray-500">
                  use flatdeal
                </p>
              </div>
            </div>
            <div className="flex gap-4 border border-gray-400 p-4 rounded-3xl">
              <img src={deals} alt="deal" className="w-[50px]" />
              <div>
                <h2 className="font-bold text-lg">Flat 25% Off</h2>
                <p className="uppercase font-medium text-gray-500">
                  use party
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-center font-semibold text-lg text-gray-500 font-Montserrat my-2">
            -- MENU --
          </h2>
          {product.length > 0 ? (
            product.map((item) => (
              <div>
                <div
                  key={item.id}
                  className="flex my-10 justify-between font-OpenSans"
                >
                  <div className="">
                    <p className="text-lg font-bold capitalize">
                      {item.productName}
                    </p>
                    <p className="font-semibold">₹ {item.price}</p>
                    <p className="text-green-600 my-1 font-bold text-sm">
                      &#9733;3.5 <span className="text-gray-500">({Math.floor(Math.random() * 200)})</span>
                    </p>
                    <p className="capitalize mt-3">{item.description}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={`${API}/uploads/${item.image}`}
                      className="w-[170px] h-[130px] rounded-xl"
                      alt="img"
                    />
                    <span
                      onClick={count == 0 ? increment : ""}
                      className="flex gap-2 bg-white text-green-600 border border-gray-300 w-fit px-8 py-1 mt-[-16px] font-semibold rounded-lg hover:bg-gray-200 cursor-pointer"
                    >
                      <button
                        onClick={decrement}
                        className={`${count > 0 ? "block" : "hidden"}`}
                      >
                        -
                      </button>
                      <button className={`${count==0 ? 'block':'hidden'}`}>ADD</button>
                      <span className={`${count > 0 ? "block" : "hidden"}`}>
                        {count}
                      </span>
                      <button
                        onClick={increment}
                        className={`${count > 0 ? "block" : "hidden"}`}
                      >
                        +
                      </button>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            ))
          ) : (
            <p className="text-center my-4 text-red-500 font-bold">
              No products found &#128129;
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default SingleRestaurant;
