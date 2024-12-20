import React from "react";
import styles from "./css/aboutUs.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// Componente AboutUs
const AboutUs: React.FC = () => {
const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.aboutUsSection}>
      <div className="container">
        <div className={styles.row}>
          {/* Coluna da Imagem */}
          <div className={styles.imageColumn}>
            <img
              src="./img/LOGO.png" 
              alt="Sobre Nós"
              className={styles.aboutImage}
            />
          </div>
          {/* Coluna do Texto */}
          <div className={styles.textColumn}>
            <h2 className={styles.title}>Sobre a Biblioteca Pro Max</h2>
            <p className={styles.description}>
              A <strong>Biblioteca Pro Max</strong> é um centro de inovação, leitura e
              tecnologia. Nossa missão é oferecer uma experiência única, unindo o
              mundo dos livros físicos com o digital. Temos uma vasta coleção de
              mais de 50.000 títulos e espaços modernos para estudo e colaboração.
            </p>
            <p className={styles.description}>
              Nossos espaços incluem áreas de realidade virtual, makerspaces e
              salas projetadas para estimular a criatividade e o aprendizado. A
              Biblioteca Pro Max está sempre em busca de inovação para tornar o
              conhecimento acessível a todos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
