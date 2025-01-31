import "../../styles/aboutStyles.css";
import { exportDictionary } from "../../dictionary";

export const About = ({ lang, isHidden }) => {
  return (
    <>
      <h1 className="inner-title">{exportDictionary(lang, "about")}</h1>
      <div className="inner-subtitle scrollable">
          {lang === "ES" ? (
            <>
            <p>¡Hola! Bienvenido/a a mi portfolio.</p><br/>
            <p>
              ¡Aquí encontrarás información sobre mí, las tecnologías que aprendí
              hasta el momento y los proyectos que realicé!
            </p>
            <p>
              En cuanto a mí, soy un apasionado Analista de Sistemas enfocado
              en el desarrollo e implementación de soluciones tecnológicas. Mi
              objetivo es crear aplicaciones web cautivadoras y funcionales que
              mejoren los procesos complejos y la vida de las personas.
            </p>
            <p>
              ¡Si tienes un proyecto interesante en mente o deseas conversar sobre
              tecnología, no dudes en contactarme a través de la sección de
              CONTACTAME!
            </p><br/>
            <p>¡Gracias por visitar mi portfolio!</p>
          </>
        ) : (
          <>
            <p>Hello! Welcome to my portfolio.</p><br/>
            <p>
              Here you'll find information about me, the technologies I've learned so far,
              and the projects I've worked on!
            </p>
            <p>
              As for me, I am a passionate Systems Analyst focused on developing and
              implementing technological solutions. My goal is to create captivating and
              functional web applications that improve complex processes and people's lives.
            </p>
            <p>
              If you have an interesting project in mind or want to chat about technology,
              feel free to reach out through the CONTACT ME section!
            </p><br/>
            <p>Thank you for visiting my portfolio!</p>
          </>
      )}
      </div>
    </>
  );
};