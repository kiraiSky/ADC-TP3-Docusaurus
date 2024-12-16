import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import style from 'css/style.css';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title happy"> Biblioteca Pro Max</h1>
        <p className="hero__subtitle">O seu acervo de livros digitais</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/">
            Explore os Benefícios 🚀
          </Link>
         
        </div>
      </div>
    </header>
  );
}

function Features(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <h3>📚 Acervo Inovador</h3>
            <p>
              Mais de 50.000 títulos sobre tecnologia, ciência e inovação. Livros, e-books e audiolivros cuidadosamente
              selecionados para inspirar sua criatividade.
            </p>
          </div>
          <div className="col col--4">
            <h3>🛋️ Espaços Modernos</h3>
            <p>
              Makerspace, laboratórios de realidade virtual e salas de estudo colaborativo. Ideal para
              transformar ideias em projetos.
            </p>
          </div>
          <div className="col col--4">
            <h3>🌟 Eventos e Workshops</h3>
            <p>
              Participe de hackathons, palestras e cursos sobre tecnologia emergente e tendências futuras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Bem-vindo à ${siteConfig.title}`}
      description="A Biblioteca PRO MAX é um centro de inovação, tecnologia e criatividade.">
      <HomepageHeader />
      <main>
        <Features />
        <section className={styles.callToAction}>
          <div className="container">
            <h2>🌐 Junte-se à Revolução do Conhecimento</h2>
            <p>
              Descubra um mundo de inovação e aprendizado. Torne-se membro e aproveite todas as vantagens que a
              Biblioteca PRO MAX tem a oferecer.
            </p>
            <Link className="button button--primary button--lg" to="/">
              Seja Membro PRO MAX
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
