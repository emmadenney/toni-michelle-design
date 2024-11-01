"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import ArrowLeft from "../assets/arrow-left.png";
import ArrowRight from "../assets/arrow-right.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Project {
  title: string;
  slug: string;
  description: string;
  featuredImage: { url: string };
  gallery: { url: string }[];
  sys: { id: string };
}

interface CarouselProps {
  projects: Project[];
}

const ImageCarousel = ({ projects }: CarouselProps) => {
  // Custom Next Arrow
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "slider-inner-div",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index}>
            <img
              className="slider-thumbnail"
              src={project.featuredImage.url}
              alt={project.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
