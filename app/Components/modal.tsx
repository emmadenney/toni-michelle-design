import React from "react";
import Image from "next/image";
import ArrowLeft from "../assets/arrow-left-purple.png";
import ArrowRight from "../assets/arrow-right-purple.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  gallery: { url: string }[];
}

const Modal = ({ isOpen, onClose, gallery }: ModalProps) => {
  if (!isOpen) return null;

  console.log("gallery: ", gallery);

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <Image
        className={`carousel-arrow ${className}`}
        src={ArrowRight}
        alt="Next Arrow"
        width={30}
        height={30}
        onClick={onClick}
      ></Image>
    );
  };
  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <Image
        className={`carousel-arrow ${className}`}
        src={ArrowLeft}
        alt="Previous Arrow"
        width={30}
        height={30}
        onClick={onClick}
      ></Image>
    );
  }

  const settings = {
    dots: gallery.length > 1,
    infinite: gallery.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "slider-inner-div",
    nextArrow: gallery.length > 1 ? <NextArrow /> : undefined,
    prevArrow: gallery.length > 1 ? <PrevArrow /> : undefined,
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <div className="modal-slider-container">
          <Slider {...settings}>
            {gallery.map((image, index) => (
              <div key={index}>
                <img className="modal-slider-thumbnail" src={image.url} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Modal;
