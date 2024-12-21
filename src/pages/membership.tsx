import React, { useState } from "react";
import styles from "./membership.module.css";
import Link from "@docusaurus/Link";

const MembershipPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setSelectedPlan(null);
    }, 3000); // Fecha o modal após 3 segundos
  };

  const closeModal = () => {
    setSelectedPlan(null);
    setFormData({
      cardName: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    });
  };

  return (
    <div className={styles.membershipContainer}>
      <h1 className={styles.title}>Torne-se um Membro da Biblioteca Pro Max</h1>
      <p className={styles.subtitle}>
        Escolha o plano que melhor atende às suas necessidades e mergulhe em um
        mundo de conhecimento e inovação.
      </p>
      <div className={styles.cardsContainer}>
        {/* Plano Gratuito */}
        <div className={styles.card}>
          <h2 className={styles.planName}>Plano Gratuito</h2>
          <p className={styles.price}>€ 0 / mês</p>
          <ul className={styles.benefits}>
            <li>1. Acesso limitado a 10 livros por mês</li>
            <li>2. Participação em eventos básicos</li>
            <li>3. Acesso ao fórum da comunidade</li>
          </ul>
          <button
            className={styles.selectButton}
            onClick={() => setSelectedPlan("Plano Gratuito")}
          >
            Escolher Plano
          </button>
        </div>
        {/* Plano Intermediário */}
        <div className={`${styles.card} ${styles.highlightedCard}`}>
          <h2 className={styles.planName}>Pro</h2>
          <p className={styles.price}>€ 49,90 / mês</p>
          <ol className={styles.benefits}>
            <li>1. Acesso ilimitado a todos os livros</li>
            <li>2. Participação em eventos exclusivos</li>
            <li>3. Descontos em cursos e workshops</li>
            <li>4. Áreas de leitura reservadas</li>
          </ol>
          <button
            className={styles.selectButton}
            onClick={() => setSelectedPlan("Pro")}
          >
            Escolher Plano
          </button>
        </div>
        {/* Plano Premium */}
        <div className={styles.card}>
          <h2 className={styles.planName}>Premium Pro Max</h2>
          <p className={styles.price}>€ 99,90 / mês</p>
          <ul className={styles.benefits}>
            <li>1. Acesso ilimitado a todos os livros</li>
            <li>2. Participação em eventos VIP</li>
            <li>3. Cursos exclusivos de parceiros</li>
            <li>4. Consultoria personalizada de leitura</li>
            <li>5. Salas privadas de estudo e networking</li>
          </ul>
          <button
            className={styles.selectButton}
            onClick={() => setSelectedPlan("Premium Pro Max")}
          >
            Escolher Plano
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedPlan && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Finalizar Assinatura: {selectedPlan}</h2>
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="text"
                  name="cardName"
                  placeholder="Nome no Cartão"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  required
                  className={styles.inputField}
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Número do Cartão"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  className={styles.inputField}
                />
                <input
                  type="text"
                  name="expirationDate"
                  placeholder="Data de Validade (MM/AA)"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  required
                  className={styles.inputField}
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                  className={styles.inputField}
                />
                <button type="submit" className={styles.submitButton}>
                  Confirmar Pagamento
                </button>
              </form>
            ) : (
              <p className={styles.successMessage}>Assinatura realizada com sucesso!</p>
            )}
            <button onClick={closeModal} className={styles.closeButton}>
              Fechar
            </button>
          </div>
        </div>
      )}
      <div className="butao-voltar">
        <Link className="button button--primary button--lg" to="/">Voltar </Link>
      </div>
    </div>
  );
};

export default MembershipPage;
