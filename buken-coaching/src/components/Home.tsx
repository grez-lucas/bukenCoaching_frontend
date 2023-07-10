
function Home() {
  return (
    <>
    {/* First Slide */}
      <div
        className="bg-[url('/src/static/most_muscular.png')]
         h-[90vh] bg-[center] bg-cover text-white"
      >
        <div className="grid grid-rows-5 grid-cols-1 h-full font-sans">
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
              <button className="bg-gradient-to-t from-success to-success-500 rounded-lg p-8 font-bold text-white">
                Aplica para Coaching 1:1
              </button>
            </div>
          </div>
        </div>
      </div>
        {/* Second Slide  */}
      <div className="bg-[#227447] h-[160vh] w-full grid items-center text-white p-4">
        <div id="client_types mb-1">
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
        <div id="areas_expertise" className="mb-1 ">
          <h2 className="text-center text-3xl font-bold mb-3">
            Áreas de Especialización
          </h2>
          <ul className="list-disc text-base ml-2">
            <li className="mb-2 px-2">
              <strong>Pérdida de Grasa & Ganancia Muscular: </strong>
              <span>
                Cambia tu composición corporal de forma sustentable y
                eficiente.
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
        <div id="hands_on_coaching" className="mb-1">
          <h2 className="text-center text-3xl font-bold mb-3">
            Coaching Personalizado
          </h2>
          <ul className="list-disc text-base ml-2">
            <li className="mb-2 px-2">
              <strong>Planes customizados: </strong>
              <span>
                Basta de planes copiados y pegados. Cada semana parte del plan es hecho a tu medida
                y orientado a tus objetivos.
              </span>
            </li>
            <li className="mb-2 px-2">
              <strong>Check-ins semanales: </strong>
              <span>
                Ajustes basados en tu progreso y feedback. 
              </span>
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
            <div className="bg-[url('/src/static/front-relaxed.png')] h-96 w-64
            bg-[center] bg-cover">

            </div>
        </div>
      </div>
      {/* Third Slide */}
      
    </>
  );
}

export default Home;
