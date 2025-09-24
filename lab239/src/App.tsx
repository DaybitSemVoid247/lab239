import { useState } from 'react'

import './App.css'

function App() {
  const [bn, setBn]= useState<boolean>(true);

  return (
    <div
  className="p-2"
  style={!bn?{ backgroundColor: "#fff", color: "#111" }:{ backgroundColor: "#111", color: "#fff" }}
  >
  <h3>{!bn ? "Modo Claro" : "Modo Oscuro"}</h3>
  <h2>Este bloque cambia sus estilos usando un booleano en el estado</h2>
  <button
    onClick={() => setBn(!bn)}
    >Cambiar a {!bn ? "Modo Oscuro" : "Modo Claro"}</button>
</div>

  );
}

export default App
