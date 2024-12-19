import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BookModal from "../components/BookModal";
import styles from "./index.module.css";
import Authors from "../components/Authors";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
// Estrutura do Livro
interface Book {
  id: number;
  title: string;
  description: string;
}


// Dados dos livros
const books: Book[] = [
  { id: 1, title: "Livro 1", description: "Descrição do Livro 1" },
  { id: 2, title: "Livro 2", description: "Descrição do Livro 2" },
  { id: 3, title: "Livro 3", description: "Descrição do Livro 3" },
  { id: 4, title: "Livro 4", description: "Descrição do Livro 4" },
  { id: 5, title: "Livro 5", description: "Descrição do Livro 5" },
  { id: 6, title: "Livro 6", description: "Descrição do Livro 6" },
];


function BookShelf() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <div className={styles.bookshelf}>
      {/* Prateleiras com livros */}
      {[...Array(2)].map((_, shelfIndex) => (
        <div key={shelfIndex} className={styles.shelf}>
          {books.map((book) => (
            <div
              key={book.id}
              className={styles.book}
              onClick={() => setSelectedBook(book)}
              title={book.title}
            ></div>
          ))}
        </div>
      ))}

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
          <h2 style={{ textAlign: "center", margin: "20px 0" }}>📚 Estante de Livros Interativa</h2>
         
         <div className="container">
          <div className={styles.thin}>

         
         <BookShelf />
         </div>
          </div> 
        </section>
        <section className={styles.callToAction}>
          <div className="container">
            <h2 className={styles.callToActionTitle}>🌐 Junte-se à Revolução do Conhecimento</h2>
            <p className={styles.callToActionText}>
              Descubra um mundo de inovação e aprendizado. Torne-se membro e aproveite todas as vantagens que a Biblioteca PRO MAX tem a oferecer.
            </p>
            <Link className="button button--primary button--lg" to="/">Seja Membro PRO MAX</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
