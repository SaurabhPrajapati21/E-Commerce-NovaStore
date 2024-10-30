import React from "react";
import Img1 from "../../assets/electronics/elec1.webp";
import Img2 from "../../assets/electronics/elec2.webp";
import Img3 from "../../assets/electronics/elec3.avif";
import Img4 from "../../assets/electronics/elec4.webp";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Curved Monitor",
    rating: 5.0,
    price: "₹12,999",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Camera",
    rating: 4.5,
    price: "₹49,999",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Tablets",
    rating: 4.7,
    price: "₹8,999",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Mobiles",
    rating: 4.4,
    price: "₹15,999",
    aosDelay: "600",
  },
];

const Electronic = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Electronics
          </h1>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
            {/* Card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="flex flex-col items-center justify-center space-y-3 p-4 bg-white rounded-lg shadow-lg w-[180px]"
              >
                <div className="flex items-center justify-center h-[180px] w-[180px] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={data.img}
                    alt={`${data.title} image`}
                    className="h-full w-full object-cover" 
                    onError={(e) =>
                      (e.target.src = "path/to/fallback-image.jpg")
                    }
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-md">{data.title}</h3>
                  <p className="text-md font-bold mt-2">{data.price}</p>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm">{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-md">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electronic;
