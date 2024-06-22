import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/store.png";
import Image2 from "../../assets/hero/femaledoctor.png";
import Image3 from "../../assets/hero/doctor.png";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Easy Access to Essential Medications",
    description:
      "We make it simple for you to find and purchase the medications you need. With our user-friendly platform and extensive selection, getting essential healthcare products has never been easier.",
  },
  {
    id: 2,
    img: Image2,
    title: "Affordable Healthcare Solutions for Everyone",
    description:
      "We believe everyone deserves access to affordable healthcare. That's why we offer competitive prices on a wide range of medications and healthcare products, ensuring accessibility for all.",
  },
  {
    id: 3,
    img: Image3,
    title: "Your Health, Your Priority",
    description:
      "Take control of your health with our convenient services. From online consultations to doorstep delivery, we prioritize your well-being and make healthcare accessible whenever and wherever you need it.",
  },
];
const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    height: 100,
  };

  return (
    <div>
      <div className=" relative overflow-hidden min-h-[750px] sm:min-h-[550px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {/* background shape */}
        <div className="h-[500px] w-[1100px] bg-primary/40 absolute -right-1/4   rounded-3xl rotate-45 -z-9"></div>
        {/* Hero section */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings} className="relative ">
            {ImageList.map((items) => (
              <>
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                        {items.title}
                      </h1>
                      <p className="text-sm">{items.description}</p>
                      <div>
                        <button className=" text-white bg-primary px-5 py-2 mt-10  hover:bg-primary/70 rounded-sm">
                          Contact doctor
                        </button>
                      </div>
                    </div>
                    <div className="order-1 sm:order-2 ">
                      <div className="relative z-10">
                        <img
                          src={items.img}
                          alt=""
                          className="w-[400px] h-[400px] sm:h-[450px]  sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
