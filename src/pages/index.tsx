import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BookModal from "../components/BookModal";
import styles from "./index.module.css";

// Estrutura do Livro
interface Book {
  id: number;
  title: string;
  description: string;
}
// Dados exclusivos do carrossel
const carouselItems = [
  { id: 1, title: "Conheça Nosso Acervo", image: "/img/carousel1.jpg" },
  { id: 2, title: "Participe de Workshops", image: "/img/carousel2.jpg" },
  { id: 3, title: "Espaços Colaborativos", image: "/img/carousel3.jpg" },
];


// Dados dos livros
const books: Book[] = [
  { id: 1, title: "Livro 1", description: "Descrição do Livro 1" },
  { id: 2, title: "Livro 2", description: "Descrição do Livro 2" },
  { id: 3, title: "Livro 3", description: "Descrição do Livro 3" },
  { id: 4, title: "Livro 4", description: "Descrição do Livro 4" },
  { id: 5, title: "Livro 5", description: "Descrição do Livro 5" },
  { id: 6, title: "Livro 6", description: "Descrição do Livro 6" },
];

function HomepageHeader() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funções para avançar e retroceder no carrossel
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  const goToPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
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
    </header>
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

function Features() {
  return (
    <div className="socorro">
      <div className="container">
        <div className="row">
          <div className={clsx("col col--6", styles.featureCard)}>
            <h3>📚 Acervo Inovador</h3>
            <p>Mais de 50.000 títulos sobre tecnologia, ciência e inovação. Livros, e-books e audiolivros cuidadosamente selecionados para inspirar sua criatividade.</p>
          </div>
          <div className={clsx("col col--6", styles.featureCard)}>
            <h3>🛋️ Espaços Modernos</h3>
            <p>Makerspace, laboratórios de realidade virtual e salas de estudo colaborativo. Ideal para transformar ideias em projetos.</p>
          </div>
          <div className={clsx("col col--6", styles.featureCard)}>
            <h3>🌟 Eventos e Workshops</h3>
            <p>Participe de hackathons, palestras e cursos sobre tecnologia emergente e tendências futuras.</p>
          </div>
          <div className={clsx("col col--6", styles.featureCard)}>
            <h3>🖥️ Software robusto e confiável</h3>
            <p>Possuímos um software de gestão de livros que é possível de adquirir!</p>
          </div>
        </div>
      </div>
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
        <Features />
        <section className={styles.callToAction}>
          <div className="container">
            <h2 className={styles.callToActionTitle}>🌐 Junte-se à Revolução do Conhecimento</h2>
            <p className={styles.callToActionText}>
              Descubra um mundo de inovação e aprendizado. Torne-se membro e aproveite todas as vantagens que a Biblioteca PRO MAX tem a oferecer.
            </p>
            <Link className="button button--primary button--lg" to="/">Seja Membro PRO MAX</Link>
          </div>
        </section>
        <section>
          <h2 style={{ textAlign: "center", margin: "20px 0" }}>📚 Estante de Livros Interativa</h2>
          <BookShelf />
        </section>
      </main>
    </Layout>
  );
}
