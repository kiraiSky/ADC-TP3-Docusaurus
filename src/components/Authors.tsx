import React from "react";
import styles from "./HomepageFeatures/authors.module.css";

// Dados dos Autores
const authors = [
  {
    id: 1,
    name: "Hanna Paiva",
    description: "Especialista em Design e leitora ávida",
    image: "/img/hanna.jpg",
  },
  {
    id: 2,
    name: "Adriano Muncacio",
    description: "Curador da venda de livros",
    image: "/img/adriano.jpg",
  },
  {
    id: 3,
    name: "João Cunha",
    description: "Responsável pelas resenhas submetidas dos livros.",
    image: "/img/joao.jpg",
  },
  {
    id: 4,
    name: "Paulo Ferreira",
    description: "Vendedor do software desenvolvido para gestão de livros",
    image: "/img/paulo.jpg",
  },
];

const Authors: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Título no topo */}
      <h2 className={styles.title}>Idealizadores da biblioteca pro max</h2>

      {/* Lista de Autores */}
      {authors.map((author, index) => (
        <div
          key={author.id}
          className={`${styles.row} ${
            index % 2 === 1 ? styles.rowReverse : ""
          }`}
        >
          {/* Imagem */}
          <div className={styles.imageBox}>
            <img
              src={author.image}
              alt={author.name}
              className={styles.authorImage}
            />
          </div>
          {/* Texto */}
          <div className={styles.textBox}>
            <h3 className={styles.authorName}>{author.name}</h3>
            <p className={styles.authorDescription}>{author.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Authors;
