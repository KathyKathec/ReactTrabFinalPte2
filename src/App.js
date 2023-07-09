import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState("");
  const [imagenes, setImagenes] = useState([]); // aca guardo las imagenes
  const [showContent, setShowContent] = useState(false);

  function submitBtn(e) {
    e.preventDefault();
    const ingresaImagen = {
      id: Date.now(), // Generar un ID
      titulo: titulo,
      url: url
    };
    setImagenes([...imagenes, ingresaImagen]);
    setTitulo(""); //limpiar para el proximo dato
    setUrl("");

    setShowContent(true);
  }
  function eliminarPost(id) {
    setImagenes(imagenes.filter((imagen) => imagen.id !== id));
  }
  // la idea es eliminar solo la imagen con ese id, y dejar las otras
  // por eso el !==
  return (
    <div className="App">
      <h1>
        Bem vindo!
        <br />
        Crie aqui seu post:
      </h1>

      <form method="post" onSubmit={submitBtn}>
        <label>
          Escreva aqui seu titulo:
          <input
            type="text"
            name="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <br />
        <label>
          Escreva aqui a URL da imagem:
          <input
            type="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>

        <br />
        <br />
        <button type="submit">Enviar</button>
        <h2>Gato comiendo</h2>
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQA
          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"
          alt="Gato comiendo"
        />
      </form>

      {showContent && (
        <>
          <hr />
          {imagenes.map((imagen) => (
            <div key={imagen.id}>
              <h2 id="title">{imagen.titulo}</h2>
              <img src={imagen.url} alt={imagen.titulo} />
              <br />
              <button type="button" onClick={() => eliminarPost(imagen.id)}>
                Eliminar
              </button>
              <hr />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
