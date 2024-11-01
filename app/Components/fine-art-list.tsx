"use client";

import { useState } from "react";
import Image from "next/image";
import ImageCarousel from "./image-carousel";

interface FineArtDesign {
  title: string;
  slug: string;
  description: string;
  featuredImage: { url: string };
  gallery: { url: string }[];
  sys: { id: string };
}

interface FineArtProps {
  fineArt: FineArtDesign[];
}

const FineArtList = ({ fineArt }: FineArtProps) => {
  return (
    <div className="fine-art-list-container">
      <ImageCarousel projects={fineArt} />

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

export default FineArtList;
