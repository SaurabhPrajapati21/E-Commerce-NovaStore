import React from "react";
import Img1 from "../../assets/women/men1.jpg";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/men2.jpg";
import Img5 from "../../assets/women/bag.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Men Ethnic",
    rating: 5.0,
    price: "₹1999",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    price: "₹2499",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    price: "₹999",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Plane T-Shirt",
    rating: 4.4,
    price: "₹1599",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Hand Bags",
    rating: 4.5,
    price: "₹1299",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h3 data-aos="fade-up" className="text-3xl mb-12">
            Top Selling items for you
          </h3>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
        
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
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

export default Products;
