import React, { useState } from "react";

const MiniLaboratorio = () => {
  const [contador, setContador] = useState(0);
  const [lista, setLista] = useState<[string]>([]);
  const [mensaje, setMensaje] = useState("");

  // Caso 1: clicks rápidos
  const sumar3ClicksRapidos = () => {
    setContador(prev => prev + 1);
    setContador(prev => prev + 1);
    setContador(prev => prev + 1);
  };

  // Caso 2: setTimeout simulado (como una API)
  const sumarConDelay = () => {
    setTimeout(() => {
      setContador(prev => prev + 1); // esto es seguro
    }, 1000);
  };

  // Caso 3: agregar a una lista sin pisarla
  const agregarElemento = () => {
    const nuevoElemento = `Elemento ${lista.length + 1}`;
    setLista(prev => [...prev, nuevoElemento]);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Mini Laboratorio React – Estado Funcional</h2>

      <div>
        <h3>Contador: {contador}</h3>
        <button onClick={sumar3ClicksRapidos}>+3 (clicks rápidos)</button>
        <button onClick={sumarConDelay}>+1 (con retardo)</button>
      </div>

      <hr />

      <div>
        <h3>Lista:</h3>
        <button onClick={agregarElemento}>Agregar Elemento</button>
        <ul>
          {lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <hr />

      <div>
        <h3>Mensaje (input controlado):</h3>
        <input
          type="text"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <p>Texto: {mensaje}</p>
      </div>
    </div>
  );
};

export default MiniLaboratorio;
