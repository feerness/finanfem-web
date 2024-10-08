import { useEffect, useState } from "react";
import { useForo } from "../../context/foroContext.jsx";
import { ForoCard } from "./PostCard.jsx";
import { ButtonLink } from "../ui/ButtonLink.jsx";
import { ImFileEmpty } from "react-icons/im";
import { getCommentsCountRequest } from "../../api/foro.js";
import { useTranslation } from "react-i18next";
import "./Foro.css"; 

export function ForoPage() {
  const { t } = useTranslation();
  const { foro, getForo } = useForo();
  const [forosWithComments, setForosWithComments] = useState([]);

  useEffect(() => {
    const fetchForos = async () => {
      await getForo();
    };

    fetchForos();
  }, [getForo]);

  useEffect(() => {
    const fetchCommentsCounts = async () => {
      try {
        const forosWithCounts = await Promise.all(
          foro.map(async (foroItem) => {
            const result = await getCommentsCountRequest(foroItem._id);
            return { ...foroItem, commentsCount: result.count };
          })
        );
        setForosWithComments(forosWithCounts);
      } catch (error) {
        console.error("Error al obtener el contador de comentarios:", error);
      }
    };

    if (foro.length > 0) {
      fetchCommentsCounts();
    }
  }, [foro]);

  return (

    <div className="foro-container1">
      {forosWithComments.length === 0 ? (
        <div className="foro-empty">
          <div className="foro-empty-content">
            <ImFileEmpty className="foro-empty-icon" />
            <h1 className="foro-empty-title">
              {t('No hay publicaciones aún, por favor añade una nueva')}
            </h1>
            <div className="foro-empty-button">
              <ButtonLink to="/add-post">{t('Añadir Post')}</ButtonLink>
            </div>
          </div>
        </div>
      ) : (  
        <div className="foro-grid">
          <div className="addPost">
            <ButtonLink className="botonPost" to="/add-post">{t('Añadir Post')}</ButtonLink>
          </div>
          {forosWithComments.map((foroItem) => (
            <ForoCard
              foro={foroItem}
              commentsCount={foroItem.commentsCount}
              key={foroItem._id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
