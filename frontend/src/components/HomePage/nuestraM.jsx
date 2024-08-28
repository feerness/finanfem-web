import "./nuestraM.css";

const NuestraMision = () => {
  return (
    <div className="containerM" id="mision">
      <div className="titulo-mision">
        <p>Nuestra Misión</p>
      </div>
      <div className="textos-container">
        <div className="textoM1">
          <div className="iconos">
            <img
              src="/images/coin.png"
              alt="Icono independencia económica"
              className="icon1"
            />
          </div>
          <p>Independencia Financiera:</p>
          <p>
            Aspiramos a lograr la autosuficiencia femenina, donde cada mujer
            tenga la capacidad de administrar de manera competente y consciente
            sus ingresos y gastos, asegurando no solo el bienestar en la vida
            diaria, sino también el crecimiento económico personal y la
            seguridad a largo plazo. Creemos en un futuro donde todas las
            mujeres puedan tomar decisiones financieras informadas que les
            permitan alcanzar sus metas y sueños sin depender de otros.
          </p>
        </div>
        <div className="textoM2">
          <div className="iconos">
            <img
              src="/images/data-analysis.png"
              alt="Icono confianza en la toma de decisiones"
              className="icon2"
            />
          </div>
          <p>Confianza en la Toma de Decisiones:</p>
          <p>
            Aspiramos a construir un entorno en el que las mujeres se sientan
            seguras, capacitadas y respaldadas al tomar decisiones financieras
            cruciales, conscientes del gran impacto que estas tienen en el
            bienestar de toda la familia. El objetivo es asegurar no solo su
            bienestar presente, sino también proteger y fortalecer el futuro de
            sus seres queridos.
          </p>
        </div>
        <div className="textoM3">
          <div className="iconos">
            <img
              src="/images/discussion.png"
              alt="Icono red de solidaridad"
              className="icon3"
            />
          </div>
          <p>Red de Solidaridad:</p>
          <p>
            Contamos con un foro informativo y acogedor, diseñado para que las
            mujeres puedan compartir sus experiencias, sabiduría y consejos,
            fomentando un espacio de aprendizaje mutuo y apoyo incondicional.
            Este entorno promueve el fortalecimiento de vínculos y el
            crecimiento colectivo, donde cada participación contribuye al
            empoderamiento y bienestar de la comunidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NuestraMision;
