import IMG from "../Vista-Te-asisto-Limpia.png";
import { Link } from "react-router-dom";
import "../App.css";

function App() {
  return (
    <div className="app">
      <div className="top_screen">
        <p className="intro">
          En TodoPet somos especialistas en Intervención Asistida con Perros y
          Educación Canina
        </p>
        <div className="button_container">
          <Link to="/intervencion">
            <button className="button_links">
              Intervención asistida con Perros
            </button>
          </Link>
          <Link to="/educacion">
            <button className="button_links">Educación Canina</button>
          </Link>
          <Link to="/formacion">
            <button className="button_links">Formación</button>
          </Link>
          <Link to="/contact">
            <button className="button_links">Contactar</button>
          </Link>
        </div>
      </div>

      <img src={IMG} alt="" />
    </div>
  );
}

export default App;
