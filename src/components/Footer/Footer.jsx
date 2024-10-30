import React from "react";
import footerLogo from "../../assets/women/logo.png";
import Banner from "../../assets/website/footer-img.jpg";
import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Consumer = [
  {
    title: "Cancellation & Returns",
    link: "/#Cancellation & Returns",
  },
  {
    title: "Terms of use",
    link: "/#Terms of use",
  },
  {
    title: "Security",
    link: "/#Security",
  },
  {
    title: "Privacy",
    link: "/#Privacy",
  },
  {
    title: "Sitemap",
    link: "/#Sitemap",
  },
];
const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
  {
    title: "Mail",
    // link: "/#Mail",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white mt-0 min-h-[320px]">
      <div className="container px-4 md:px-10">
        <div
          data-aos="zoom-in"
          className="grid md:grid-cols-3 pb-10 pt-5 sm:pb-20"
        >
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img
                src={footerLogo}
                alt="NovaStore Logo"
                className="max-w-[50px]"
              />
              NovaStore
            </h1>
            <p className="text-sm sm:text-base">
              NovaStore – Bringing quality and convenience to your doorstep.
              Shop with confidence, discover top brands, and enjoy exceptional
              service every time.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-lg font-bold sm:text-left text-justify mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li key={`important-${link.title}`}>
                    <span className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 text-sm sm:text-base">
                      {link.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-lg font-bold sm:text-left text-justify mb-3">
                Consumers Policy
              </h1>
              <ul className="flex flex-col gap-3">
                {Consumer.map((link) => (
                  <li key={`additional-${link.title}`}>
                    <span className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 text-sm sm:text-base">
                      {link.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="py-8 px-4">
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://www.linkedin.com/in/saurabh-prajapati-0a8987271/"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                  target="_blank"
                >
                  <FaLinkedin className="text-2xl sm:text-3xl" />
                </a>
                <a
                  href="https://github.com/SaurabhPrajapati21"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  target="_blank"
                >
                  <FaGithub className="text-2xl sm:text-3xl" />
                </a>

                <a
                  href="https://www.instagram.com/saurabh_daksh738/?hl=en"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <FaInstagram className="text-2xl sm:text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="text-xl sm:text-2xl" />
                  <p className="text-sm sm:text-base">
                    Nagpur, Maharashtra - 441108
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt className="text-xl sm:text-2xl" />
                  <p className="text-sm sm:text-base">+91 9637380920</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <FiMail className="text-xl sm:text-2xl" />
                  <p className="text-sm sm:text-base">
                    saurabhprajapati7378@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="border-t border-gray-600 py-2 text-center text-gray-300 text-sm">
          © 2024 Saurabh Prajapati. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
