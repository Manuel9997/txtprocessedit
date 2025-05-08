import { useState } from "react";
import "./App.css";
import MenuBar from "./Menubar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="contenedorprimario">
        <MenuBar />
        <div id="prtxtsubir">
          <div id="txtsubir">
            <div id="stxt">Sube tu archivo</div>
            <input type="file" id="fileInput" accept=".txt" />
            <Buttonsend />
          </div>
        </div>
        <Mostrar />
      </div>
    </>
  );
}

function Buttonsend() {
  return <button className="Procesar">Procesar</button>;
}

function Mostrar() {
  return <div className="show"></div>;
}

export default App;
