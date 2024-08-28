import { useTranslation } from "react-i18next";
import "./Terminos.css";

const Terminos = () => {
  const { t } = useTranslation();
  return (
    <div className="body-container3">
      <div className="orden-div3">
        <div className="lateral3">
          <a href="#terminos-uso">
            <h4>{t('Términos de Uso de FinanFem')}</h4>
          </a>
          <a href="#objeto-foro">
            <p>{t('Objetivo del Foro')}</p>
          </a>
          <a href="#responsabilidad-uso">
            <p>{t('Responsabilidad de Uso')}</p>
          </a>
          <a href="#modificacion-condiciones">
            <p>{t('Modificación de Condiciones')}</p>
          </a>
          <a href="#funcionamiento-foro">
            <p>{t('Funcionamiento del Foro')}</p>
          </a>
          <a href="#enlaces-externos">
            <p>{t('Enlaces Externos')}</p>
          </a>
          <a href="#uso-web">
            <p>{t('Uso de la Web')}</p>
          </a>
          <a href="#propiedad-intelectual">
            <p>{t('Propiedad Intelectual')}</p>
          </a>
          <a href="#normas-convivencia">
            <h4>{t('Normas de Convivencia de FinanFem')}</h4>
          </a>
          <a href="#respeto-amabilidad">
            <p>{t('Respeto y Amabilidad')}</p>
          </a>
          <a href="#contenido-apropiado">
            <p>{t('Contenido Apropiado')}</p>
          </a>
          <a href="#publicacion-mensajes">
            <p>{t('Publicación de Mensajes')}</p>
          </a>
          <a href="#derechos-autor">
            <p>{t('Derechos de Autor y Propiedad Intelectual')}</p>
          </a>
          <a href="#moderacion">
            <p>{t('Moderación')}</p>
          </a>
          <a href="#consecuencias-infracciones">
            <p>{t('Consecuencias de Infracciones')}</p>
          </a>
          <a href="#cambios-normas">
            <p>{t('Cambios en las Normas')}</p>
          </a>
        </div>

        <div className="container23">
          <div className="titulo13" id="terminos-uso">
            <h2>{t('Términos de Uso de FinanFem')}</h2>
            <p>{t('8 de Julio del 2024')}</p>
          </div>
          <div className="cuerpo13">
            <h3 id="objeto-foro">{t('Objetivo del Foro')}</h3>
            <p> {t('El objetivo de la página FinanFem.com es establecer un foro en el que se permita la comunicación entre los usuarios, quienes podránintercambiar información, opiniones y archivos.')} </p>
            <h3 id="responsabilidad-uso">{t('Responsabilidad de Uso')}</h3>
            <p>
              {t('Tanto el acceso a esta página web, como el uso que pueda hacerse de la información y contenidos incluidos en la misma o accesibles desde ella, será de exclusiva responsabilidad de quien lo realice, sin que FinanFem.com pueda tener responsabilidad alguna por dichos usos.')}
            </p>
            <h3 id="modificacion-condiciones">{t('Modificación de Condiciones')}</h3>
            <p>
              {t('FinanFem.com se reserva el derecho de modificar las condiciones legales que se exponen en este documento sin previo aviso.')}
            </p>
            <h3 id="funcionamiento-foro">{t('Funcionamiento del Foro')}</h3>
            <p>
              {t('El foro se rige por unas condiciones que el usuario deberá aceptar antes de proceder a su registro. La aceptación de tales condiciones supone que el usuario es mayor de 16 años y que hará un uso de los servicios de conformidad con lo expuesto en las mismas, siendo responsable de todo acceso y uso que haga de la web.')}
            </p>
            <h3 id="enlaces-externos">{t('Enlaces Externos')}</h3>
            <p>
              {t('El propietario del sitio web no se hace responsable de aquellos otros sitios web u archivos a los que sea posible acceder a través de enlaces de hipertexto (links) disponibles entre sus contenidos, dado que dichas páginas enlazadas son responsabilidad de sus respectivos titulares. Esta página, por tanto, ni aprueba, ni hace suyos los productos, servicios, contenidos, información, datos, archivos y cualquier clase de material existente en tales páginas web o archivos y no controla ni se hace responsable de la calidad, licitud, fiabilidad y utilidad de la información contenidos y servicios existentes en los sitios enlazados y que son ajenos a esta página.')}
            </p>
            <p>
              {t('En el caso de que se estime oportuno o de que un órgano competente declare la ilicitud de los datos, ordenado su retirada o que se imposibilite el acceso a los mismos, o se hubiera declarado la existencia de la lesión, y se nos haya notificado expresamente la correspondiente resolución, los enlaces que se indiquen serían inmediatamente retirados.')}
            </p>
            <h3 id="uso-web">{t('Uso de la Web')}</h3>
            <p>
              {t('El Usuario se compromete a hacer un uso adecuado y lícito del sitio web y de los Contenidos, de conformidad con la Legislación aplicable, las presentes Condiciones Generales de Uso del sitio web, la moral y buenas costumbres generalmente aceptadas y el orden público, obligándose a indemnizar a FinanFem.com por cualquier daño o perjuicio que pudiera ocasionar por el uso de esta web, infringiendo estas condiciones generales y/o la legalidad vigente. El Usuario deberá abstenerse de:')}            </p>
            <ul className="ul3">
              <li>
                {t('Hacer un uso no autorizado o fraudulento del website y/o de los Contenidos con fines o efectos ilícitos.')}
              </li>
              <li>
                {t('Acceder o intentar acceder a recursos o áreas restringidas del website, sin cumplir las condiciones exigidas para dicho acceso.')}
              </li>
              <li>
                {t('Introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar daños en los sistemas físicos o lógicos del propietario del dominio, de sus proveedores o de terceros.')}              </li>
              <li>
                {t('Intentar acceder, utilizar y/o manipular los datos del propietario del dominio, terceros proveedores y otros usuarios.')}
              </li>
              <li>
                {t('Suprimir, ocultar o manipular las notas sobre derechos de propiedad intelectual o industrial y demás datos identificativos de los derechos del titular del website o de terceros incorporados a los Contenidos, así como los dispositivos técnicos de protección o cualesquiera mecanismos de información que puedan insertarse en los Contenidos.')}              </li>
              <li>
                {t('Obtener e intentar obtener los Contenidos empleando para ello medios o procedimientos distintos de los que, según los casos, se hayan puesto a su disposición a este efecto o se hayan indicado expresamente en las páginas web donde se encuentren los Contenidos o, en general, de los que se empleen habitualmente en Internet por no entrañar un riesgo de daño o inutilización del que puedan insertarse en los Contenidos. Website y/o de los Contenidos.')}
              </li>
            </ul>
            <h3 id="propiedad-intelectual">{t('Propiedad Intelectual')}</h3>
            <p>
              {t('La presente página web, incluyendo el código fuente y los contenidos elaborados por su titular o sus colaboradores, están protegidos por la normativa nacional e internacional vigente sobre propiedad intelectual, encontrándose todos los derechos reservados, de forma que el usuario se encuentra facultado únicamente para efectuar la navegación a través de las páginas para su visualización como uso privado.')}
            </p>
            <p>
              {t('Los contenidos de esta web han sido enviados por los usuarios de esta página. Si se considera que alguno de los contenidos de esta página infringe los derechos de autor, rogamos nos sea comunicado a través de nuestro formulario de contacto para proceder a retirarlo.')}
            </p>
          </div>

          <div className="titulo23" id="normas-convivencia">
            <h2>{t('Normas de Convivencia de FinanFem')}</h2>
            <p>{t('8 de Julio del 2024')}</p>
          </div>
          <div className="cuerpo23">
            <h3 id="respeto-amabilidad">{t('Respeto y Amabilidad')}</h3>
            <ul className="ul3">
              <li>
                {t('Todos los miembros del foro deben tratarse con respeto y cortesía.')}
              </li>
              <li>
                {t('No se tolerarán insultos, comentarios despectivos, ni ataques personales.')}
              </li>
              <li>
                {t('Las discusiones deben ser constructivas y centrarse en el tema, no en las personas.')}
              </li>
            </ul>
            <h3 id="contenido-apropiado">{t('Contenido Apropiado')}</h3>
            <ul className="ul3">
              <li>
                {t('No se permite la publicación de contenido ofensivo, obsceno, ilegal o que incite al odio.')}
              </li>
              <li>
                {t('Evita compartir información personal tuya o de otros sin su consentimiento.')}
              </li>
            </ul>
            <h3 id="publicacion-mensajes">{t('Publicación de Mensajes')}</h3>
            <ul className="ul3">
              <li>
                {t('Publica tus mensajes en el subforo adecuado y asegúrate de que el título sea claro y descriptivo.')}
              </li>
              <li>
                {t('No hagas spam ni publiques repetidamente el mismo mensaje.')}
              </li>
              <li>
                {t('Usa un lenguaje claro y comprensible, evitando el uso excesivo de mayúsculas y abreviaturas.')}
              </li>
            </ul>
            <h3 id="derechos-autor">
              {t('Derechos de Autor y Propiedad Intelectual')}
            </h3>
            <ul className="ul3">
              <li>
                {t('Respeta los derechos de autor. No publiques contenido que no te pertenezca sin el permiso adecuado.')}
              </li>
              <li>
                {t('Cita las fuentes cuando compartas información o contenido de terceros.')}
              </li>
            </ul>
            <h3 id="moderacion">{t('Moderación')}</h3>
            <ul className="ul3">
              <li>
                {t('Los moderadores tienen la autoridad para editar, mover o eliminar mensajes que no cumplan con estas normas.')}
              </li>
              <li>
                {t('Las decisiones de los moderadores son finales y deben ser respetadas.')}
              </li>
            </ul>
            <h3 id="consecuencias-infracciones">
              {t('Consecuencias de Infracciones')}
            </h3>
            <ul className="ul3">
              <li>
                {t('Las violaciones a estas normas pueden resultar en advertencias, suspensión temporal o expulsión definitiva del foro.')}
              </li>
              <li>
                {t('La gravedad de la infracción determinará la medida disciplinaria aplicada.')}
              </li>
            </ul>
            <h3 id="cambios-normas">{t('Cambios en las Normas')}</h3>
            <ul className="ul3">
              <li>
                {t('Nos reservamos el derecho de modificar estas normas en cualquier momento. Los cambios serán comunicados oportunamente.')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminos;
