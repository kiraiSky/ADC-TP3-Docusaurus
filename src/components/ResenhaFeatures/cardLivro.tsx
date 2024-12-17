import React from 'react';
import { Link } from 'react-router-dom';
import './CardLivro.css';

const CardLivro = ({ titulo, autor, descricao, capa, path }) => {
  return (
    <div className="card-livro">
      <div className="card-livro-imagem">
        <img src={capa} alt={`Capa do livro ${titulo}`} />
      </div>
      <div className="card-livro-conteudo">
        <h3 className="card-livro-titulo">{titulo}</h3>
        <p className="card-livro-autor">Autor: {autor}</p>
        <p className="card-livro-descricao">{descricao}</p>
        <Link to={path} className="card-livro-link">
          <button className="card-livro-botao">Leia a resenha</button>
        </Link>
      </div>
    </div>
  );
};

export default CardLivro;
