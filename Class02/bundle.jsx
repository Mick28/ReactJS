import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// Componente ProductoList
function ProductoList({ productos }) {
  return (
    <ol className="productos-lista">
      {productos.map((producto, index) => (
        <li key={index}>{producto}</li>
      ))}
    </ol>
  );
}

// Componente Tarjeta
function Tarjeta({ titulo, descripcion, botonTexto }) {
  return (
    <div className="tarjeta">
      <h2>{titulo}</h2>
      <p className="descripcion">{descripcion}</p>
      <button className="boton">{botonTexto}</button>
    </div>
  );
}

// Componente Boton (un ejemplo simple de botón estilizado)
function Boton({ texto, onClick }) {
  return (
    <button className="boton" onClick={onClick}>
      {texto}
    </button>
  );
}

// Componente principal App
function App() {
  const productos = ["Manzanas", "Peras", "Naranjas"];
  const handleClick = () => {
    alert("Botón clickeado!");
  };

  return (
    <div className="container">
      <h1>Lista de Productos</h1>
      <ProductoList productos={productos} />
      
      <Tarjeta
        titulo="Oferta especial"
        descripcion="20% de descuento en todos los productos"
        botonTexto="Ver más"
      />
      
      <h2>Acciones</h2>
      <Boton texto="Acción 1" onClick={handleClick} />
      <Boton texto="Acción 2" onClick={handleClick} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
