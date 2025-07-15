"use client";
import React, { useState, useEffect } from "react";
import Product from "./Todo";
import styles from "../app/page.module.css";

const Form = () => {
  const [product, setProduct] = useState({
    nombre: "",
    marca: "",
    cantidad: "",
    precio: "",
  });

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    const { nombre, marca, cantidad, precio } = product;

    if (
      nombre.trim() === "" ||
      marca.trim() === "" ||
      cantidad.trim() === "" ||
      precio.trim() === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const newProduct = {
      ...product,
      cantidad: parseFloat(product.cantidad),
      precio: parseFloat(product.precio),
    };

    setProducts([...products, newProduct]);

    setProduct({
      nombre: "",
      marca: "",
      cantidad: "",
      precio: "",
    });
  };

  const handleDelete = (index) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  useEffect(() => {
    const totalCompra = products.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
    setTotal(totalCompra);
  }, [products]);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <h3>Agregar Producto</h3>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          value={product.nombre}
          onChange={handleChange}
          className={styles.form_input}
        />
        <input
          type="text"
          name="marca"
          placeholder="Marca"
          value={product.marca}
          onChange={handleChange}
          className={styles.form_input}
        />
        <input
          type="number"
          name="cantidad"
          placeholder="Cantidad"
          value={product.cantidad}
          onChange={handleChange}
          className={styles.form_input}
        />
        <input
          type="number"
          step="0.01"
          name="precio"
          placeholder="Precio"
          value={product.precio}
          onChange={handleChange}
          className={styles.form_input}
        />
        <button className={styles.form_button} onClick={handleAdd}>
          Agregar a la lista
        </button>
      </form>

      <h2>Lista de Compras</h2>
      {products.length === 0 && <p>No hay productos agregados.</p>}
      {products.map((item, index) => (
        <Product
          key={index}
          producto={item}
          index={index}
          handleDelete={handleDelete}
        />
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>
    </>
  );
};

export default Form;
