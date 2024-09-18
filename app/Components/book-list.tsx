"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./book-modal";

const BookList = ({ bookDesigns }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book: any) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="book-list-container">
      {bookDesigns.map((bookDesign: any) => (
        <div
          key={bookDesign.sys.id}
          className="book-list-item"
          onClick={() => openModal(bookDesign)}
        >
          <div className="book-cover-container">
            <Image
              alt={bookDesign.title}
              className="book-cover"
              height="600"
              src={bookDesign.thumbnail.url}
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
          bookCoverUrl={selectedBook.thumbnail.url}
          bookTitle={selectedBook.title}
        />
      )}
    </div>
  );
};

export default BookList;
