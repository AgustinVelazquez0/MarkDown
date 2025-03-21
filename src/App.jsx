import React, { useState, useEffect } from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import "./App.css";

// Define el valor markdown por defecto
const DEFAULT_MARKDOWN = `# Título grande (H1)
## Subtítulo (H2)
[Enlace de ejemplo](https://www.freecodecamp.org)
\`Código en línea\`
\`\`\`
Bloque de código
\`\`\`
- Elemento de lista
> Cita en bloque
![Imagen de React](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
**Texto en negrita**
`;

const App = () => {
  // Leer el contenido de markdown desde el localStorage o usar el valor por defecto
  const storedMarkdown = localStorage.getItem("markdown");
  const initialMarkdown = storedMarkdown ? storedMarkdown : DEFAULT_MARKDOWN;

  const [markdown, setMarkdown] = useState(initialMarkdown);

  // Guardar el contenido de markdown en el localStorage cada vez que se actualice
  useEffect(() => {
    localStorage.setItem("markdown", markdown);
  }, [markdown]);

  return (
    <div className="app">
      <h1>MARKDOWN TO HTML</h1>
      <h3>
        ¡Crea un markdown y se transcribirá automáticamente como si fuera un
        código HTML!
      </h3>
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Preview markdown={markdown} />
    </div>
  );
};

export default App;
