"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

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
  const [firstSlideIndex, setFirstSlideIndex] = useState(0);
  const [secondSlideIndex, setSecondSlideIndex] = useState(1);
  const [thirdSlideIndex, setThirdSlideIndex] = useState(2);

  // Go to the previous slide
  const goToPrevious = () => {
    if (projects[firstSlideIndex - 1]) {
      setThirdSlideIndex((prevIndex) => prevIndex - 1);
      setSecondSlideIndex((prevIndex) => prevIndex - 1);
      setFirstSlideIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Go to the next slide
  const goToNext = () => {
    if (projects[thirdSlideIndex + 1]) {
      setThirdSlideIndex((prevIndex) => prevIndex + 1);
      setSecondSlideIndex((prevIndex) => prevIndex + 1);
      setFirstSlideIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <div className="carousel">
        <button className="carousel-control prev" onClick={goToPrevious}>
          &#10094;
        </button>
        <div className="carousel-image-container">
          <Image
            src={projects[firstSlideIndex].featuredImage.url}
            width={200}
            height={350}
            alt={projects[firstSlideIndex].title}
          ></Image>
          {projects[secondSlideIndex] && (
            <Image
              src={projects[secondSlideIndex].featuredImage.url}
              width={200}
              height={350}
              alt={projects[secondSlideIndex].title}
            ></Image>
          )}
          {projects[thirdSlideIndex] && (
            <Image
              src={projects[thirdSlideIndex].featuredImage.url}
              width={200}
              height={350}
              alt={projects[thirdSlideIndex].title}
            ></Image>
          )}
        </div>
        <button className="carousel-control next" onClick={goToNext}>
          &#10095;
        </button>
      </div>
    </>
  );
};

export default ImageCarousel;
