"use client";
import { useState, useEffect } from "react";
import styles from "../page.module.css";
import Modal from "./modal"; 

export default function LenguajesGrid() {
  const [lenguajes, setLenguajes] = useState([]);
  const [lenguajeActivo, setLenguajeActivo] = useState(null);

  useEffect(() => {
    fetch("/lenguajes.json")
      .then((res) => res.json())
      .then((data) => setLenguajes(data));
  }, []);

  return (
     <div>
    <div className={styles.grid}>
      {lenguajes.map((lenguaje) => (
        <div key={lenguaje.id} className={styles.card}>
          <img src={lenguaje.imagen} alt={lenguaje.nombre} />
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
          <img src={lenguajeActivo.imagen} alt={lenguajeActivo.nombre} />
          <p>{lenguajeActivo.descripcion}</p>
        </div>
      )}
    </Modal>
  </div>
  );
}


