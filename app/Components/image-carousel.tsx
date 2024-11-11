"use client";

import React, { useEffect, useState } from "react";
import Modal from "@/Components/modal";
import Image from "next/image";
import ArrowLeftPurple from "../assets/arrow-left-purple.png";
import ArrowRightPurple from "../assets/arrow-right-purple.png";
import ArrowLeftGrey from "../assets/arrow-left-grey.png";
import ArrowRightGrey from "../assets/arrow-right-grey.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Project {
  title: string;
  slug: string;
  description: string;
  featuredImage: { url: string };
  galleryCollection: any;
  sys: { id: string };
}

interface CarouselProps {
  projects: Project[];
  hasPurpleBg: boolean;
}

const ImageCarousel = ({ projects, hasPurpleBg }: CarouselProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <Image
        className={`carousel-arrow ${className}`}
        src={hasPurpleBg ? ArrowRightGrey : ArrowRightPurple}
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
        src={hasPurpleBg ? ArrowLeftGrey : ArrowLeftPurple}
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
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} onClick={() => openModal(project)}>
              <img
                className="slider-thumbnail"
                src={project.featuredImage.url}
                alt={project.title}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal Component */}
      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          gallery={selectedProject.galleryCollection.items}
        />
      )}
    </>
  );
};

export default ImageCarousel;
