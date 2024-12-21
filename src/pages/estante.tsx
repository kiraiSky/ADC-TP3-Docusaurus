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

const shelves = [
  {
    id: 1,
    books: [
      {
        id: 1,
        title: "A Arte da Guerra",
        description: "Estratégias militares e filosóficas de Sun-Tzu, aplicáveis em diversos aspectos da vida.",
        pdf: "./books/a-arte-da-guerra.pdf",
        link: "/bookReview/aArteDaGuerra"
      },
      {
        id: 2,
        title: "A Metamorfose",
        description: "Obra de Franz Kafka que explora temas de isolamento e transformação.",
        pdf: "./books/a-metamorfose.pdf",
        link: "/bookReview/aMetamorfose"
      },
      {
        id: 3,
        title: "Divina Comédia",
        description: "Poema épico de Dante Alighieri que narra uma jornada pelo Inferno, Purgatório e Paraíso.",
        pdf: "./books/divina-comedia.pdf",
        link: "/bookReview/divinaComedia"
      },
      {
        id: 4,
        title: "Dom Casmurro",
        description: "Clássico de Machado de Assis que discute ciúmes e percepção na narrativa de Bentinho.",
        pdf: "./books/dom-casmurro.pdf",
        link: "/bookReview/domCasmurro"
      },
      {
        id: 5,
        title: "Memórias Póstumas de Brás Cubas",
        description: "Narrativa inovadora de Machado de Assis, contada por um defunto autor.",
        pdf: "./books/memorias-postumas.pdf",
        link: "/bookReview/memoriasPostumas"
      },
      {
        id: 6,
        title: "Odisseia",
        description: "A épica jornada de Odisseu, escrita por Homero, repleta de aventuras e desafios.",
        pdf: "./books/odisseia.pdf",
        link: "/bookReview/odisseia"
      }
    ]
  },
  {
    id: 2,
    books: [
      {
        id: 7,
        title: "Revolução dos Bichos",
        description: "Sátira política de George Orwell sobre a corrupção do poder.",
        pdf: "./books/revolucao-dos-bichos.pdf",
        link: "/bookReview/revolucaoDosBichos"
      },
      {
        id: 8,
        title: "Romeu e Julieta",
        description: "A trágica história de amor de William Shakespeare.",
        pdf: "./books/romeu-e-julieta.pdf",
        link: "/bookReview/romeuEJulieta"
      },
      {
        id: 9,
        title: "1984",
        description: "Distopia de George Orwell que explora vigilância e autoritarismo.",
        pdf: "./books/NO.pdf",
        link: "/bookReview/1984"
      },
      {
        id: 10,
        title: "O Pequeno Príncipe",
        description: "Clássico de Antoine de Saint-Exupéry sobre amizade, amor e humanidade.",
        pdf: "./books/NO.pdf",
        link: "/bookReview/oPequenoPrincipe"
      },
      {
        id: 11,
        title: "Moby Dick",
        description: "A busca obsessiva do Capitão Ahab pela baleia branca, escrita por Herman Melville.",
        pdf: "./books/NO.pdf",
        link: "/bookReview/mobyDick"
      }
    ]
  },
  {
    id: 3,
    books: [
      {
        id: 12,
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        description: "Primeiro volume da trilogia épica de J.R.R. Tolkien.",
        pdf: "./books/NO.pdf",
        link: "/bookReview/aSociedadeDoAnel"
      },
      {
        id: 13,
        title: "Crime e Castigo",
        description: "Exploração psicológica de Dostoiévski sobre culpa e redenção.",
        pdf: "./books/NO.pdf",
        link: "/bookReview/crimeECastigo"
      },
      {
        id: 14,
        title: "O Alquimista",
        description: "Inspiradora jornada de autodescoberta escrita por Paulo Coelho.",
        pdf: "./books/NO.pdf",
        link: "/bookReview/oAlquimista"
      },
      {
        id: 15,
        title: "Jane Eyre",
        description: "História de amor e resistência da protagonista homônima, escrita por Charlotte Brontë.",
        pdf: "./books/NO.pdf",
        link: "/bookReview/janeEyre"
      },
      {
        id: 16,
        title: "Orgulho e Preconceito",
        description: "Clássico de Jane Austen que explora relações sociais e amorosas na Inglaterra do século XIX.",
        pdf: "./books/NO.pdf",
        link: "/bookReview/orgulhoEPreconceito"
      }
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
            <Link className="button button--primary button--lg" to="/membership">
              Seja Membro PRO MAX
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
