import { useState } from 'react';

import "./preguntasFrecuentes.css";

const PreguntasFrecu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Por dónde debo empezar si no sé nada sobre finanzas?",
      answer:
        "Puedes comenzar por aprender conceptos básicos como el ahorro, la gestión de deudas y la importancia de un presupuesto. Nuestro sitio ofrece guías paso a paso para principiantes."
    },
    {
      question: "¿Cómo puedo aprender a manejar mejor mi dinero?",
      answer:
        "Te enseñamos cómo crear un presupuesto, entender tus ingresos y gastos, y planificar para el futuro. Estos son los primeros pasos para tomar control de tus finanzas."
    },
    {
      question: "¿Es posible aprender sobre inversiones sin ser experta en finanzas?",
      answer:
        "Sí, es posible. Tenemos cursos que explican las inversiones de manera simple y clara, para que puedas empezar a invertir con confianza."
    },
    {
      question: "¿Cómo puedo ahorrar si mi ingreso es bajo?",
      answer:
        "Existen estrategias que te pueden ayudar a ahorrar incluso con un ingreso bajo. Te enseñamos cómo reducir gastos y maximizar tus ahorros, sin importar tu situación económica."
    },
    {
      question: "¿Las finanzas personales son solo para personas con mucho dinero?",
      answer:
        "No, las finanzas personales son importantes para todas, independientemente de cuánto ganes. Saber administrar tu dinero te ayuda a alcanzar tus metas, sea cual sea tu nivel de ingresos."
    },
    {
      question: "¿Qué tan importante es entender sobre finanzas si no tengo planes de invertir?",
      answer:
        "Entender finanzas no es solo para invertir; también te ayuda a manejar mejor tu dinero, evitar deudas innecesarias, y asegurar un futuro financiero estable."
    }
  ];

  return (
    <div className="container-preg">
      <div className="titulo">
        <p>Preguntas Frecuentes</p>
      </div>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="pregunta"
          onClick={() => toggleAnswer(index)}
        >
          <div className="pregunta-header">
            <p>{faq.question}</p>
            <svg
              className={`flecha ${activeIndex === index ? "rotar" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          {activeIndex === index && <p className="respuesta">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default PreguntasFrecu;