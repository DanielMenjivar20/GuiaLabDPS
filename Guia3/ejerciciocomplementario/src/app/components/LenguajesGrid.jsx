"use client";
import { useState } from 'react';
import styles from '../page.module.css';
import Modal from './Modal';

const lenguajes = [
  {
    id: 1,
    nombre: "JavaScript",
    descripcion: "JavaScript es un lenguaje de programación ampliamente utilizado para el desarrollo web, que permite crear páginas web dinámicas e interactivas."
  },
  {
    id: 2,
    nombre: "Python",
    descripcion: "Python es conocido por su sintaxis clara, legible y sencilla, lo que lo hace ideal para principiantes y expertos por igual.  Es un lenguaje versátil usado en desarrollo web, ciencia de datos, inteligencia artificial, automatización, análisis estadístico, y muchas otras áreas."
  }
];

export default function LenguajesGrid() {
  const [lenguajeActivo, setLenguajeActivo] = useState(null);

  return (
    <div>
      <div className={styles.grid}>
        {lenguajes.map((lenguaje) => (
          <div key={lenguaje.id} className={styles.card}>
            <h2>{lenguaje.nombre}</h2>
            <button
              className={styles.button}
              onClick={() => setLenguajeActivo(lenguaje)}
            >
              Ver más
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={!!lenguajeActivo} onClose={() => setLenguajeActivo(null)}>
        {lenguajeActivo && (
          <div>
            <h2>{lenguajeActivo.nombre}</h2>
            <p>{lenguajeActivo.descripcion}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}



