import React, { useState } from "react";
import BookModal from "./BookModal";
import styles from "../styles/bookshelf.module.css";

interface Book {
  id: number;
  title: string;
  description: string;
}

const books: Book[] = [
  { id: 1, title: "Livro 1", description: "Descrição do Livro 1" },
  { id: 2, title: "Livro 2", description: "Descrição do Livro 2" },
  { id: 3, title: "Livro 3", description: "Descrição do Livro 3" },
  { id: 4, title: "Livro 4", description: "Descrição do Livro 4" },
  { id: 5, title: "Livro 5", description: "Descrição do Livro 5" },
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
