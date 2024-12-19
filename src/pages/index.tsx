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
import ContactForm from "../components/ContactForm";
// Estrutura do Livro
interface Book {
  id: number;
  title: string;
  description: string;
  pdf: string;
}
// Dados exclusivos do carrossel
const carouselItems = [
  { id: 1, title: "Biblioteca Pro MAX", image: "./img/slider/mainpage.png" },
  { id: 2, title: "Leia livros como nunca leu antes", image: "./img/slider/carousel1.jpg" },
  { id: 3, title: "Participe de espaços colaborativos", image: "./img/slider/carousel2.jpg" },
  { id: 4, title: "Tecnologia e Literatura mescladas como um", image: "./img/slider/carousel3.jpg" },
];


// Dados dos livros
const books: Book[] = [
  { id: 1, title: "Livro 1", description: "Descrição do Livro 1", pdf: "" },
  { id: 2, title: "Livro 2", description: "Descrição do Livro 2", pdf: "" },
  { id: 3, title: "Livro 3", description: "Descrição do Livro 3", pdf: "" },
  { id: 4, title: "Livro 4", description: "Descrição do Livro 4", pdf: "" },
  { id: 5, title: "Livro 5", description: "Descrição do Livro 5", pdf: "" },
  { id: 6, title: "Livro 6", description: "Descrição do Livro 6", pdf: "" },
];

function HomepageHeader() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funções para avançar e retroceder no carrossel
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  const goToPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);

  return ( 
      <div className={styles.carouselContainer}>
        {/* Imagem e Overlay */}
        <div
          className={styles.carouselImage}
          style={{
            backgroundImage: `url(${carouselItems[currentIndex].image})`,
          }}
        >
          <div className={styles.overlay}></div>
          <div className={styles.carouselContent}>
            <h1 className="hero__title happy">{carouselItems[currentIndex].title}</h1>
          </div>
          {/* Botões estilizados */}
          <button onClick={goToPrev} className={styles.arrowButton}>&#8592;</button>
          <button onClick={goToNext} className={styles.arrowButton}>&#8594;</button>
        </div>
      </div>
  
  );
}
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
      <HomepageHeader />
      <main>
        <AboutUs />
           <section className={styles.callToAction}>
          <div className="container">
            <h2 className={styles.callToActionTitle}>🌐 Junte-se à Revolução do Conhecimento</h2>
            <br />

            <p className={styles.callToActionText}>
              Descubra um mundo de inovação e aprendizado. Torne-se membro e aproveite todas as vantagens que a Biblioteca PRO MAX tem a oferecer.
            </p>
            <br />
            <Link className="button button--primary button--lg" to="/VendaSoftware">Consultar planos PRO AMX</Link>
            <br />
          </div>
        </section>
        <Features />
      
        <Authors />
      
     <ContactForm/>
      </main>
    </Layout>
  );
}
