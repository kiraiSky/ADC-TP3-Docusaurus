import React, { useState } from "react";
import BookModal from "./BookModal";
import styles from "../../styles/bookshelf.module.css";

interface Book {
  id: number;
  title: string;
  description: string;
}

const books: Book[] = [
  
];

const BookShelf: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <div className={styles.bookshelf}>
      {/* Prateleira 1 */}
      <div className={styles.shelf}>
        {books.map((book) => (
          <div
            key={book.id}
            className={styles.book}
            onClick={() => setSelectedBook(book)}
            title={book.title}
          ></div>
        ))}
      </div>

      {/* Modal */}
      {selectedBook && (
        <BookModal
          title={selectedBook.title}
          description={selectedBook.description}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
};

export default BookShelf;
