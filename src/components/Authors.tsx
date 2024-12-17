import React from "react";
import styles from "./HomepageFeatures/authors.module.css";

// Dados dos Autores
const authors = [
  {
    id: 1,
    name: "Hanna Paiva",
    description: "Especialista em literatura clássica e digital.",
    image: "/img/hanna.jpg",
  },
  {
    id: 2,
    name: "Adriano Muncacio",
    description: "Desenvolvedor responsável pela tecnologia inovadora.",
    image: "/img/adriano.jpg",
  },
  {
    id: 3,
    name: "João Cunha",
    description: "Curador de livros e eventos literários.",
    image: "/img/joao.jpg",
  },
  {
    id: 4,
    name: "Paulo Ferreira",
    description: "Líder do projeto Biblioteca Pro Max.",
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
