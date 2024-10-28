"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import ArrowLeft from "../assets/arrow-left.png";
import ArrowRight from "../assets/arrow-right.png";
import Slider from "react-slick";

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index}>
            <img
              className="thumbnail"
              src={project.featuredImage.url}
              alt={project.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );

  // const [firstSlideIndex, setFirstSlideIndex] = useState(0);
  // const [secondSlideIndex, setSecondSlideIndex] = useState(1);
  // const [thirdSlideIndex, setThirdSlideIndex] = useState(2);
  // const totalProjects = projects.length;
  // // Go to the previous slide
  // const goToPrevious = () => {
  //   setFirstSlideIndex(
  //     (prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects
  //   );
  //   setSecondSlideIndex(
  //     (prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects
  //   );
  //   setThirdSlideIndex(
  //     (prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects
  //   );
  // };
  // // Go to the next slide
  // const goToNext = () => {
  //   setFirstSlideIndex((prevIndex) => (prevIndex + 1) % totalProjects);
  //   setSecondSlideIndex((prevIndex) => (prevIndex + 1) % totalProjects);
  //   setThirdSlideIndex((prevIndex) => (prevIndex + 1) % totalProjects);
  // };
  // return (
  //   <>
  //     <div className="carousel">
  //       <Image
  //         className="carousel-arrow"
  //         src={ArrowLeft}
  //         alt="Previous Arrow"
  //         width={30}
  //         height={30}
  //         onClick={goToPrevious}
  //       ></Image>
  //       <div className="carousel-image-container">
  //         <Image
  //           src={projects[firstSlideIndex].featuredImage.url}
  //           width={200}
  //           height={350}
  //           alt={projects[firstSlideIndex].title}
  //         ></Image>
  //         {projects[secondSlideIndex] && (
  //           <Image
  //             src={projects[secondSlideIndex].featuredImage.url}
  //             width={200}
  //             height={350}
  //             alt={projects[secondSlideIndex].title}
  //           ></Image>
  //         )}
  //         {projects[thirdSlideIndex] && (
  //           <Image
  //             src={projects[thirdSlideIndex].featuredImage.url}
  //             width={200}
  //             height={350}
  //             alt={projects[thirdSlideIndex].title}
  //           ></Image>
  //         )}
  //       </div>
  //       <Image
  //         className="carousel-arrow"
  //         src={ArrowRight}
  //         alt="Next Arrow"
  //         width={30}
  //         height={30}
  //         onClick={goToNext}
  //       ></Image>
  //     </div>
  //   </>
  // );
  // return (
  //   <div className="image-carousel">
  //     <Swiper
  //       modules={[Navigation]}
  //       slidesPerView={3}
  //       spaceBetween={30}
  //       navigation
  //       loop={true} // Optional: makes the carousel loop infinitely
  //       className="carousel"
  //     >
  //       {projects.map((project, index) => (
  //         <SwiperSlide key={index}>
  //           <img src={project.featuredImage.url} alt={project.title} />
  //         </SwiperSlide>
  //       ))}
  //     </Swiper>
  //   </div>
  // );
};

export default ImageCarousel;
