import { useState } from "react";
import "./App.css";
import MenuBar from "./Menubar";

function App() {
  return (
    <>
      <div id="contenedorprimario">
        <MenuBar />
        <div id="prtxtsubir">
          <div id="txtsubir">
            <div id="stxt">Sube tu archivo</div>
            <Inputshow />
          </div>
        </div>
      </div>
    </>
  );
}

function Inputshow() {
  const [file, setFile] = useState(null);
  const [filecontent, setFileContent] = useState("");

  function manejoFile(e) {
    if (e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const lector = new FileReader();
      lector.onload = (event) => {
        setFileContent(event.target.result);
      };

      lector.readAsText(selectedFile);
    }
  }

  return (
    <div className="shows">
      <input type="file" id="fileInput" accept=".txt" onChange={manejoFile} />
      {file && (
        <div className="show">
          <p className="Nombretxt">El nombre del archivo es "{file.name}"</p>
          <p className="Nombretxtc">El contenido es:</p>
          <p className="Contenido" onClick={(e) => editFile(e)}>
            {filecontent}
          </p>
        </div>
      )}
    </div>
  );
}

const editFile = (e) => {
  const [file, setFile] = useState[""];
  const [fileeditado, setFileeditado] = useState[false];
  const valores = e.target.value;
  setFile(valores);
};

export default App;
