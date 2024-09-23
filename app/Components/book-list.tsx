"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./book-modal";

interface BookDesign {
  title: string;
  slug: string;
  description: string;
  thumbnail: { url: string };
  featuredImage: { url: string };
  secondaryImage: { url: string };
  sys: { id: string };
}

interface BookListProps {
  bookDesigns: BookDesign[];
}

const BookList = ({ bookDesigns }: BookListProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<BookDesign | null>(null);

  const openModal = (book: BookDesign) => {
    setSelectedBook(book);
    setModalOpen(true);
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
