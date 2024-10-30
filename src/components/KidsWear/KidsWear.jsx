import React from "react";
import Img2 from "../../assets/kids/kid2.jpg";
import Img3 from "../../assets/kids/kid3.jpg";
import Img4 from "../../assets/kids/kid4.jpg";
import Img1 from "../../assets/kids/kid1.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Jeans",
    rating: 5.0,
    price: "₹699",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Full-sleeve",
    rating: 4.5, 
    price: "₹999",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Frocks",
    rating: 4.7,
    price: "₹799",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    price: "₹399",
    aosDelay: "600",
  },

];

const KidsWear = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
       
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Kid's Wear
          </h1>
      
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-1">
            {/* Card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt={`${data.title} image`}
                  onError={(e) => (e.target.src = "path/to/fallback-image.jpg")} 
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-md font-bold">{data.price}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsWear;
