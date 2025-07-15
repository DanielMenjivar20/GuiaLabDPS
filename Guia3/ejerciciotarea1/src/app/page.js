'use client'; 

import React, { useState, useEffect } from "react";
import styles from './page.module.css';

function Tabs({ planeta }) {
  const [tab, setTab] = useState("masa");

  if (!planeta) return <p>Selecciona un planeta para ver su información</p>;

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <button onClick={() => setTab("masa")}>Masa</button>
        <button onClick={() => setTab("distancia")}>Distancia al Sol</button>
        <button onClick={() => setTab("temperatura")}>Temperatura</button>
      </div>
      <div style={{ border: "1px solid #ccc", padding: 10 }}>
        {tab === "masa" && <p><strong>Masa:</strong> {planeta.masa}</p>}
        {tab === "distancia" && <p><strong>Distancia al Sol:</strong> {planeta.distancia}</p>}
        {tab === "temperatura" && <p><strong>Temperatura:</strong> {planeta.temperatura}</p>}
      </div>
    </div>
  );
}

export default function Page() {
  const [planetas, setPlanetas] = useState([]);
  const [seleccionado, setSeleccionado] = useState(null);

  useEffect(() => {
    fetch("/planetas.json")
      .then((res) => res.json())
      .then((data) => setPlanetas(data))
      .catch((err) => console.error("Error cargando JSON:", err));
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: "auto", fontFamily: "Arial, sans-serif", padding: 20 }}>
      <h1>Sistema Solar</h1>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: 10,
          paddingBottom: 10,
          borderBottom: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        {planetas.map((p) => (
          <div
            key={p.nombre}
            onClick={() => setSeleccionado(p)}
            style={{
              flex: "0 0 auto",
              border: seleccionado?.nombre === p.nombre ? "3px solid #0070f3" : "3px solid transparent",
              borderRadius: 8,
              padding: 4,
              minWidth: 110,
              textAlign: "center",
              transition: "border-color 0.3s",
            }}
          >
            <img
              src={p.imagen}
              alt={p.nombre}
              style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 6 }}
            />
            <p style={{ marginTop: 4 }}>{p.nombre}</p>
          </div>
        ))}
      </div>

      <section style={{ marginTop: 30 }}>
        <Tabs planeta={seleccionado} />
      </section>
    </div>
  );
}
