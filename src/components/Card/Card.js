import React from "react";
import styles from "./Card.module.css";
import editar from "./editar.png";
import borrar from "./borrar.png";
import defaultImage from "./defaultImage.png"; 

function Card({ id, capa, titulo, link, onDelete, onEdit }) {
  return (
    <div className={styles.container}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={capa}
          alt={titulo}
          className={styles.capa}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultImage; 
          }}
        />
      </a>
      <h2>{titulo}</h2>
      <div className={styles.actions}>
        <img src={borrar} alt="borrar" onClick={() => onDelete(id)} />
        <img src={editar} alt="editar" onClick={() => onEdit(id)} />
      </div>
    </div>
  );
}

export default Card;
