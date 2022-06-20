import { Link } from "react-router-dom";
import "../App.css";

function Intervention() {
  return (
    <div className="card_app">
      <div className="tittle">
        <span>Intervención Asistida con Perros</span>
      </div>
      <div className=" texto">
        <p>
          En TodoPet estamos especializados en el desarrollo de programas de
          Intervenciones Asistidas con Perros (IAP).
        </p>
        <p>
          Nuestro equipo de profesionales humanos y caninos disponen de una
          amplia experiencia y formación en el sector
        </p>
        <p>
          Contacta con nosotros y asesórate sobre la forma de trabajo con perros
          que mejor se adapte a tus necesidades
        </p>
      </div>
      <Link to="/">
        <button className="button_links">Atrás</button>
      </Link>
    </div>
  );
}

export default Intervention;
