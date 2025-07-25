import Image from "next/image";
import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.container__list} key={jugador.id}>
                <div className={styles.jugadorContainer}>
                  <Image
                    src={jugador.foto} 
                    alt={`Foto de ${jugador.nombre}`}
                    width={200}
                    height={200}
                    className={styles.fotoJugador}
                  />
                  <div>
                    <strong>{jugador.nombre}</strong>
                    <p>
                      Altura: {jugador.Altura} m <br />
                      Peso: {jugador.Peso} Kg
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        {
          id: 1,
          nombre: "Eden Hazard",
          Altura: "1.75",
          Peso: "74",
          foto: "/imagenes/hazard.jpg", 
        },
        {
          id: 2,
          nombre: "Gonzalo García",
          Altura: "1.82",
          Peso: "74",
          foto: "/imagenes/gonzalogarcia.jpg",
        },
        {
          id: 3,
          nombre: "Karim Benzema",
          Altura: "1.85",
          Peso: "81",
          foto: "/imagenes/benzema.jpg",
        },
      ],
    },
    {
      id: 2,
      nombre: "Barcelona",
      plantilla: [
        {
          id: 1,
          nombre: "Marc-André ter Stegen",
          Altura: "1.75",
          Peso: "74",
          foto: "/imagenes/terStegen.jpg",
        },
        {
          id: 2,
          nombre: "Iñigo Martínez",
          Altura: "1.82",
          Peso: "74",
          foto: "/imagenes/martinez.jpg",
        },
        {
          id: 3,
          nombre: "Gavi",
          Altura: "1.85",
          Peso: "81",
          foto: "/imagenes/gavi.jpg",
        },
      ],
    },
  ];

  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}

