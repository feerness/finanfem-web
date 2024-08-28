
import HomeImage from "../components/HomePage/homeImage";
import PrimerCarruselH from "../components/HomePage/carruselH";
import InfoNosotras from "../components/HomePage/infoF";
import NuestraMision from "../components/HomePage/nuestraM";
import BarraContadores from "../components/HomePage/barraContadores";
import PreguntasFrecu from "../components/HomePage/preguntasFrecuentes";


function HomePage() {
  return (
    <div id="home" >
      <HomeImage />
      <PrimerCarruselH />
      <InfoNosotras />
      <NuestraMision />
      <BarraContadores />
      <PreguntasFrecu />
    </div>
  );
}

export default HomePage;