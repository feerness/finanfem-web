
import HomeImage from "../components/HomePage/homeImage";
import PrimerCarruselH from "../components/HomePage/carruselH";
import InfoNosotras from "../components/HomePage/infoF";
import NuestraMision from "../components/HomePage/nuestraM";
import BarraContadores from "../components/HomePage/barraContadores";
import PreguntasFrecu from "../components/HomePage/preguntasFrecuentes";
import CajaR from "../components/HomePage/formsHome";


function HomePage() {
  return (
    <div>
      <div id= "home" ><HomeImage /></div>
      <div id= "carrusel1" ></div><PrimerCarruselH />
      <div id= "nosotras" ></div><InfoNosotras />
      <div id="nuestramision"><NuestraMision /></div>
      <div id= "contadores" ></div><BarraContadores />
      <div id= "contacto" ></div><CajaR />
      <div id= "faq" ></div><PreguntasFrecu />
    </div>
  );
}

export default HomePage;