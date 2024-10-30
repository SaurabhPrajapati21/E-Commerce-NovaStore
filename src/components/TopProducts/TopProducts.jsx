import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Shop the latest casual wear collection and redefine your everyday style! ",
    price: "1699",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "Express yourself with our vibrant collection of printed style t-shirts! From bold graphics to subtle patterns",
    price: "1299",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "Upgrade your wardrobe with our chic collection of women’s shirts! From tailored fits to flowy designs.",
    price: "1499",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <h1 data-aos="fade-up" className="text-3xl text-center font-bold">
            Top Rated
          </h1>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id} 
              data-aos="zoom-in"
              className="rounded-2xl bg-white hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                {/* price section */}
                <p className="text-md font-bold mt-2">₹ {data.price}</p>
                <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
