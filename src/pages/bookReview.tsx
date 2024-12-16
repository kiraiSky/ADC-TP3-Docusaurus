import Layout from '@theme/Layout';
import React from 'react';
import CardLivro from '../components/ResenhaFeatures/cardLivro';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const PaginaInicialResenhas = () => {
  const resenhas = [
    {
      id: 1,
      titulo: '1984',
      autor: 'George Orwell',
      descricao: 'Uma análise profunda sobre o livro 1984, cobrindo os principais aspectos da obra.',
      capa: 'https://m.media-amazon.com/images/I/61NAx5pd6XL.jpg',
      path: '../resenhas/1984',
    },
    {
      id: 2,
      titulo: 'Harry Potter and the Deathly Hallows',
      autor: 'J.K Rowling',
      descricao: 'Resenha detalhada sobre o livro Harry Potter, incluindo crítica, direção.',
      capa: 'https://cdn.europosters.eu/image/750/telas-harry-potter-deathly-hallows-book-cover-i214933.jpg',
      path: '/resenhas/harry_potter_deathly_hallows',
    },
  ];

  return (
    <Layout>
      <div className={styles.paginaInicial}>
        <h1>Explore nossas resenhas</h1>
        <div className={styles.cardsContainer}>
          {resenhas.map((resenha) => (
            <CardLivro 
              key={resenha.id}
              titulo={resenha.titulo}
              autor={resenha.autor}
              descricao={resenha.descricao}
              capa={resenha.capa}
              path={resenha.path}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PaginaInicialResenhas;
