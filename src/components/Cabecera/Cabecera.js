import { Link } from "react-router-dom";
import styles from "./cabecera.module.css";
import logo from "./Fitness_Logo.png"
import CabeceraLink from "components/CabeceraLink/CabeceraLink";

function Cabecera() {
  return (
    <header className={styles.Cabecera}>
      <Link to="/">
        <section className={styles.logoContainer}>
          <img src={logo} alt="Logo Fitness" /> <span></span>
        </section>
      </Link>
      <nav>
        <CabeceraLink url="/">Home</CabeceraLink>
        <CabeceraLink url="/nuevo-video">Nuevo Video</CabeceraLink>
      </nav>
    </header>
  );
}

export default Cabecera;


