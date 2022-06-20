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
          En TodoPet creemos firmemente en las sesiones de adiestramiento y
          educación canina a domicilio. Para nosotros es fundamental trabajar en
          el entorno habitual del perro
        </p>
        <p>
          Queremos hacer feliz a tu perro. Entrena con él y pásatelo en grande.
        </p>
        <p>
          Ofrecemos un servicio personalizado de adiestramiento y educación
          canina a domicilio. Disfruta con tu perro y pasadlo en grande
          aprendiendo
        </p>
      </div>
      <Link to="/">
        <button className="button_links">Atrás</button>
      </Link>
    </div>
  );
}

export default Education;
