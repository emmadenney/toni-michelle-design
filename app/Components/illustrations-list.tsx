"use client";

import { useState } from "react";
import Image from "next/image";
import ImageCarousel from "./image-carousel";

interface Illustration {
  title: string;
  slug: string;
  description: string;
  featuredImage: { url: string };
  gallery: { url: string }[];
  sys: { id: string };
}

interface IllustrationsProps {
  illustrations: Illustration[];
}

const IllustrationsList = ({ illustrations }: IllustrationsProps) => {
  return (
    <div className="illustrations-list-container">
      <ImageCarousel projects={illustrations} />

      {/* Modal Component */}
      {/* {selectedBook && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          bookCoverUrl={selectedBook.thumbnail.url}
          bookTitle={selectedBook.title}
        />
      )} */}
    </div>
  );
};

export default IllustrationsList;
