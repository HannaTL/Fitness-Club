import React, { useState } from "react";
import styles from "./EditCardForm.module.css";

function EditCardForm({ cardData, onSave, onCancel }) {
  const [formData, setFormData] = useState(cardData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <form onSubmit={handleSubmit}>
          <h2>Editar Video</h2>
          <label>
            Título:
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
            />
          </label>
          <label>
            Categoría:
            <select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
            >
              <option value="jumping">Jumping</option>
              <option value="zumba">Zumba</option>
              <option value="baile">Baile</option>
            </select>
          </label>
          <label>
            Imagen:
            <input
              type="text"
              name="capa"
              value={formData.capa}
              onChange={handleChange}
            />
          </label>
          <label>
            Video:
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleChange}
            />
          </label>
          <label>
            Descripción:
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
            />
          </label>
          <div className={styles.actions}>
            <button type="submit">Guardar</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCardForm;
