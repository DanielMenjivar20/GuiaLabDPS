import styles from './page.module.css';
import LenguajesGrid from "./components/LenguajesGrid";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lenguajes de Programación</h1>
      <LenguajesGrid />
    </div>
  );
}


