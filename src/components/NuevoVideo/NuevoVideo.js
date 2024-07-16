import React, { useState } from "react";
import axios from "axios";
import styles from "./NuevoVideo.module.css";

function NuevoVideo() {
  const [formData, setFormData] = useState({
    titulo: "",
    category: "",
    capa: "",
    link: "",
    descripcion: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validar campos requeridos
    if (!formData.titulo || !formData.category || !formData.capa || !formData.link) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/videos", formData);
      console.log(response.data);
      setSuccess("Video guardado exitosamente!");
      setFormData({
        titulo: "",
        category: "",
        capa: "",
        link: "",
        descripcion: ""
      });
    } catch (error) {
      console.error("Error al guardar el video:", error);
      setError("Error al guardar el video");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Nuevo Video</h1>
      <p>Complete el formulario para crear una nueva tarjeta de video</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Ingrese el título"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Seleccione una categoría</option>
            <option value="jumping">Jumping</option>
            <option value="zumba">Zumba</option>
            <option value="baile">Baile</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="capa">Imagen</label>
          <input
            type="text"
            id="capa"
            name="capa"
            value={formData.capa}
            onChange={handleChange}
            placeholder="Ingrese el enlace de la imagen"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="link">Video</label>
          <input
            type="text"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="Ingrese el enlace del video"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="¿De qué se trata este video?"
          ></textarea>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
        <div className={styles.buttonGroup}>
          <button type="submit">Guardar</button>
          <button type="reset" onClick={() => setFormData({ titulo: "", category: "", capa: "", link: "", descripcion: "" })}>Limpiar</button>
        </div>
      </form>
    </div>
  );
}

export default NuevoVideo;
