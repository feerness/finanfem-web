import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const ArticleCard = ({ title, image, description, link }) => {

    return (
        <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text flex-grow-1">{description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Leer más</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
ArticleCard.propTypes = {
    title: PropTypes.node.isrequired,
    description: PropTypes.node.isrequired,
    image: PropTypes.isrequired,
    link: PropTypes.isrequired,
}

const ArticulosCliente = () => {
    const articles = [
        {
            title: 'Finanzas empresariales para la pequeña y microempresa',
            image: '/images/art2.webp',
            description: 'Finanzas empresariales para la pequeña y microempresa, proporciona un marco conceptual sobre el rol de las finanzas en la empresa, el papel del directivo financiero y los principios financieros relevantes.',
            link: 'https://www.eleconomista.es/diccionario-de-economia/finanzas',
        },
        {
            title: '4 Mejores Plataformas de trading para Invertir en Acciones en Chile [Ránking 2024]',
            image: '/images/art1.jpg',
            description: 'Descubre las mejores plataformas de trading y cómo utilizarlas para maximizar tus inversiones.',
            link: 'https://supercoin.it/cl-trading-platform/16262?sorgente=2&gad_source=1&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXHez5OOJkZ7Ds70GaWV6OQpsk9WbaQXQGCiJ-tCe2aA2aS33aP1LMhoCejMQAvD_BwE',
        },
        {
            title: 'La teoría del mercado eficiente',
            image: '/images/art3.png',
            description: 'La teoría del mercado eficiente fue desarrollada por el Premio Nobel de Economía Eugene Fama en 1970.',
            link: 'https://www.harvard-deusto.com/la-teoria-del-mercado-eficiente',
        },
        {
            title: 'División de Administración y Finanzas',
            image: '/images/art4.png',
            description: 'Como administran sus finanzas y jerarquía en la Subdere de la nación.',
            link: 'https://www.subdere.gov.cl/organización/división-de-administración-y-finanzas',
        },
        {
            title: 'Finanzas para principiantes: Entendiendo conceptos',
            image: '/images/a5.webp',
            description: 'Somos conscientes de que muchos lectores no son unos expertos en el mundo de las finanzas, así que hemos desarrollado este artículo sobre finanzas para principiantes.',
            link: 'https://www.iebschool.com/blog/finanzas-para-dummies-finanzas/',
        },
        {
            title: 'Planificación financiera personal: un manual para organizarlas de manera eficiente',
            image: '/images/adios-a-los-fraudes-telefonicos.jpg',
            description: 'La organización de las finanzas personales es una tarea que requiere tiempo, metodología y paciencia, dado que estamos obligados a seguir unos pasos sistemáticos, si realmente queremos tener una economía doméstica y familiar libre de sobresaltos.',
            link: 'https://www.bbva.com/es/salud-financiera/manual-para-organizar-las-finanzas-personales/',
        },
    ];

    return (
        <section className="content py-5">
            <div className="container">
                <div className="header">
                    <h2>Artículos</h2>
                </div>
                <div className="info-header">
                    <p>Encuentra artículos sobre finanzas y empoderamiento económico.</p>
                </div>
                <div className="row">
                    {articles.map((article, index) => (
                        <ArticleCard
                            key={index}
                            title={article.title}
                            image={article.image}
                            description={article.description}
                            link={article.link}
                        />
                    ))}
                </div>
            </div>
        </section>

    );
};

export default ArticulosCliente;
