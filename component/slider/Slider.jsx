"use client";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./style.css";
import { useEffect, useState } from "react";

function BannerSlider() {
  const [slider, setSlider] = useState([]);
  const dataServer = "http://127.0.0.1:8000";

  async function getData() {
    try {
      let res = await fetch("http://127.0.0.1:8000/api/sliders");
      let data = await res.json();
      setSlider(data);
    } catch (err) {
      console.log(err);
    }

    // .then(function (data) {
    //     return data.json();
    // })
    // .then(function (data) {
    //     setSlider(data)
    // })
  }

  useEffect(function () {
    getData();
  }, []);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeftLong />
    </button>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRightLong />
    </button>
  );

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 1000,
    nextArrow: <SlickArrowLeft />,
    prevArrow: <SlickArrowRight />,
  };

  return (
    <section className="banner">
      <Slider className="slick-slider" {...settings}>
        {slider.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="slider-item"
                style={{ backgroundImage: `url(${dataServer}/${item.image})` }}
              >
                <div className="container">
                  <h1>{item.title}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default BannerSlider;
