import { FAQAccordion } from './FAQAccordion';
import GreenLogo from "../static/Buken_Coaching_Logo.png";
import BukenCasual3 from "../static/buken-casual3.png";

interface CoachingProps {
  setSelectedOption: (option: string) => void;
}

function Coaching({ setSelectedOption }: CoachingProps) {
  
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
  return (
    <div className="mt-[10vh] bg-dark text-slate-200 divide-y-4 divide-main">
      <section className="py-10 flex flex-col items-center">
        <h1 className={styles.title}>ONLINE COACHING</h1>
        <img
          className="w-3/4 rounded-xl mb-10"
          src={BukenCasual3}
          alt="Buken Coaching"
        ></img>
        <button className="bg-gradient-to-t from-success to-success-500 rounded-lg p-7 font-bold text-white">
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
        <section className="py-10 px-4 grid grid-cols-10 grid-rows-5 gap-y-8 items-center">
          <div className="col-span-1 row-span-5 bg-main w-1 h-full"></div>
          <div className="col-span-1 row-span-1 flex flex-row-reverse text-main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="-9 -5 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className={styles.textBox}>
            <p>
              <strong>Conóce mis metodos - </strong>{" "}
              <span>
                Para entender mejor de mi y mi estilo de coaching, te recomiendo
                que me sigas en mis redes sociales y que leas la sección de
                "Sobre mi" en mi spanágina web.
              </span>
            </p>
          </div>

          <div className="col-span-1 row-span-1 flex flex-row-reverse text-main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="-9 -5 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className={styles.textBox}>
            <p>
              <strong>¿Estás listo para un coach? - </strong> El asesoramiento
              es una inversión en tu futuro yo. Tus metas solo pueden ser
              alcanzadas si ambos hacemos lo que se requiere de cada uno.
              Preguntate a ti mismo si estás listo para hacer el trabajo y si
              estás dispuesto a invertir en ti mismo. El éxito no es un
              accidente, es una elección.
            </p>
          </div>
          <div className="col-span-1 row-span-1 flex flex-row-reverse text-main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="-9 -5 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className={styles.textBox}>
            <p>
              <strong>Que esperar - </strong>
              El asesoramiento es un trabajo en equipo. Te ayudaré en mi mayor
              capacidad a alcanzar tus metas. Sin embargo, no puedo hacer el
              trabajo por ti. Debemos trabajar juntos, yo solo puedo guiarte,
              pero tu debes caminar el sendero.
            </p>
          </div>
          <div className="col-span-1 row-span-1 flex flex-row-reverse text-main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="-9 -5 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className={styles.textBox}>
            <p>
              <strong>Primera consulta - </strong> Durante nuestra primera
              charla haremos una vista general del servicio de asesoramiento.
              Responderemos cualquier pregunta que tengas y discutiremos tus
              metas y expectativas.
            </p>
          </div>
          <div className="col-span-1 row-span-1 flex flex-row-reverse text-main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="-9 -5 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className={styles.textBox}>
            <p>
              <strong>¡Vamos! - </strong> Pareces estar listo para comenzar.
              Agenda tu primera consulta con el botón de abajo.
            </p>
          </div>
        </section>

        <button className={styles.button}>Agendar Consulta</button>
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
          <button className={styles.button}>Agendar Consulta</button>
          <button className={styles.button_outline}>
            Aplica para Coaching 1:1
          </button>
        </div>
        <div className="bg-white h-[394px] w-[320px] text-black">
          Collage of my excel sheets and meetings goes here
        </div>
      </section>
      {/* FAQ Section */}
      <section className="mt-0 pt-0 py-10 px-6 flex flex-col items-center">
        
        <FAQAccordion     />
      </section>
    </div>
  );
}

export default Coaching;

