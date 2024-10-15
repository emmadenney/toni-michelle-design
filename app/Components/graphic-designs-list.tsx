"use client";

import { useState } from "react";
import Image from "next/image";

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
      {graphicDesigns.map((graphicDesign: GraphicDesign) => (
        <div
          key={graphicDesign.sys.id}
          className="graphic-design-list-item"
          // onClick={() => openModal(bookDesign)}
        >
          <div className="graphic-design-container">
            <Image
              alt={graphicDesign.title}
              className="graphic-design"
              height="600"
              src={graphicDesign.featuredImage.url}
              width="400"
            />
          </div>
        </div>
      ))}

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
