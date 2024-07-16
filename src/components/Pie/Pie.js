import styles from "./pie.module.css";
import logo from "./Fitness_Logo.png";

function Pie() {
  return (
    <footer className={styles.Pie}>
      <h2>Desarrollado por Hanna Trejo</h2>
      <section className={styles.logoContainer}>
        <img src={logo} alt="Logo ALURAFLIX" />
      </section>
    </footer>
  );
}

export default Pie;
