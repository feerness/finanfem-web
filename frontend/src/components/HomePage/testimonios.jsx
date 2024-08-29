import './testimonios.css';

const testimonials = [
  {
    name: "Valeria Moreno",
    company: "Profesora Gral. Básica",
    text: "Mi búsqueda por conseguir la casa propia me hizo llegar hasta Finanfem. Ellas me ayudaron a manejar mis ingresos y ahorros para poder lograr encontrar un lugar en donde quería. Hoy ya me encuentro viviendo en mi hogar y estoy muy agradecida por todo el conocimiento y apoyo que me entregaron mis tutoras y las chicas de la comunidad.",
    image: "/images/mujer-1.jpg"
  },
  {
    name: "Susana Bascur",
    company: "Masoterapeuta",
    text: "Soy terapeuta desde hace años y estuve mucho tiempo soñando con tener mi espacio de terapias. Al unirme a la comunidad de Finanfem he conocido a muchas mujeres las cuales me han dado tips sobre ahorro, subsidios y créditos. Haciendo subir mis ingresos estos últimos meses logrando por fin mudarme a un lugar más amplio en donde pueda ejercer mi profesión. Agradecida por el inmenso apoyo y conocimiento que me entregaron. Gracias a todas!!",
    image: "/images/mujer-2.jpg"
  },
  {
    name: "Adriel Fuentes",
    company: "Ilustrador ",
    text: "Dedicarse al arte ha sido difícil y decidí hacer este proceso más agradable. Por eso decidí aprender sobre ahorro e inversiones y una amiga me recomendó Finanfem. Me uní a su foro y conocí mujeres increíbles de mi misma área en las que me pude apoyar y crecer. Actualmente con una de ellas tenemos un negocio en conjunto y encontramos un espacio para hacer nuestro arte. Todo esto gracias a los consejos financieros y tips de las chicas de la comunidad.",
    image: "/images/mujer-3.jpg"
  },
  {
    name: "Pamela Morgado",
    company: "Diseñadora Gráfica",
    text: "Siempre tuve la creencia de que debía ser muy buena en matemáticas para aprender sobre finanzas e invertir. Hasta que conocí a las chicas de Finanfem, muy agradecida por ayudarme con mi autoestima y lograr que confíe en mí misma. Hoy tengo la base para optar a mi primer crédito hipotecario para mi casa propia. Por años estuve arrendando y hoy estoy a pasos de tener algo mío por primera vez. Agradecida a mil por todo lo que han hecho por mi son unas máximas!!",
    image: "/images/mujer-4.jpg"
  },
  {
    name: "Carla Orrego",
    company: "Tecnóloga Médica",
    text: "Me independicé hace 1 año y me costaba mucho manejar mi dinero para que me sobrara y así poder ahorrar. Hace un tiempo que quiero realizar un proyecto y no se ha podido concretar por temas de dinero. Estuve frustrada por mucho tiempo hasta que decidí aprender y encontré a Finanfem. Ha sido increíble lo mucho que he aprendido y cómo ha cambiado mi forma de pensar y hacer todo. Mi proyecto ya está en marcha gracias a esta experiencia que recomiendo un montón para toda mujer que se sienta un poco perdida y sola.",
    image: "/images/mujer-5.jpg"
  },
  {
    name: "Nicole Leal",
    company: "Ing. Comercio Exterior",
    text: "Desde hace un tiempo que trabajó en el aeropuerto en los envíos y recibos de exportaciones e importaciones. Por mi labor fue que comencé a informarme más sobre finanzas y llegué con Finanfem. En donde aprendí mucho sobre las inversiones y he logrado ascender en mi trabajo gracias a estas mujeres. Mis cambios han sido gigantes y han sido un beneficio no solo para mi sino también para mi familia. Espero que más chicas se animen y logren sus metas como yo.",
    image: "/images/mujer-6.jpg"
  },
  {
    name: "Sofia Wangnet",
    company: "Trabajadora social",
    text: "Trabajo en un centro para mujeres vulnerables y llegar a Finanfem ha sido maravilloso. Estuve buscando un lugar en donde las chicas de mi trabajo pudieran tener acceso a una educación financiera. Y acá nos han recibido de forma muy amorosa y con un apoyo increíble. Esta experiencia ha cambiado mucho la vida de muchas mujeres y esperamos que sean muchas más. Gracias infinitas por su dedicación.",
    image: "/images/mujer-7.jpg"
  },
  {
    name: "Nelda Pérez",
    company: "Corredora de propiedades",
    text: "Mi trabajo está muy ligado al mundo de las inversiones y decidí comenzar un nuevo proyecto en donde le ayudo a las mujeres aprender a invertir en propiedades. Cuando descubrí el trabajo que hace Finanfem, me dije a mi misma debo ser parte de esto, son mujeres con el mismo pensamiento que yo. Y fue así que hoy pertenezco al maravilloso equipo de este lindo grupo. Las invito a todas a perder el miedo a invertir y aprender sobre finanzas todas podemos!!",
    image: "/images/mujer-8.jpg"
  }
];

const TestimonialsCarousel = () => {
  return (
    <div className="carousel-testimonials-container">
      <h2 className="carousel-testimonial-titulo">Conviértete en nuestra próxima historia de éxito.</h2>
      <div className="carousel-testimonials-wrapper">
        {testimonials.map((testimonial, index) => (
          <div className="carousel-testimonial-card" key={index}>
            <div className="carousel-testimonial-content">
              <img src={testimonial.image} alt={testimonial.name} className="carousel-testimonial-image" />
              <h3 className="carousel-testimonial-name">{testimonial.name}</h3>
              <h4 className="carousel-testimonial-title">{testimonial.company}</h4>
              <p className="carousel-testimonial-text">"{testimonial.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
