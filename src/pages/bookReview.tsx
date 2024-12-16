import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/">
            Explore os Benefícios 🚀
          </Link>
          <Link className="button button--secondary button--lg" to="/bookReview">
          DUMMYssss 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

// Componente principal
function BookReviewPage() {
  const [books, setBooks] = useState([ // Lista inicial de livros
    { id: 1, title: '1984', author: 'George Orwell', review: 'Uma obra-prima sobre totalitarismo.' },
    { id: 2, title: 'Dom Casmurro', author: 'Machado de Assis', review: 'Uma narrativa intrigante sobre ciúmes e memórias.' },
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '', review: '' }); // Formulário para novo livro

  // Adiciona um novo livro à lista
  const addBook = () => {
    if (newBook.title && newBook.author && newBook.review) {
      setBooks([...books, { ...newBook, id: books.length + 1 }]);
      setNewBook({ title: '', author: '', review: '' });
    } else {
      alert('Preencha todos os campos antes de adicionar um livro.');
    }
  };

  return (
    <Layout
    title={`Resenha de livros`}
    description="A Biblioteca PRO MAX é um centro de inovação, tecnologia e criatividade.">
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Resenha de Livros</h1>

      {/* Lista de livros */}
      <h2>Livros Resenhados</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> por {book.author}
            <p>Resenha: {book.review}</p>
          </li>
        ))}
      </ul>

      {/* Formulário para adicionar novos livros */}
      <h2>Adicionar Nova Resenha</h2>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Título do Livro"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Autor"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Resenha"
          value={newBook.review}
          onChange={(e) => setNewBook({ ...newBook, review: e.target.value })}
        />
      </div>
      <button onClick={addBook}>Adicionar Livro</button>
    </div>
    </Layout>
  );
}

export default BookReviewPage;
