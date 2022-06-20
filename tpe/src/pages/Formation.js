import { Link } from "react-router-dom";
import "../App.css";

function Education() {
  return (
    <div className="card_app">
      <div className="tittle">
        <span>Intervención Asistida con Perros</span>
      </div>
      <div className=" texto">
        <p>
          Desde TodoPet apostamos por la formación especializada en IAP.
        </p>
        <p>
        Este es el punto de partida para aquellos profesionales que quieran orientar su actividad profesional en este campo y en la Educación Canina.</p>
        <p>
Actualmente, organizamos y participamos en diferentes eventos formativos que sirvan para dotar de nuevos conocimientos de calidad a nuestro alumnado.
        </p>
      </div>
      <Link to="/">
        <button className="button_links">Atrás</button>
      </Link>
    </div>
  );
}

export default Education;