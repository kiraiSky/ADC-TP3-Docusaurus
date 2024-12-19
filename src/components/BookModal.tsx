import React from "react";
import styles from "./HomepageFeatures/styles.module.css";

interface BookModalProps {
  title: string;
  description: string;
  onClose: () => void;
}

const BookModal: React.FC<BookModalProps> = ({ title, description, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>&times;</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BookModal;
