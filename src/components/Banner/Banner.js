import styles from "./Banner.module.css";
import bannerImage from "./Banner.png";

function Banner({ color }) {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className={styles.gradient} style={{ background: `${color}` }}></div>
      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MRWgvXbvAaw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Banner;