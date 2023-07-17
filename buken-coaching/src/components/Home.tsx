interface HomeProps {
  setSelectedOption: (option : string) => void;
}

function Home( {setSelectedOption}: HomeProps ) {

  const handleCoachingForm = () => {
    setSelectedOption("Coaching Form");
  };

  return (
    <>
      {/* First Slide */}
      <div
        className="bg-[url('/src/static/most_muscular-blurred.png')]
         h-[90vh] bg-[center_top_5rem] bg-cover text-white"
      >
        <div className="flex flex-col-reverse h-full font-sans">
          <div></div>
          <div></div>
          <div></div>
          <div>
            <h1 className="m-0 px-3 text-4xl">
              Descubre un método de coaching personalizado.
            </h1>
            <h3 className="p-3">
              Enfoque basado en la ciencia y adaptado a ti.
            </h3>
            <div className="p-3 grid ">
              <button className="bg-gradient-to-t from-success to-success-500 rounded-lg p-8 font-bold text-white"
                  onClick={handleCoachingForm}
              >
                Aplica para Coaching 1:1
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Second Slide  */}
      <div className="bg-[#227447] h-min w-full grid items-center text-white p-4">
        <div id="client_types mb-5">
          <h2 className="text-center text-3xl font-bold mb-4">
            Tipos de Cliente
          </h2>
          <ul className="list-disc text-base ml-2">
            <li className="mb-2 px-2">
              <strong>Lifestyle: </strong>
              <span>
                Mejora tu físico y aumenta tu fuerza haciendolo calzar con tu
                vida ocupada
              </span>
            </li>
            <li className="mb-2 px-2">
              <strong>Fitness General: </strong>
              <span>
                Potencia tu transformación física con un plan sustentable
              </span>
            </li>
            <li className="mb-2 px-2">
              <strong>Competidor Fisico-Culturismo: </strong>
              <span>
                Logra un off-season optimo y productivo o una preparación de
                competencia eficiente
              </span>
            </li>
          </ul>
        </div>
        <div id="areas_expertise" className="mb-0 ">
          <h2 className="text-center text-3xl font-bold mb-3">
            Áreas de Especialización
          </h2>
          <ul className="list-disc text-base ml-2">
            <li className="mb-2 px-2">
              <strong>Pérdida de Grasa & Ganancia Muscular: </strong>
              <span>
                Cambia tu composición corporal de forma sustentable y eficiente.
              </span>
            </li>
            <li className="mb-2 px-2">
              <strong>Multi-Atleta: </strong>
              <span>
                Haz que tu entrenamiento y tu nutrición se adapten a tus
                deportes favoritos.
              </span>
            </li>
          </ul>
        </div>
        <div id="hands_on_coaching" className="mb-0">
          <h2 className="text-center text-3xl font-bold mb-3">
            Coaching Personalizado
          </h2>
          <ul className="list-disc text-base ml-2">
            <li className="mb-2 px-2">
              <strong>Planes customizados: </strong>
              <span>
                Basta de planes copiados y pegados. Cada semana parte del plan
                es hecho a tu medida y orientado a tus objetivos.
              </span>
            </li>
            <li className="mb-2 px-2">
              <strong>Check-ins semanales: </strong>
              <span>Ajustes basados en tu progreso y feedback.</span>
            </li>
            <li className="mb-2 px-2">
              <strong>Disponibilidad 24/7: </strong>
              <span>
                Retroalimentacion ilimitada con respuesta en menos de 24 horas.
              </span>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <div
            className="bg-[url('/src/static/front-relaxed.png')] h-96 w-64
            bg-[center] bg-cover"
          ></div>
        </div>
      </div>
      {/* Third Slide */}
      <div className="bg-white h-min text-success-600 w-full grid gap-0 px-4 pt-8 pb-4">
        <h2 className="text-center text-3xl font-bold mb-4">
          Coaching a través de la ciencia y la experiencia
        </h2>
        <p className="text-start">
          Para ayudarte a alcanzar tus metas, mi método de coaching se basa en
          lo siguiente:
        </p>
        <ul className="list-disc text-base ml-2">
          <li className="mb-2 px-2">
            <strong>Ciencia: </strong>
            <span>
              Logra tus metas con estrategias basadas en la ciencia y diseñadas
              para obtener resultados reales de manera alcanzable.
            </span>
          </li>
          <li className="mb-2 px-2">
            <strong>Experiencia: </strong>
            <span>
              Con más de 5 años de experiencia en el mundo del fitness y un
              trasfondo academico en nutrición, he tenido el privilegio de
              trabajar con múltiples clientes, brindándoles mi apoyo y
              conocimientos para lograr resultados significativos.
            </span>
          </li>
        </ul>
        <p className="text-start mb-0 p-0">
          ¿Quieres descubrir cómo mi coaching individualizado puede impulsar tu
          éxito y llevar tus resultados al siguiente nivel?
        </p>
        <p className="text-start mb-2">
          Aplica para coaching 1:1 rellenando un breve formulario para comenzar!
        </p>
        <div className="flex justify-center my-6">
          <div
            className="bg-[url('/src/static/side_relaxed_rectangle_high.png')] h-[339px] w-[280px]
            bg-[center] bg-cover"
          ></div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <button className="bg-gradient-to-t from-success to-success-500 rounded-lg p-5 font-bold text-white"
           onClick={handleCoachingForm}
          >
            Aplica para Coaching 1:1
          </button>
          <button className="bg-white border-[1px] border-black text-black rounded-lg p-5">
            Agenda una Consulta Gratis
          </button>
        </div>
      </div>
      {/* Fourth Slide */}
      <div className="bg-[#227447] h-min w-full grid gap-0 text-white px-4 pt-8 pb-4">
        <div className="bg-[url('/src/static/buken-casual.png')] bg-[center] bg-cover h-[380px] rounded-md"></div>
        <h2 className="text-center text-3xl font-bold my-4">Servicios</h2>
        <div className="flex flex-col justify-center gap-2">
          <p className="text-start">
            Mi enfoque de coaching se basa en la personalización y la
            transparencia, para que puedas seguir de cerca los ajustes semana a
            semana y adquirir conocimientos valiosos para alcanzar tus metas.
          </p>
          <p className="text-start">
            Adicionalmente, mi estilo de comunicacion y guianza es 24/7, con
            respuestas usualmente en menos de una hora. La puerta siempre esta
            abierta para dudas o inquietudes a lo largo del camino hacia tus
            metas.
          </p>
          <div className="bg-white rounded-md p-5 my-1 text-success-600">
            <h3 className="text-center text-2xl font-bold mb-4 underline">
              Coaching de Nutrición
            </h3>
            <ul className="list-disc text-base ml-2 ">
              <li className="mb-3">
                <p>Plan nutricional basado en tus objetivos y preferencias</p>
                <li>
                  Basado en Macros o plan de comidas, con objetivos de
                  NEAT/cardio
                </li>
              </li>
              <li className="mb-3">
                <p>
                  Check-ins semanales con ajustes basados en tu progreso y
                  feedback
                </p>
              </li>
              <li className="mb-3">
                <p>Comunicación 24/7 para dudas o inquietudes</p>
              </li>
              <li className="mb-3">
                <p>
                  Acceso a plantillas de dieta y progreso semanal de peso
                  corporal
                </p>
              </li>
              <li className="mb-3">
                <p>Compromiso </p>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-md p-5 my-1 text-success-600">
            <h3 className="text-center text-2xl font-bold mb-4 underline">
              Coaching de Entrenamiento
            </h3>
            <ul className="list-disc text-base ml-2">
              <li className="mb-3">
                <p>
                  Programa de entrenamiento de hipertrofia construido
                  especificamente para ti y tus metas
                </p>
              </li>
              <li className="mb-3 ">
                <p>
                  Check-ins semanales con ajustes basados en tu progreso y
                  feedback
                </p>
              </li>
              <li className="mb-3">
                <p>Comunicación 24/7 para dudas o inquietudes</p>
              </li>
              <li className="mb-3">
                <p>Acceso a plantillas de entrenamiento</p>
              </li>
              <li className="mb-3">
                <p>Retoalimentación de técnica en ejercicios </p>
              </li>
              <li className="mb-3">
                <p>Compromiso </p>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-md p-5 my-1 text-success-600">
            <h3 className="text-center text-2xl font-bold mb-4 underline">
              Coaching de Nutrición y Entrenamiento
            </h3>
            <ul className="list-disc text-base ml-2">
              <li className="mb-3">
                <p className="underline italic">
                  Recomendado para mejores resultados 
                </p>
              </li>
              <li className="mb-3">
                <p>Plan nutricional basado en tus objetivos y preferencias</p>
                <li className="list-[square] ml-4">
                  Basado en Macros o plan de comidas, con objetivos de
                  NEAT/cardio
                </li>
              </li>
              <li className="mb-3">
                <p>
                  Programa de entrenamiento de hipertrofia construido
                  especificamente para ti y tus metas
                </p>
              </li>
              <li className="mb-3 ">
                <p>
                  Check-ins semanales con ajustes basados en tu progreso y
                  feedback
                </p>
              </li>
              <li className="mb-3">
                <p>Comunicación 24/7 para dudas o inquietudes</p>
              </li>
              <li className="mb-3">
                <p>Acceso a plantillas de entrenamiento, dieta y progreso semanal de peso corporal</p>
              </li>
              <li className="mb-3">
                <p>Retoalimentación de técnica en ejercicios </p>
              </li>
              <li className="mb-3">
                <p>Compromiso </p>
              </li>
            </ul>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <button className="bg-white rounded-lg p-5 font-bold text-success-600"
            onClick={handleCoachingForm}
            >
              Aplica para Coaching 1:1
            </button>
            <button className="bg-transparent border-[1px] border-white text-white rounded-lg p-5">
              Agenda una Consulta Gratis
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
