import React from "react";
import styles from "./css/authors.module.css";
import style from "../../pages/index.module.css"
// Dados dos Autores
const authors = [
  {
    id: 1,
    name: "Hanna Paiva",
    description: "Especialista em Design e leitora ávida",
    image: "./img/authors/hanna.png",
  },
  {
    id: 2,
    name: "Adriano Muncaciu",
    description: "Manager da área de venda de livros",
    image: "./img/authors/adriano.png",
  },
  {
    id: 3,
    name: "João Cunha",
    description: "Responsável pelas resenhas submetidas dos livros.",
    image: "./img/authors/joao.png",
  },
  {
    id: 4,
    name: "Paulo Ferreira",
    description: "Vendedor do software desenvolvido para gestão de livros",
    image: "./img/authors/paulo.png",
  },
];

const Authors: React.FC = () => {
  return (
    <div className={style.callToAction}>
    <div className={styles.container}>
      {/* Título no topo */}
      <h2 >Idealizadores da Biblioteca Pro Max</h2>

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
    </div>
  );
};

export default Authors;
