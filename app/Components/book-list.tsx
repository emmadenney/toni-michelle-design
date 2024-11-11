"use client";

import { useState, useEffect } from "react";
// import Image from "next/image";
import Modal from "./modal";

interface BookDesign {
  title: string;
  slug: string;
  description: string;
  featuredImage: { url: string };
  galleryCollection: any;
  sys: { id: string };
}

interface BookListProps {
  bookDesigns: BookDesign[];
}

const BookList = ({ bookDesigns }: BookListProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<BookDesign | null>(null);

  const openModal = (book: BookDesign) => {
    const img = new Image();
    img.src = book.featuredImage.url;
    img.onload = () => {
      setSelectedBook(book);
      setModalOpen(true);
    };
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="book-list-container">
      {bookDesigns.map((bookDesign: BookDesign) => (
        <div
          key={bookDesign.sys.id}
          className="book-list-item"
          onClick={() => openModal(bookDesign)}
        >
          <div className="book-cover-container">
            <img
              alt={bookDesign.title}
              className="book-cover"
              height="600"
              src={bookDesign.featuredImage.url}
              width="400"
            />
          </div>
        </div>
      ))}

      {/* Modal Component */}
      {selectedBook && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          gallery={
            selectedBook.galleryCollection.items.length > 0
              ? selectedBook.galleryCollection.items
              : [selectedBook.featuredImage]
          }
        />
      )}
    </div>
  );
};

export default BookList;
