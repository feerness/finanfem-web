import { useState, useEffect } from "react";
import "./Noticias.css";

const NewsComponent = () => {
  const API_KEY = "3312930d4a09464495940e0413773fe4";
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [noMoreNews, setNoMoreNews] = useState(false);
  const newsLimit = 10;

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const fetchNews = () => {
    if (isLoading || noMoreNews) return;
    setIsLoading(true);

    const url = `https://newsapi.org/v2/everything?q=finanzas&language=es&apiKey=${API_KEY}&page=${currentPage}&pageSize=${newsLimit}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const articlesWithImage = data.articles.filter(
          (article) => article.urlToImage
        );

        if (
          articlesWithImage.length === 0 ||
          articlesWithImage.length < newsLimit
        ) {
          setNoMoreNews(true);
        }

        // Evitar la duplicación de artículos
        const newArticles = articlesWithImage.filter(
          (newArticle) =>
            !articles.some((article) => article.url === newArticle.url)
        );

        setArticles((prevArticles) => [...prevArticles, ...newArticles]);

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Hubo un error al obtener las noticias:", error);
        setIsLoading(false);
      });
  };

  const loadMoreNews = () => {
    if (!noMoreNews && !isLoading) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="container01">
      <h1 className="title01">Noticias</h1>
      <div id="newsContainer01">
        {articles.map((article, index) => (
          <div key={index} className="newsItem01">
            <div className="newsImage01">
              <img src={article.urlToImage} alt={article.title} />
            </div>
            <div className="newsContent01">
              <div className="info01">
                <h5>{article.source.name}</h5>
                <span>|</span>
                <h5>{new Date(article.publishedAt).toLocaleDateString()}</h5>
              </div>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Leer más
              </a>
            </div>
          </div>
        ))}
      </div>
      <div id="loadMoreContainer01">
        {noMoreNews ? (
          <p>No hay más noticias para cargar.</p>
        ) : (
          <button
            className="loadMoreButton"
            onClick={loadMoreNews}
            disabled={isLoading}
          >
            {isLoading ? "Cargando..." : "Cargar más noticias"}
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsComponent;
