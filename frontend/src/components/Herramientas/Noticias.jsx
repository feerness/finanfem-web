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
    if (isLoading) return;
    setIsLoading(true);

    const url = `https://newsapi.org/v2/everything?q=finanzas&language=es&apiKey=${API_KEY}&page=${currentPage}&pageSize=${newsLimit}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const articlesWithImage = data.articles.filter(
          (article) => article.urlToImage
        );

        if (articlesWithImage.length === 0) {
          setNoMoreNews(true);
        } else {
          setArticles((prevArticles) => [
            ...prevArticles,
            ...articlesWithImage,
          ]);
        }

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Hubo un error al obtener las noticias:", error);
        setIsLoading(false);
      });
  };

  const loadMoreNews = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <div id="newsContainer">
        {articles.map((article, index) => (
          <div key={index} className="newsItem">
            <div className="newsImage">
              <img src={article.urlToImage} alt={article.title} />
            </div>
            <div className="newsContent">
              <div className="info">
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
      <div id="loadMoreContainer">
        {noMoreNews ? (
          <p>No hay más noticias para cargar.</p>
        ) : (
          <button onClick={loadMoreNews} disabled={isLoading}>
            {isLoading ? "Cargando..." : "Cargar más noticias"}
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsComponent;
