import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

// Estrutura do Livro
interface Book {
  id: number;
  title: string;
  description: string;
  pdf: string;
  link: String;
}

// Estrutura da Shelf
interface Shelf {
  id: number;
  books: Book[];
}

// Dados das Shelves
const shelves: Shelf[] = [
  {
    id: 1,
    books: [
      {
        id: 1,
        title: "A arte da Guerra",
        description: "Livro de Sun-Tzu. Consulte a Resenha aqui: ",
        pdf: "./books/a-arte-da-guerra.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
      {
        id: 2,
        title: "A metamorfose",
        description: "Descrição do Livro 2",
        pdf: "./books/a-metamorfose.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
      {
        id: 3,
        title: "Divina Comédia",
        description: "Descrição do Livro 3",
        pdf: "./books/divina-comedia.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
      {
        id: 4,
        title: "Dom Casmurro",
        description: "Descrição do Livro 4",
        pdf: "./books/dom-casmurro.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
      {
        id: 5,
        title: "Memórias Postumas de Brás Cubas",
        description: "Descrição do Livro 5",
        pdf: "./books/memorias-postumas.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
      {
        id: 6,
        title: "Odisseia",
        description: "Descrição do Livro 6",
        pdf: "./books/odisseia.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
    ],

  },
  {
    id:2,
    books: [
      {
        id: 7,
        title: "Revolução dos bichos",
        description: "Descrição do Livro 1",
        pdf: "./books/revolucao-dos-bichos.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
      {
        id: 8,
        title: "Romeu e Julieta",
        description: "Descrição do Livro 2",
        pdf: "./books/romeu-e-julieta.pdf",
        link: "/bookReview/aArteDaGuerra"
      
      },
  
      {
        id: 4,
        title: "Dom Casmurro",
        description: "Descrição do Livro 4",
        pdf: "./books/dom-casmurro.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
      {
        id: 5,
        title: "Memórias Postumas de Brás Cubas",
        description: "Descrição do Livro 5",
        pdf: "./books/memorias-postumas.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
      {
        id: 6,
        title: "Odisseia",
        description: "Descrição do Livro 6",
        pdf: "./books/odisseia.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
    ]
  },
  {
    id:2,
    books: [
      {
        id: 1,
        title: "A arte da Guerra",
        description: "Descrição do Livro 1",
        pdf: "./books/a-arte-da-guerra.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
      {
        id: 2,
        title: "A metamorfose",
        description: "Descrição do Livro 2",
        pdf: "./books/a-metamorfose.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
      {
        id: 3,
        title: "Divina Comédia",
        description: "Descrição do Livro 3",
        pdf: "./books/divina-comedia.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
      {
        id: 4,
        title: "Dom Casmurro",
        description: "Descrição do Livro 4",
        pdf: "./books/dom-casmurro.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
      {
        id: 5,
        title: "Memórias Postumas de Brás Cubas",
        description: "Descrição do Livro 5",
        pdf: "./books/memorias-postumas.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
      {
        id: 6,
        title: "Odisseia",
        description: "Descrição do Livro 6",
        pdf: "./books/odisseia.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
    ]
  }
  
];

// Componente Modal para exibir livro e PDF Viewer
interface BookModalProps {
  book: Book;
  onClose: () => void;
}

const BookModal: React.FC<BookModalProps> = ({ book, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <iframe
          src={book.pdf}
          title={book.title}
          className={styles.pdfViewer}
        ></iframe>
        <button onClick={onClose} className={styles.closeButton}>
          Fechar
        </button>
      </div>
    </div>
  );
};

function BookShelf() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <div className={styles.bookshelf}>
      {shelves.map((shelf) => (
        <div key={shelf.id} className={styles.shelf}>
          {shelf.books.map((book) => (
            <div
              key={book.id}
              className={styles.book}
              onClick={() => setSelectedBook(book)}
              title={book.title}
            >
              <span>{book.title}</span>
            </div>
          ))}
        </div>
      ))}

      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Bem-vindo à ${siteConfig.title}`}
      description="A Biblioteca PRO MAX é um centro de inovação, tecnologia e criatividade."
    >
      <main>
        <section>
          <h2 style={{ textAlign: "center", margin: "20px 0" }}>
            📚 Estante de Livros Interativa
          </h2>
          <div className="container">
            <div className={styles.thin}>
              <BookShelf />
            </div>
          </div>
        </section>
        <section className={styles.callToAction}>
          <div className="container">
            <h2 className={styles.callToActionTitle}>
              🌐 Junte-se à Revolução do Conhecimento
            </h2>
            <p className={styles.callToActionText}>
              Descubra um mundo de inovação e aprendizado. Torne-se membro e
              aproveite todas as vantagens que a Biblioteca PRO MAX tem a
              oferecer.
            </p>
            <Link className="button button--primary button--lg" to="/">
              Seja Membro PRO MAX
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
