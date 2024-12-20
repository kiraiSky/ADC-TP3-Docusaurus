import React from "react";
import clsx from "clsx";
import styles from "./css/features.module.css";

// Estrutura de Dados das Features
const featureList = [
  {
    id: 1,
    title: "📚 Acervo Inovador",
    description:
      "Mais de 50.000 títulos sobre tecnologia, ciência e inovação. Livros, e-books e audiolivros cuidadosamente selecionados para inspirar sua criatividade.",
  },
  {
    id: 2,
    title: "🛋️ Espaços Modernos",
    description:
      "Makerspace, laboratórios de realidade virtual e salas de estudo colaborativo. Ideal para transformar ideias em projetos.",
  },
  {
    id: 3,
    title: "🌟 Eventos e Workshops",
    description:
      "Participe de hackathons, palestras e cursos sobre tecnologia emergente e tendências futuras.",
  },
  {
    id: 4,
    title: "🖥️ Software robusto e confiável",
    description:
      "Possuímos um software de gestão de livros que é possível de adquirir!",
  },
];

// Componente FeatureCard
interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className={clsx("col col--6", styles.featureCard)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Componente Features Principal
const Features: React.FC = () => {
  return (
    <div className={styles.featuresSection}>
      {/* Título */}
      <h2 className={styles.title}>Principais Benefícios da Biblioteca Pro Max</h2>
      <div className="container">
        <div className="row">
          {featureList.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
