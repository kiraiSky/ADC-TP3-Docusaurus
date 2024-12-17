import Layout from '@theme/Layout';
import React from 'react';
import CardLivro from '../components/ResenhaFeatures/cardLivro';
import styles from './index.module.css';

const PaginaInicialResenhas = () => {
  const resenhas = [
    {
      titulo: '1984',
      autor: 'George Orwell',
      descricao: 'Uma análise profunda sobre o livro 1984, cobrindo os principais aspectos da obra.',
      capa: 'https://m.media-amazon.com/images/I/61NAx5pd6XL.jpg',
      path: '/ADC-TP3-Docusaurus/resenhas/1984',
    },
    {
      titulo: 'Harry Potter and the Deathly Hallows',
      autor: 'J.K Rowling',
      descricao: 'Resenha detalhada sobre o livro Harry Potter, incluindo crítica, direção.',
      capa: 'https://cdn.europosters.eu/image/750/telas-harry-potter-deathly-hallows-book-cover-i214933.jpg',
      path: '/ADC-TP3-Docusaurus/resenhas/harryPotter',
    },
    {
      titulo: 'Moby Dick',
      autor: 'Herman Melville',
      descricao: 'Resenha detalhada sobre o livro Moby Dick.',
      capa: 'https://i.etsystatic.com/17212209/r/il/1336b0/1498853645/il_fullxfull.1498853645_4zx2.jpg',
      path: '/ADC-TP3-Docusaurus/resenhas/mobyDick',
    }
  ];

  return (
    <Layout>
      <div className={styles.paginaInicial}>
        <h1>Explore nossas resenhas</h1>
        <div className={styles.cardsContainer}>
          {resenhas.map((resenha) => (
            <CardLivro 
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
