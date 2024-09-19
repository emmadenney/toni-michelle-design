import React from "react";
import Image from "next/image";

const Modal = ({ isOpen, onClose, bookCoverUrl, bookTitle }) => {
  if (!isOpen) return null; // Return null if modal is not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <Image
          alt={bookTitle}
          className="modal-book-cover"
          src={bookCoverUrl}
          width="800"
          height="1200"
        />
      </div>
    </div>
  );
};

export default Modal;
