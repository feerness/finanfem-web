// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // carga traducciones usando HTTP
  .use(LanguageDetector) // detecta el idioma del navegador automáticamente
  .use(initReactI18next) // permite usar react-i18next
  .init({
    detection: {
        // opciones de detección aquí
        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        caches: ['localStorage', 'cookie'], // guarda la elección en localStorage o cookies
      },
    fallbackLng: 'es', // idioma por defecto
    debug: true,
    interpolation: {
      escapeValue: false, // no escapa los valores
    },
    resources: {
        en: {
          translation: {
            "Recursos": "Resources",
            "Artículos": "Articles",
            "Videos": "Videos",
            "Herramientas": "Tools",
            "Indicadores Financieros": "Financial Indicators",
            "Noticias": "News",
            "Comunidad": "Community",
            "Foro": "Forum",
            "Actividad": "Activity",
            "Consultoría": "Consulting",
            "Reportes": "Reports",
            "Reglas": "Rules",
            "Modo Oscuro": "Dark Mode",
            "Modo Claro": "Light Mode",
            "Logout": "Logout",
            "Login": "Login",
            "Register": "Register",
            "¡Bienvenida": "Welcome",
            "Progresemos juntas.": "Let's progress together",
            "Descubre lo último en el mundo financiero.": "Discover the latest in the financial world",
            "Infórmate, avanza & descubre en finanzas.": "Get informed, advance & discover in finance",
            "Información": "Information",
            "Acerca de nosotras": "About us",
            "Testimonios": "Testimonials",
            "Links de Ayuda": "Helpful Links",
            "Archivos": "Files",
            "Nuestros Servicios": "Our Services",
            "Perfil": "Profile",
            "Contacto": "Contact",
            "Calle 123, Santiago, Chile": "123 Street, Santiago, Chile",
            "Todos los derechos reservados": "All rights reserved",
            "Encuentra artículos sobre finanzas y empoderamiento económico.": "Find articles on finance and economic empowerment.",
            "Encuentra videos sobre finanzas y empoderamiento económico.": "Find videos about finances and economic empowerment.",
            "E-books y Guías": "E-books and guides",
            "Descarga nuestros e-books y guías para aprender más sobre finanzas.": "Download our e-books and guides to learn more about finances.",
            "Términos de Uso de FinanFem": "FinanFem Terms of Use",
            "Objetivo del Foro": "Objective of the Forum",
            "Responsabilidad de Uso": "Responsibility of Use",
            "Modificación de Condiciones": "Modification of Conditions",
            "Funcionamiento del Foro": "Forum Operation",
            "Enlaces Externos": "External Links",
            "Uso de la Web": "Use of the Web",
            "Propiedad Intelectual": "Intellectual Property",
            "Normas de Convivencia de FinanFem": "FinanFem Coexistence Rules",
            "Respeto y Amabilidad": "Respect and Kindness",
            "Contenido Apropiado": "Appropriate Content",
            "Publicación de Mensajes": "Posting of Messages",
            "Derechos de Autor y Propiedad Intelectual": "Copyright and Intellectual Property",
            "Moderación": "Moderation",
            "Consecuencias de Infracciones": "Consequences of Violations",
            "Cambios en las Normas": "Changes in the Rules",
            "8 de Julio del 2024": "July 8, 2024",
            "El objetivo de la página FinanFem.com es establecer un foro en el que se permita la comunicación entre los usuarios, quienes podránintercambiar información, opiniones y archivos.": "The purpose of the FinanFem.com page is to establish a forum in which communication is allowed between users, who can exchange information, opinions and files.",
            "Tanto el acceso a esta página web, como el uso que pueda hacerse de la información y contenidos incluidos en la misma o accesibles desde ella, será de exclusiva responsabilidad de quien lo realice, sin que FinanFem.com pueda tener responsabilidad alguna por dichos usos.": "Both access to this website, and the use that may be made of the information and content included therein or accessible from it, will be the exclusive responsibility of whoever makes it, without FinanFem.com having any responsibility for such uses.",
            "FinanFem.com se reserva el derecho de modificar las condiciones legales que se exponen en este documento sin previo aviso.": "FinanFem.com reserves the right to modify the legal conditions set out in this document without prior notice.",
            "El foro se rige por unas condiciones que el usuario deberá aceptar antes de proceder a su registro. La aceptación de tales condiciones supone que el usuario es mayor de 16 años y que hará un uso de los servicios de conformidad con lo expuesto en las mismas, siendo responsable de todo acceso y uso que haga de la web.": "The forum is governed by conditions that the user must accept before registering. Acceptance of such conditions implies that the user is over 16 years of age and that he or she will use the services in accordance with what is stated therein, being responsible for all access and use of the website.",
            "El propietario del sitio web no se hace responsable de aquellos otros sitios web u archivos a los que sea posible acceder a través de enlaces de hipertexto (links) disponibles entre sus contenidos, dado que dichas páginas enlazadas son responsabilidad de sus respectivos titulares. Esta página, por tanto, ni aprueba, ni hace suyos los productos, servicios, contenidos, información, datos, archivos y cualquier clase de material existente en tales páginas web o archivos y no controla ni se hace responsable de la calidad, licitud, fiabilidad y utilidad de la información contenidos y servicios existentes en los sitios enlazados y que son ajenos a esta página.": "The owner of the website is not responsible for those other websites or files that can be accessed through hypertext links (links) available among its contents, given that said linked pages are the responsibility of their respective owners. This page, therefore, neither approves nor endorses the products, services, content, information, data, files and any type of material existing on such web pages or files and does not control nor is responsible for the quality, legality, reliability. and usefulness of the information, content and services existing on the linked sites and that are unrelated to this page.",
            "En el caso de que se estime oportuno o de que un órgano competente declare la ilicitud de los datos, ordenado su retirada o que se imposibilite el acceso a los mismos, o se hubiera declarado la existencia de la lesión, y se nos haya notificado expresamente la correspondiente resolución, los enlaces que se indiquen serían inmediatamente retirados.": "In the event that it is deemed appropriate or that a competent body declares the illegality of the data, ordered its withdrawal or that access to it is impossible, or the existence of the injury has been declared, and we have been expressly notified the corresponding resolution, the links indicated would be immediately removed.",
            "El Usuario se compromete a hacer un uso adecuado y lícito del sitio web y de los Contenidos, de conformidad con la Legislación aplicable, las presentes Condiciones Generales de Uso del sitio web, la moral y buenas costumbres generalmente aceptadas y el orden público, obligándose a indemnizar a FinanFem.com por cualquier daño o perjuicio que pudiera ocasionar por el uso de esta web, infringiendo estas condiciones generales y/o la legalidad vigente. El Usuario deberá abstenerse de:": "The User undertakes to make appropriate and lawful use of the website and the Contents, in accordance with the applicable Legislation, these General Conditions of Use of the website, generally accepted morality and good customs and public order, agreeing to indemnify FinanFem.com for any damage or harm that may be caused by the use of this website, violating these general conditions and/or current legislation. The User must refrain from:",
            "Hacer un uso no autorizado o fraudulento del website y/o de los Contenidos con fines o efectos ilícitos.": "Make unauthorized or fraudulent use of the website and/or the Contents for illicit purposes or effects.",
            "Acceder o intentar acceder a recursos o áreas restringidas del website, sin cumplir las condiciones exigidas para dicho acceso.": "Access or attempt to access resources or restricted areas of the website, without meeting the conditions required for said access.",
            "Introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar daños en los sistemas físicos o lógicos del propietario del dominio, de sus proveedores o de terceros.": "Introduce or spread computer viruses or any other physical or logical systems on the network that are likely to cause damage to the physical or logical systems of the domain owner, its suppliers or third parties.",
            "Intentar acceder, utilizar y/o manipular los datos del propietario del dominio, terceros proveedores y otros usuarios.": "Attempt to access, use and/or manipulate the data of the domain owner, third party providers and other users.",
            "Suprimir, ocultar o manipular las notas sobre derechos de propiedad intelectual o industrial y demás datos identificativos de los derechos del titular del website o de terceros incorporados a los Contenidos, así como los dispositivos técnicos de protección o cualesquiera mecanismos de información que puedan insertarse en los Contenidos.": "Delete, hide or manipulate the notes on intellectual or industrial property rights and other data identifying the rights of the owner of the website or third parties incorporated into the Contents, as well as the technical protection devices or any information mechanisms that may be inserted in the contents. Contents.",
            "Obtener e intentar obtener los Contenidos empleando para ello medios o procedimientos distintos de los que, según los casos, se hayan puesto a su disposición a este efecto o se hayan indicado expresamente en las páginas web donde se encuentren los Contenidos o, en general, de los que se empleen habitualmente en Internet por no entrañar un riesgo de daño o inutilización del que puedan insertarse en los Contenidos. Website y/o de los Contenidos.": "Obtain and attempt to obtain the Contents using means or procedures other than those that, depending on the case, have been made available for this purpose or have been expressly indicated on the web pages where the Contents are located or, in general, from those that are commonly used on the Internet because they do not entail a risk of damage or disablement of those that may be inserted in the Contents. Website and/or the Contents.",
            "La presente página web, incluyendo el código fuente y los contenidos elaborados por su titular o sus colaboradores, están protegidos por la normativa nacional e internacional vigente sobre propiedad intelectual, encontrándose todos los derechos reservados, de forma que el usuario se encuentra facultado únicamente para efectuar la navegación a través de las páginas para su visualización como uso privado.": "This website, including the source code and the contents prepared by its owner or its collaborators, are protected by current national and international regulations on intellectual property, with all rights reserved, so that the user is only authorized to carry out navigation through pages for viewing as private use.",
            "Los contenidos de esta web han sido enviados por los usuarios de esta página. Si se considera que alguno de los contenidos de esta página infringe los derechos de autor, rogamos nos sea comunicado a través de nuestro formulario de contacto para proceder a retirarlo.": "The contents of this website have been sent by the users of this page. If any of the content on this page is considered to infringe copyright, please notify us through our contact form so we can proceed to remove it.",
            "Todos los miembros del foro deben tratarse con respeto y cortesía.": "All forum members should treat each other with respect and courtesy.",
            "No se tolerarán insultos, comentarios despectivos, ni ataques personales.": "Insults, derogatory comments, or personal attacks will not be tolerated.",
            "Las discusiones deben ser constructivas y centrarse en el tema, no en las personas.": "Discussions should be constructive and focus on the topic, not the people.",
            "No se permite la publicación de contenido ofensivo, obsceno, ilegal o que incite al odio.": "Posting offensive, obscene, illegal or hateful content is not permitted.",
            "Evita compartir información personal tuya o de otros sin su consentimiento.": "Avoid sharing personal information about yourself or others without their consent.",
            "Publica tus mensajes en el subforo adecuado y asegúrate de que el título sea claro y descriptivo.": "Post your messages in the appropriate subforum and make sure the title is clear and descriptive.",
            "No hagas spam ni publiques repetidamente el mismo mensaje.": "Don't spam or post the same message repeatedly.",  
            "Usa un lenguaje claro y comprensible, evitando el uso excesivo de mayúsculas y abreviaturas.": "Use clear and understandable language, avoiding excessive use of capital letters and abbreviations.",
            "Respeta los derechos de autor. No publiques contenido que no te pertenezca sin el permiso adecuado.": "Respect copyright. Do not post content that does not belong to you without proper permission.",
            "Cita las fuentes cuando compartas información o contenido de terceros.": "Cite sources when sharing third-party information or content.",
            "Los moderadores tienen la autoridad para editar, mover o eliminar mensajes que no cumplan con estas normas.": "Moderators have the authority to edit, move, or delete posts that do not comply with these rules.",
            "Las decisiones de los moderadores son finales y deben ser respetadas.": "The decisions of the moderators are final and must be respected.",
            "Las violaciones a estas normas pueden resultar en advertencias, suspensión temporal o expulsión definitiva del foro.": "Violations of these rules may result in warnings, temporary suspension or permanent expulsion from the forum.",
            "La gravedad de la infracción determinará la medida disciplinaria aplicada.": "The seriousness of the infraction will determine the disciplinary measure applied.",
            "Nos reservamos el derecho de modificar estas normas en cualquier momento. Los cambios serán comunicados oportunamente.": "We reserve the right to modify these rules at any time. Changes will be communicated in a timely manner."








          }
        },
        es: {
          translation: {
          "Recursos": "Recursos",
          "Artículos": "Artículos",
          "Videos": "Videos",
          "Herramientas": "Herramientas",
          "Indicadores Financieros": "Indicadores Financieros",
          "Noticias": "Noticias",
          "Comunidad": "Comunidad",
          "Foro": "Foro",
          "Actividad": "Actividad",
          "Consultoría": "Consultoría",
          "Reportes": "Reportes",
          "Reglas": "Reglas",
          "Modo Oscuro": "Modo Oscuro",
          "Modo Claro": "Modo Claro",
          "Logout": "Cerrar sesión",
          "Login": "Iniciar sesión",
          "Register": "Registrar",
          "¡Bienvenida": "¡Bienvenida",
          "Progresemos juntas.": "Progresemos juntas.",
          "Descubre lo último en el mundo financiero.": "Descubre lo último en el mundo financiero.",
          "Infórmate, avanza & descubre en finanzas.": "Infórmate, avanza & descubre en finanzas.",
          "Información": "Información",
          "Acerca de nosotras": "Acerca de nosotras",
          "Testimonios": "Testimonios",
          "Links de Ayuda": "Links de Ayuda",
          "Archivos": "Archivos",
          "Nuestros Servicios": "Nuestros Servicios",
          "Perfil": "Perfil",
          "Contacto": "Contacto",
          "Calle 123, Santiago, Chile": "Calle 123, Santiago, Chile",
          "Todos los derechos reservados": "Todos los derechos reservados",
          "Encuentra artículos sobre finanzas y empoderamiento económico": "Encuentra artículos sobre finanzas y empoderamiento económico",
          "Encuentra videos sobre finanzas y empoderamiento económico.": "Encuentra videos sobre finanzas y empoderamiento económico.",
          "E-books y Guías": "E-books y Guías",
          "Descarga nuestros e-books y guías para aprender más sobre finanzas": "Descarga nuestros e-books y guías para aprender más sobre finanzas",
          "Términos de Uso de FinanFem": "Términos de Uso de FinanFem",
          "Objetivo del Foro": "Objetivo del Foro",
          "Responsabilidad de Uso": "Responsabilidad de Uso",
          "Modificación de Condiciones": "Modificación de Condiciones",
          "Funcionamiento del Foro": "Funcionamiento del Foro",
          "Enlaces Externos": "Enlaces Externos",
          "Uso de la Web": "Uso de la Web",
          "Propiedad Intelectual": "Propiedad Intelectual",
          "Normas de Convivencia de FinanFem": "Normas de Convivencia de FinanFem",
          "Respeto y Amabilidad": "Respeto y Amabilidad",
          "Contenido Apropiado": "Contenido Apropiado",
          "Publicación de Mensajes": "Publicación de Mensajes",
          "Derechos de Autor y Propiedad Intelectual": "Derechos de Autor y Propiedad Intelectual",
          "Moderación": "Moderación",
          "Consecuencias de Infracciones": "Consecuencias de Infracciones",
          "Cambios en las Normas": "Cambios en las Normas",
          "8 de Julio del 2024": "8 de Julio del 2024",
          "El objeto de la página FinanFem.com es establecer un foro en el que se permita la comunicación entre los usuarios, quienes podránintercambiar información, opiniones y archivos.": "El objeto de la página FinanFem.com es establecer un foro en el que se permita la comunicación entre los usuarios, quienes podránintercambiar información, opiniones y archivos.",
          "Tanto el acceso a esta página web, como el uso que pueda hacerse de la información y contenidos incluidos en la misma o accesibles              desde ella, será de exclusiva responsabilidad de quien lo realice, sin que FinanFem.com pueda tener responsabilidad alguna por dichos usos.": "Tanto el acceso a esta página web, como el uso que pueda hacerse de la información y contenidos incluidos en la misma o accesibles              desde ella, será de exclusiva responsabilidad de quien lo realice, sin que FinanFem.com pueda tener responsabilidad alguna por dichos usos.",
          "FinanFem.com se reserva el derecho de modificar las condiciones legales que se exponen en este documento sin previo aviso.": "FinanFem.com se reserva el derecho de modificar las condiciones legales que se exponen en este documento sin previo aviso.",
          "El foro se rige por unas condiciones que el usuario deberá aceptar antes de proceder a su registro. La aceptación de tales condiciones supone que el usuario es mayor de 16 años y que hará un uso de los servicios de conformidad con lo expuesto en las mismas, siendo responsable de todo acceso y uso que haga de la web.": "El foro se rige por unas condiciones que el usuario deberá aceptar antes de proceder a su registro. La aceptación de tales condiciones supone que el usuario es mayor de 16 años y que hará un uso de los servicios de conformidad con lo expuesto en las mismas, siendo responsable de todo acceso y uso que haga de la web.",
          "El propietario del sitio web no se hace responsable de aquellos otros sitios web u archivos a los que sea posible acceder a través de enlaces de hipertexto (links) disponibles entre sus contenidos, dado que dichas páginas enlazadas son responsabilidad de sus respectivos titulares. Esta página, por tanto, ni aprueba, ni hace suyos los productos, servicios, contenidos, información, datos, archivos y cualquier clase de material existente en tales páginas web o archivos y no controla ni se hace responsable de la calidad, licitud, fiabilidad y utilidad de la información contenidos y servicios existentes en los sitios enlazados y que son ajenos a esta página.": "El propietario del sitio web no se hace responsable de aquellos otros sitios web u archivos a los que sea posible acceder a través de enlaces de hipertexto (links) disponibles entre sus contenidos, dado que dichas páginas enlazadas son responsabilidad de sus respectivos titulares. Esta página, por tanto, ni aprueba, ni hace suyos los productos, servicios, contenidos, información, datos, archivos y cualquier clase de material existente en tales páginas web o archivos y no controla ni se hace responsable de la calidad, licitud, fiabilidad y utilidad de la información contenidos y servicios existentes en los sitios enlazados y que son ajenos a esta página.",
          "En el caso de que se estime oportuno o de que un órgano competente declare la ilicitud de los datos, ordenado su retirada o que se imposibilite el acceso a los mismos, o se hubiera declarado la existencia de la lesión, y se nos haya notificado expresamente la correspondiente resolución, los enlaces que se indiquen serían inmediatamente retirados.": "En el caso de que se estime oportuno o de que un órgano competente declare la ilicitud de los datos, ordenado su retirada o que se imposibilite el acceso a los mismos, o se hubiera declarado la existencia de la lesión, y se nos haya notificado expresamente la correspondiente resolución, los enlaces que se indiquen serían inmediatamente retirados.",
          "El Usuario se compromete a hacer un uso adecuado y lícito del sitio web y de los Contenidos, de conformidad con la Legislación aplicable, las presentes Condiciones Generales de Uso del sitio web, la moral y buenas costumbres generalmente aceptadas y el orden público, obligándose a indemnizar a FinanFem.com por cualquier daño o perjuicio que pudiera ocasionar por el uso de esta web, infringiendo estas condiciones generales y/o la legalidad vigente. El Usuario deberá abstenerse de:": "El Usuario se compromete a hacer un uso adecuado y lícito del sitio web y de los Contenidos, de conformidad con la Legislación aplicable, las presentes Condiciones Generales de Uso del sitio web, la moral y buenas costumbres generalmente aceptadas y el orden público, obligándose a indemnizar a FinanFem.com por cualquier daño o perjuicio que pudiera ocasionar por el uso de esta web, infringiendo estas condiciones generales y/o la legalidad vigente. El Usuario deberá abstenerse de:",
          "Hacer un uso no autorizado o fraudulento del website y/o de los Contenidos con fines o efectos ilícitos.": "Hacer un uso no autorizado o fraudulento del website y/o de los Contenidos con fines o efectos ilícitos.",
          "Acceder o intentar acceder a recursos o áreas restringidas del website, sin cumplir las condiciones exigidas para dicho acceso.": "Acceder o intentar acceder a recursos o áreas restringidas del website, sin cumplir las condiciones exigidas para dicho acceso.",
          "Introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar daños en los sistemas físicos o lógicos del propietario del dominio, de sus proveedores o de terceros.": "Introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar daños en los sistemas físicos o lógicos del propietario del dominio, de sus proveedores o de terceros.",
          "Intentar acceder, utilizar y/o manipular los datos del propietario del dominio, terceros proveedores y otros usuarios.": "Intentar acceder, utilizar y/o manipular los datos del propietario del dominio, terceros proveedores y otros usuarios.",
          "Suprimir, ocultar o manipular las notas sobre derechos de propiedad intelectual o industrial y demás datos identificativos de los derechos del titular del website o de terceros incorporados a los Contenidos, así como los dispositivos técnicos de protección o cualesquiera mecanismos de información que puedan insertarse en los Contenidos.": "Suprimir, ocultar o manipular las notas sobre derechos de propiedad intelectual o industrial y demás datos identificativos de los derechos del titular del website o de terceros incorporados a los Contenidos, así como los dispositivos técnicos de protección o cualesquiera mecanismos de información que puedan insertarse en los Contenidos.",
          "Obtener e intentar obtener los Contenidos empleando para ello medios o procedimientos distintos de los que, según los casos, se hayan puesto a su disposición a este efecto o se hayan indicado expresamente en las páginas web donde se encuentren los Contenidos o, en general, de los que se empleen habitualmente en Internet por no entrañar un riesgo de daño o inutilización del que puedan insertarse en los Contenidos. Website y/o de los Contenidos.": "Obtener e intentar obtener los Contenidos empleando para ello medios o procedimientos distintos de los que, según los casos, se hayan puesto a su disposición a este efecto o se hayan indicado expresamente en las páginas web donde se encuentren los Contenidos o, en general, de los que se empleen habitualmente en Internet por no entrañar un riesgo de daño o inutilización del que puedan insertarse en los Contenidos. Website y/o de los Contenidos.",
          "La presente página web, incluyendo el código fuente y los contenidos elaborados por su titular o sus colaboradores, están protegidos por la normativa nacional e internacional vigente sobre propiedad intelectual, encontrándose todos los derechos reservados, de forma que el usuario se encuentra facultado únicamente para efectuar la navegación a través de las páginas para su visualización como uso privado.": "La presente página web, incluyendo el código fuente y los contenidos elaborados por su titular o sus colaboradores, están protegidos por la normativa nacional e internacional vigente sobre propiedad intelectual, encontrándose todos los derechos reservados, de forma que el usuario se encuentra facultado únicamente para efectuar la navegación a través de las páginas para su visualización como uso privado.",
          "Los contenidos de esta web han sido enviados por los usuarios de esta página. Si se considera que alguno de los contenidos de esta página infringe los derechos de autor, rogamos nos sea comunicado a través de nuestro formulario de contacto para proceder a retirarlo.": "Los contenidos de esta web han sido enviados por los usuarios de esta página. Si se considera que alguno de los contenidos de esta página infringe los derechos de autor, rogamos nos sea comunicado a través de nuestro formulario de contacto para proceder a retirarlo.",
          "Todos los miembros del foro deben tratarse con respeto y cortesía.": "Todos los miembros del foro deben tratarse con respeto y cortesía.",
          "No se tolerarán insultos, comentarios despectivos, ni ataques personales.": "No se tolerarán insultos, comentarios despectivos, ni ataques personales.",
          "Las discusiones deben ser constructivas y centrarse en el tema, no en las personas.": "Las discusiones deben ser constructivas y centrarse en el tema, no en las personas.",
          "No se permite la publicación de contenido ofensivo, obsceno, ilegal o que incite al odio.": "No se permite la publicación de contenido ofensivo, obsceno, ilegal o que incite al odio.",
          "Evita compartir información personal tuya o de otros sin su consentimiento.": "Evita compartir información personal tuya o de otros sin su consentimiento.",
          "Publica tus mensajes en el subforo adecuado y asegúrate de que el título sea claro y descriptivo.": "Publica tus mensajes en el subforo adecuado y asegúrate de que el título sea claro y descriptivo.",
          "No hagas spam ni publiques repetidamente el mismo mensaje.": "No hagas spam ni publiques repetidamente el mismo mensaje.",
          "Usa un lenguaje claro y comprensible, evitando el uso excesivo de mayúsculas y abreviaturas.": "Usa un lenguaje claro y comprensible, evitando el uso excesivo de mayúsculas y abreviaturas.",
          "Respeta los derechos de autor. No publiques contenido que no te pertenezca sin el permiso adecuado.": "Respeta los derechos de autor. No publiques contenido que no te pertenezca sin el permiso adecuado.",
          "Cita las fuentes cuando compartas información o contenido de terceros.": "Cita las fuentes cuando compartas información o contenido de terceros.",
          "Los moderadores tienen la autoridad para editar, mover o eliminar mensajes que no cumplan con estas normas.": "Los moderadores tienen la autoridad para editar, mover o eliminar mensajes que no cumplan con estas normas.",
          "Las decisiones de los moderadores son finales y deben ser respetadas.": "Las decisiones de los moderadores son finales y deben ser respetadas.",
          "Las violaciones a estas normas pueden resultar en advertencias, suspensión temporal o expulsión definitiva del foro.": "Las violaciones a estas normas pueden resultar en advertencias, suspensión temporal o expulsión definitiva del foro.",
          "La gravedad de la infracción determinará la medida disciplinaria aplicada.": "La gravedad de la infracción determinará la medida disciplinaria aplicada.",
          "Nos reservamos el derecho de modificar estas normas en cualquier momento. Los cambios serán comunicados oportunamente.": "Nos reservamos el derecho de modificar estas normas en cualquier momento. Los cambios serán comunicados oportunamente."























          }
        }
      }
      
  });

export default i18n;
