import React, { useState } from "react";
import styles from "./vendaLivros.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

// Estrutura do Livro
interface Book {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

const imgStyle: React.CSSProperties = {
  height: "300px",
  width: "200px",
};

// Lista de Livros (Incluindo os do Top Vendas)
const books: Book[] = [
  {
    id: 1,
    title: "A Arte da Guerra",
    description: "Um clássico sobre estratégia e guerra.",
    price: 29.9,
    cover: "./covers/a-arte-da-guerra.jpg",
  },
  {
    id: 2,
    title: "A Metamorfose",
    description: "Uma obra-prima de Franz Kafka.",
    price: 24.9,
    cover: "./covers/a-metamorfose.jpg",
  },
  {
    id: 3,
    title: "Divina Comédia",
    description: "Uma viagem épica por Dante Alighieri.",
    price: 39.9,
    cover: "./covers/divina-comedia.jpg",
  },
  {
    id: 4,
    title: "Dom Casmurro",
    description: "Um romance marcante de Machado de Assis.",
    price: 19.9,
    cover: "./covers/dom-casmurro.jpg",
  },
  {
    id: 5,
    title: "A Montanha Mágica",
    description: "Uma obra-prima de Thomas Mann.",
    price: 34.5,
    cover: "./covers/AMontanhaMágica.png",
  },
  {
    id: 6,
    title: "1984",
    description: "Uma distopia fascinante de George Orwell.",
    price: 22.0,
    cover: "./covers/1984.png",
  },
  {
    id: 7,
    title: "Atomic Habits",
    description: "Melhore sua vida com hábitos eficazes por James Clear.",
    price: 28.7,
    cover: "./covers/atomic.png",
  },
];

// Tipos para o estado
type Page = "list" | "checkout";

interface CheckoutData {
  name: string;
  email: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

const SellBooks: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("list");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    name: "",
    email: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleBuyNow = (book: Book) => {
    setSelectedBook(book);
    setCurrentPage("checkout");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCheckoutData({ ...checkoutData, [name]: value });
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setCurrentPage("list");
      setSelectedBook(null);
      setCheckoutData({
        name: "",
        email: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
      });
    }, 3000); // Redireciona para a página inicial após 3 segundos
  };

  const { siteConfig } = useDocusaurusContext();

  // Página de Listagem
  if (currentPage === "list") {
    return (
      <Layout
        title={`Bem-vindo à ${siteConfig.title}`}
        description="A Biblioteca PRO MAX é um centro de inovação, tecnologia e criatividade."
      >
        <main>
          <div className={styles.booksPage}>
            <h1 className={styles.title}>Compre Livros da Biblioteca Pro Max</h1>
            <div className={styles.booksContainer}>
              {books.map((book) => (
                <div key={book.id} className={styles.bookCard}>
                  <img
                    src={book.cover}
                    alt={book.title}
                    className={styles.bookCover}
                  />
                  <h2 className={styles.bookTitle}>{book.title}</h2>
                  <p className={styles.bookDescription}>{book.description}</p>
                  <p className={styles.bookPrice}>€ {book.price.toFixed(2)}</p>
                  <button
                    className={styles.buyButton}
                    onClick={() => handleBuyNow(book)}
                  >
                    Comprar Agora
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </Layout>
    );
  }

  // Página de Checkout
  if (currentPage === "checkout" && selectedBook) {
    return (
      <div className={styles.checkoutPage}>
        <h1 className={styles.title}>Finalizar Compra</h1>
        <p className={styles.bookDetails}>
          Livro: <strong>{selectedBook.title}</strong>
          <p>
            <img
              src={selectedBook.cover}
              alt={selectedBook.title}
              style={imgStyle}
            />
          </p>
        </p>
        <p className={styles.bookDetails}>
          Preço: <strong>€ {selectedBook.price.toFixed(2)}</strong>
        </p>
        {!isSuccess ? (
          <form onSubmit={handleCheckout} className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Nome Completo"
              value={checkoutData.name}
              onChange={handleInputChange}
              required
              className={styles.inputField}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={checkoutData.email}
              onChange={handleInputChange}
              required
              className={styles.inputField}
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Número do Cartão"
              value={checkoutData.cardNumber}
              onChange={handleInputChange}
              required
              className={styles.inputField}
            />
            <input
              type="text"
              name="expirationDate"
              placeholder="Validade (MM/AA)"
              value={checkoutData.expirationDate}
              onChange={handleInputChange}
              required
              className={styles.inputField}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={checkoutData.cvv}
              onChange={handleInputChange}
              required
              className={styles.inputField}
            />
            <button type="submit" className={styles.submitButton}>
              Confirmar Pagamento
            </button>
          </form>
        ) : (
          <p className={styles.successMessage}>
            Compra realizada com sucesso!
          </p>
        )}
        <button
          onClick={() => setCurrentPage("list")}
          className={styles.backButton}
        >
          Voltar
        </button>
      </div>
    );
  }

  return null;
};

export default SellBooks;
