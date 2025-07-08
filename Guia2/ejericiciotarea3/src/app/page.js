"use client";

import React, { useState } from "react";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

 
  const usuarioValido = "admin";
  const contrasenaValida = "12345";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === usuarioValido && contrasena === contrasenaValida) {
      setMensaje(`¡Bienvenido, ${usuario}!`);
    } else {
      setMensaje("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          required
        />
        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Iniciar sesión
        </button>
      </form>

      {mensaje && <p style={{ marginTop: "20px", fontWeight: "bold" }}>{mensaje}</p>}
    </div>
  );
}

export default Login;
