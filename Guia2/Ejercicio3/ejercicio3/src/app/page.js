"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");

  const validarNumeros = () => {
    if (numero1 === "" || isNaN(numero1)) return false;
    if (numero2 === "" || isNaN(numero2)) return false;
    return true;
  };

  const sumar = () => {
    if (!validarNumeros()) return setResultado("Ingresa números válidos.");
    const res = parseFloat(numero1) + parseFloat(numero2);
    setResultado(`Resultado de la suma: ${res}`);
  };

  const restar = () => {
    if (!validarNumeros()) return setResultado("Ingresa números válidos.");
    const res = parseFloat(numero1) - parseFloat(numero2);
    setResultado(`Resultado de la resta: ${res}`);
  };

  const multiplicar = () => {
    if (!validarNumeros()) return setResultado("Ingresa números válidos.");
    const res = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicación: ${res}`);
  };

  const dividir = () => {
    if (!validarNumeros()) return setResultado("Ingresa números válidos.");
    if (parseFloat(numero2) === 0)
      return setResultado("Error: No se puede dividir por cero.");
    const res = parseFloat(numero1) / parseFloat(numero2);
    setResultado(`Resultado de la división: ${res}`);
  };

  const potenciar = () => {
    if (!validarNumeros()) return setResultado("Ingresa números válidos.");
    const res = Math.pow(parseFloat(numero1), parseFloat(numero2));
    setResultado(`Resultado de la potenciación: ${res}`);
  };

  const raizCuadrada = () => {
    if (numero1 === "" || isNaN(numero1))
      return setResultado("Ingresa un número válido en el campo 1.");
    const n = parseFloat(numero1);
    if (n < 0) return setResultado("No se puede calcular la raíz de un número negativo.");
    const res = Math.sqrt(n);
    setResultado(`Raíz cuadrada de ${n}: ${res}`);
  };

  const limpiar = () => {
    setNumero1("");
    setNumero2("");
    setResultado("");
  };

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <h2 className={styles.title}>Calculadora</h2>

        <div className={styles.numeros}>
          <label className={styles.text}>Número 1:</label>
          <input
            className={styles.inputnum}
            type="number"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />
        </div>

        <div className={styles.numeros}>
          <label className={styles.text}>Número 2:</label>
          <input
            className={styles.inputnum}
            type="number"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
        </div>

        <div className={styles.botones}>
          <button className={styles.button} onClick={sumar}>Sumar</button>
          <button className={styles.button} onClick={restar}>Restar</button>
          <button className={styles.button} onClick={multiplicar}>Multiplicar</button>
          <button className={styles.button} onClick={dividir}>Dividir</button>
          <button className={styles.button} onClick={potenciar}>Potencia</button>
          <button className={styles.button} onClick={raizCuadrada}>Raíz Cuadrada</button>
          <button className={styles.botonLimpiar} onClick={limpiar}>Limpiar</button>
        </div>

        {resultado && <div className={styles.resultado}>{resultado}</div>}
      </div>
    </main>
  );
}
