import { FAQAccordion } from "./FAQAccordion";
import { useRef } from "react";
import BukenCasual3 from "../static/buken-casual3.png";
import ResultsCarousel from "./ResultsCarousel";
import CollageImage from "../static/collage.png";
import { LazyMotion, domAnimation, m, useScroll } from "framer-motion";

interface CoachingProps {
  setSelectedOption: (option: string) => void;
}

function Coaching({ setSelectedOption }: CoachingProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  const styles = {
    title: "my-10 text-4xl font-bold text-center",
    subtitle: "px-0 text-xl font-bold text-center",
    textBox:
      "col-span-8 row-span-1 bg-main h-full px-4 py-6 rounded-md grid content-center",
    button:
      "bg-gradient-to-t from-success to-success-500 rounded-lg py-8 px-10 font-bold text-white",
    button_full:
      "bg-gradient-to-t from-success to-success-500 rounded-lg py-8 px-10 w-full font-bold text-white",
    button_outline:
      "bg-transparent border-[1px] border-white rounded-lg py-8 px-10 font-bold text-white",
  };

  const FAQItems = [
    {
      question: "¿Qué es el coaching?",
      answer:
        "El coaching es un proceso de acompañamiento que te ayuda a alcanzar tus metas y objetivos. El coach te ayuda a identificar tus fortalezas y debilidades, y te ayuda a desarrollar las habilidades necesarias para alcanzar tus metas.",
    },
    {
      question: "¿Porqué necesitamos una consulta?",
      answer:
        "Quiero conocerte, tus metas, tus expectativas sobre el asesoramiento, tus dificultades y más. Basicamente todo lo que me ayude a entender lo que necesitas y como ayudarte a conseguirlo. Además, hablaremos sobre las asesorías, que esperar, de que se tratan y que temas relevantes para ellas. Finalmente, me interesa prevenir que aquellos quienes no obtendrán beneficio de un asesoramiento en línea ahorren su tiempo y dinero. Por ejemplo, quienes sufran de estrés excesivo, tiempo extremadamente limitado o una ética de trabajo desfavorable.\n\nMi meta es otorgar los mejores resultados posibles a mis clientes, y para eso necesito asegurarme de que el asesoramiento es adecuado para ti. no hay obligación de continuar con el asesoramiento después de la consulta, es solo una manera de asegurarme de que estamos en la misma página.",
    },
    {
      question: "¿Cuánto cuesta el coaching?",
      answer:
        "Quiero ser elegido como tu coach no por el precio, sino por calzar contigo como persona y tus metas. Por eso no listo los precios aqui, sino que los discuto en la consulta. Sin embargo, puedo decir que mis precios varían entre 40.000$ CLP y 80.000$ CLP al mes basado en tu perfil de entrenamiento y el servicio que desees contratar.",
    },
    {
      question: "¿Qué debo hacer para prepararme para la consulta?",
      answer:
        "No se necesita nada especial de tu parte durante la primera consulta, apenas 30 minutos de tu tiempo.",
    },
    {
      question: "¿Cuál es tu filosofía como coach?",
      answer:
        "No estoy suscrito a ninguna filosofía como coach en particular. Creo que cada persona es diferente y necesita un enfoque diferente. Por eso, mi filosofía es adaptarme a cada cliente y sus necesidades. Sin embargo, creo que el entrenamiento debe siempre ser divertido, y que la salud y el bienestar son más importantes que la apariencia física. Además, creo que el entrenamiento debe ser sostenible y que la salud mental es tan importante como la salud física. No es razonable pensar que un programa copiado y pegado de internet funcionará para todos. El plan de entrenamiento, la estrategia de nutrición y la guiánza en el camino debe ser customizada al individuo y sus necesidades.\n\nTambién creo en la honestidad y comunicación, por lo que mis clientes siempre tendran acceso 24/7 a mi y a mi asesoramiento. Siempre seré honesto y transparente con mis clientes, y espero lo mismo de ellos.",
    },
  ];

  const handleConsultationForm = () => {
    setSelectedOption("Agenda una consulta gratis");
  };

  const handleCoachingForm = () => {
    setSelectedOption("Coaching Form");
  };

  return (
    <div className="mt-[10vh] bg-dark text-slate-200 divide-y-4 divide-main">
      <section className="py-10 flex flex-col items-center">
        <h1 className={styles.title}>ONLINE COACHING</h1>
        <img
          className="w-3/4 rounded-xl mb-10"
          src={BukenCasual3}
          alt="Buken Coaching"
        ></img>
        <button
          className="bg-gradient-to-t from-success to-success-500 rounded-lg p-7 font-bold text-white"
          onClick={handleConsultationForm}
        >
          Agendar Consulta
        </button>
      </section>

      <section className="mt-0 pt-0 pb-10 flex flex-col items-center">
        <svg
          className="fill-main rotate-180 m-0 p-0"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 -2 24 24"
        >
          <path d="M24 22h-24l12-20z" />
        </svg>
        <div className="flex w-3/4 my-10">
          <div className="flex flex-col divide-y-2 w-1/4 divide-main">
            <div className="h-1/2"></div>
            <div className="h-1/2"></div>
          </div>
          <h3 className={styles.subtitle}>ANTES DE APLICAR</h3>
          <div className="flex flex-col divide-y-2 w-1/4 divide-main">
            <div className="h-1/2"></div>
            <div className="h-1/2"></div>
          </div>
        </div>
        {/* Before you apply steps */}
        <LazyMotion features={domAnimation}>
          <section
            ref={sectionRef}
            className="py-10 px-4 grid grid-cols-10 grid-rows-5 gap-y-8 items-center"
          >
            <m.div
              layoutScroll
              className="col-span-1 row-span-5 mt-20 bg-main w-1 h-full origin-top overflow-scroll"
              style={{ scaleY: scrollYProgress }}
            />
            <m.div
              className="col-span-1 row-span-1 flex flex-row-reverse text-main"
              initial={{ x: 30 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="-9 -5 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </m.div>
            <m.div
              className={styles.textBox}
              initial={{ x: 30 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>
                <strong>Conóce mis metodos - </strong>{" "}
                <span>
                  Para entender mejor de mi y mi estilo de coaching, te
                  recomiendo que me sigas en mis redes sociales y que leas la
                  sección de "Sobre mi" en mi página web.
                </span>
              </p>
            </m.div>
            <m.div
              className="col-span-1 row-span-1 flex flex-row-reverse text-main"
              initial={{ x: 30 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="-9 -5 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </m.div>
            <m.div
              className={styles.textBox}
              initial={{ x: 30 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>
                <strong>¿Estás listo para un coach? - </strong> El asesoramiento
                es una inversión en tu futuro yo. Tus metas solo pueden ser
                alcanzadas si ambos hacemos lo que se requiere de cada uno.
                Preguntate a ti mismo si estás listo para hacer el trabajo y si
                estás dispuesto a invertir en ti mismo. El éxito no es un
                accidente, es una elección.
              </p>
            </m.div>
            <m.div className="col-span-1 row-span-1 flex flex-row-reverse text-main"
              initial={{ x: 30 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="-9 -5 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </m.div>
            <m.div className={styles.textBox}
              initial={{ x: 30 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}>
              <p>
                <strong>Que esperar - </strong>
                El asesoramiento es un trabajo en equipo. Te ayudaré en mi mayor
                capacidad a alcanzar tus metas. Sin embargo, no puedo hacer el
                trabajo por ti. Debemos trabajar juntos, yo solo puedo guiarte,
                pero tu debes caminar el sendero.
              </p>
            </m.div>
            <m.div className="col-span-1 row-span-1 flex flex-row-reverse text-main"
                          initial={{ x: 30 }}
                          whileInView={{ x: 0 }}
                          transition={{ duration: 0.5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="-9 -5 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </m.div>
            <m.div className={styles.textBox}
                          initial={{ x: 30 }}
                          whileInView={{ x: 0 }}
                          transition={{ duration: 0.5 }}>
              <p>
                <strong>Primera consulta - </strong> Durante nuestra primera
                charla haremos una vista general del servicio de asesoramiento.
                Responderemos cualquier pregunta que tengas y discutiremos tus
                metas y expectativas.
              </p>
            </m.div>
            <m.div className="col-span-1 row-span-1 flex flex-row-reverse text-main"
                          initial={{ x: 30 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="-9 -5 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </m.div>
            <m.div className={styles.textBox}
              initial={{ x: 30 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>
                <strong>¡Vamos! - </strong> Pareces estar listo para comenzar.
                Agenda tu primera consulta con el botón de abajo.
              </p>
            </m.div>
          </section>
        </LazyMotion>

        <button className={styles.button} onClick={handleConsultationForm}>
          Agendar Consulta
        </button>
      </section>

      {/* What you get Section */}
      <section className="mt-0 pt-0 pb-10 px-6 flex flex-col items-center">
        <h2
          className={
            styles.title +
            " underline underline-offset-8 decoration-main decoration-1"
          }
        >
          LO QUE CONSIGUES
        </h2>
        <p className="mb-6 leading-relaxed">
          Buken Coaching se especializa en proveer un servicio de asesorías
          personalizadas que llevaran tu físico y tu mente al siguiente nivel.
          Recibiras un plan de entrenamiento individualizado, una estrategía
          nutricional hecha a tu medida y un plan de suplementación sin igual.
          Para lograr los mejores resultados y para que tu experiencia sea lo
          más agradable posible, haremos un check-in semanal para asegurarnos de
          que todo marche bien y para hacer los ajustes necesarios. Sin importar
          si eres un competidor, un atleta o un entusiasta del fitness, esta es
          la asesoría correcta para ti.
        </p>
        <ul className="list-disc list-inside ml-2 font-semibold mb-6">
          <li className="mb-1">Plan de entrenamiento individualizado</li>
          <li className="mb-1">Estrategía nutricional hecha a tu medida</li>
          <li className="mb-1">Plan de suplementación</li>
          <li className="mb-1">Check-in semanal</li>
          <li className="mb-1">Asesoría 24/7</li>
          <li className="mb-1">
            Acceso a plantillas de entrenamiento/nutrición
          </li>
        </ul>
        <div className="flex flex-col gap-2 mb-6">
          <button className={styles.button} onClick={handleConsultationForm}>
            Agendar Consulta
          </button>
          <button
            className={styles.button_outline}
            onClick={handleCoachingForm}
          >
            Aplica para Coaching 1:1
          </button>
        </div>

        <img
          src={CollageImage}
          alt=""
          loading="lazy"
          className="block w-full"
        />
      </section>
      {/* FAQ Section */}
      <section className="mt-0 pt-0 py-10 px-6 flex flex-col items-center">
        <FAQAccordion items={FAQItems} />
      </section>
      {/* Testimonials Section */}
      <section className="mt-0 pt-0 py-10 px-6 flex flex-col items-center">
        <ResultsCarousel />
      </section>
    </div>
  );
}

export default Coaching;
