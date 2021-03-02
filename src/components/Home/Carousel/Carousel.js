import React from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="container-bg">
      <div className="text-center container ">
        <div>
          <h1 className="text-white text-center p-5">
            Here are some of our work
          </h1>
        </div>
        <div className="row container-fluid slider-img">
          <div className="col-md-4 col-md-6 col-12 col-lg-12">
            <Slider {...settings}>
              <div>
                <img
                  src="https://i.ibb.co/FYfQj80/carousel-1.png"
                  className="img-fluid  mt-3"
                  alt="..."
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/NCXyJ1G/carousel-2.png"
                  className="img-fluid mt-3"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/WG7hnq1/carousel-3.png"
                  className="img-fluid mt-3"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/GW90bwg/carousel-4.png"
                  className="img-fluid  mt-3"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/CvgztGt/carousel-5.png"
                  className="img-fluid mt-3"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Carousel;
