import React, { useState } from "react";
import styles from "./css/ContactForm.module.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className={styles.contactFormContainer}>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Nos contate</h2>
        <p className={styles.subtitle}>Vamos responder o mais cedo quanto possível!</p>

        <div className={styles.inputRow}>
          <input
            type="text"
            name="firstName"
            placeholder="Nome"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Apelido"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputRow}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.inputField}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Telefone"
          value={formData.phone}
          onChange={handleChange}
          className={styles.inputField}
        />
</div>
        <button type="submit" className={styles.submitButton}>
          Send
        </button>

      </form>
    </div>
  );
};

export default ContactForm;
