import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BookModal from "../components/HomepageFeatures/BookModal";

import Authors from "../components/HomepageFeatures/Authors";
import Features from "../components/HomepageFeatures/Features";
import AboutUs from "../components/HomepageFeatures/AboutUs";
import ContactForm from "../components/HomepageFeatures/ContactForm";
import styles from "./index.module.css";
// Estrutura do Livro

// Dados exclusivos do carrossel
const carouselItems = [
  { id: 1, title: "Biblioteca Pro MAX", image: "./img/slider/mainpage.png" },
  { id: 2, title: "Leia livros como nunca leu antes", image: "./img/slider/carousel1.jpg" },
  { id: 3, title: "Participe de espaços colaborativos", image: "./img/slider/carousel2.jpg" },
  { id: 4, title: "Tecnologia e Literatura mescladas como um", image: "./img/slider/carousel3.jpg" },
];


  const txtstyle: React.CSSProperties = {
    fontSize: "56px", 
    fontWeight: "600",
    color: "#FFFFFF", 
    textAlign: "center", 
    lineHeight: "1.3", 
    fontFamily: "'Playfair Display', serif", 
    textTransform: "uppercase",
    letterSpacing: "2px", 
    margin: "0 auto", 
    padding: "10px 20px", 
    textShadow: "2px 4px 8px rgba(0, 0, 0, 0.7)", 
  };


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
            <h1 className="hero__title happy" style={txtstyle}>{carouselItems[currentIndex].title}</h1>
          </div>
          {/* Botões estilizados */}
          <button onClick={goToPrev} className={styles.arrowButton}>&#8592;</button>
          <button onClick={goToNext} className={styles.arrowButton}>&#8594;</button>
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
