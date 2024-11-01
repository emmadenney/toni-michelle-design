"use client";

import { useState } from "react";
import Image from "next/image";
import ImageCarousel from "./image-carousel";

interface GraphicDesign {
  title: string;
  slug: string;
  description: string;
  featuredImage: { url: string };
  gallery: { url: string }[];
  sys: { id: string };
}

interface GraphicDesignsProps {
  graphicDesigns: GraphicDesign[];
}

const GraphicDesignsList = ({ graphicDesigns }: GraphicDesignsProps) => {
  return (
    <div className="graphic-designs-list-container">
      <ImageCarousel projects={graphicDesigns} />

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

export default GraphicDesignsList;
