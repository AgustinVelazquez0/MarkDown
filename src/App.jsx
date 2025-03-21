import React, { useState, useEffect } from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import "./App.css";

// Define el valor markdown por defecto
const DEFAULT_MARKDOWN = `# Un hermoso paisaje

¡Mira esta increíble imagen de un paisaje!

![Paisaje Hermoso](https://files.algoreducation.com/production-ts/__S3__4c06b78a-746f-4597-a264-0fec8d25976f)

Este paisaje se encuentra en un lugar increíble, lleno de colores vibrantes y naturaleza impresionante. La armonía entre el cielo y la tierra te transporta a un mundo lleno de serenidad.

## Más detalles sobre el paisaje

Este tipo de paisajes se encuentran comúnmente en áreas rurales o en parques nacionales, donde la naturaleza aún no ha sido modificada por la intervención humana. Las montañas, los ríos y la vegetación crean una escena impresionante que parece sacada de una pintura.

Si alguna vez tienes la oportunidad de visitar un lugar como este, asegúrate de llevar tu cámara para capturar su belleza. Los amaneceres y atardeceres en estos lugares son especialmente hermosos.

![Montaña](https://st2.depositphotos.com/1695244/49975/i/450/depositphotos_499756326-stock-photo-cgi-snowy-mountain-range-winter.jpg)

## Reflexión

La naturaleza tiene el poder de inspirarnos y calmarnos. A veces, alejarse del bullicio de la vida cotidiana y sumergirse en la tranquilidad de la naturaleza es justo lo que necesitamos para encontrar paz interior.

---

Fuente: [Unsplash](https://unsplash.com)

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
