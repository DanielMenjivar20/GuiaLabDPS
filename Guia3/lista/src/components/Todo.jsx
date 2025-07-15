import React from "react";
import styles from "../app/page.module.css";

const Product = ({ producto, index, handleDelete }) => {
  return (
    <div className={styles.list}>
      <p>
        <strong>{producto.nombre}</strong> - {producto.marca} <br />
        Cantidad: {producto.cantidad} <br />
        Precio: ${producto.precio} <br />
        Subtotal: ${(producto.cantidad * producto.precio).toFixed(2)}
      </p>
      <button className={styles.btn_delete} onClick={() => handleDelete(index)}>
        Eliminar
      </button>
    </div>
  );
};

export default Product;
