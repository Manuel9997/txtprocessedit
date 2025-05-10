import { useState } from "react";
import "./App.css";
import MenuBar from "./Menubar";

var CONTADOR = 0;

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

function subirArchivo(text) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    content: text,
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  fetch("http://localhost:8000/upload-file", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      CONTADOR++;
      alert(
        "Documento guardado como archivo" +
          CONTADOR +
          " en la carpeta archivostxt"
      );
    })
    .catch((error) => console.error(error));
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
          <textarea
            value={filecontent}
            className="txtArea"
            onChange={(e) => setFileContent(e.target.value)}
          ></textarea>
          <button onClick={() => subirArchivo(filecontent)}>Enviar</button>
        </div>
      )}
    </div>
  );
}

export default App;
