import ClaytonImg from "../static/clayton.png";
import KidImg from "../static/kid-buken2.png";
import SkinnyImg from "../static/skinny-buken2.png";
import BWImg from "../static/buken-bw.jpeg";

interface AboutMeProps {
    setSelectedOption: (option: string) => void;
}

function AboutMe( {setSelectedOption} : AboutMeProps ) {
  const styles = {
    title: "my-20 text-4xl font-bold text-center",
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

  const handleConsultationForm = () => {
    setSelectedOption("Agenda una consulta gratis");
  };

  const handleCoachingForm = () => {
      setSelectedOption("Coaching Form");
  };


  return (
    <div className="mt-[10vh] bg-dark text-slate-200 divide-y-4 divide-main">
      <section className="py-10 flex flex-col items-center">
        <div className="flex w-3/4 my-10">
          <div className="flex flex-col divide-y-2 w-1/4 divide-main">
            <div className="h-1/2"></div>
            <div className="h-1/2"></div>
          </div>
          <h3 className={styles.subtitle}>BUKEN COACHING</h3>
          <div className="flex flex-col divide-y-2 w-1/4 divide-main">
            <div className="h-1/2"></div>
            <div className="h-1/2"></div>
          </div>
        </div>
        <h2 className={styles.title}>Sobre mi</h2>
      </section>
      <section className="py-10 flex flex-col items-center">
        <div className="flex-col items-center relative mt-[-105px] mb-16">
          <img
            src={ClaytonImg}
            className="bg-white rounded-full h-44"
            alt="Dog"
            loading="lazy"
          ></img>
          <h2 className={styles.subtitle}>Lucas Grez</h2>
        </div>
        <section className="flex flex-col items-center px-8 divide-main divide-y-2">
          <div className="flex flex-col items-center">
            <p className="whitespace-break-spaces">
              ¡Hola! Mi nombre es <strong>Lucas Grez Klenner</strong>, también conocido
              como <strong>Luken Buken</strong>. Soy el creador de{" "}
              <strong>Buken Coaching</strong> y quería compartir un poco sobre
              mi y mi viaje por el mundo fitness.
              <br />
              <br />
              De pequeño tuve una relación distante con el deporte, saltando de
              deporte en deporte sin encontrar uno que me gustara. Fue durante
              este tiempo que comencé a tener problemas de sobrepeso, lo que me
              llevó a tener una adolescencia muy insegura y con baja autoestima.
              El hecho de pasar mucho tiempo en casa frente a la computadora y
              jugando videojuegos no ayudó mucho, pero si me ayudó a descubrir
              mi pasión por la tecnología.
              <br />
              <br />
            </p>
            <img src={KidImg} alt="Kid Buken" className="block w-full my-5" />
          </div>
          <div className="flex flex-col items-center">
            <p className="whitespace-break-spaces my-5">
              Alrededor de los 15 años, después de cambiarme de hogar y volver a
              tener problemas alimenticios, decidí por mi cuenta que era momento
              de hacer un cambio. Sabiendo nada al respecto y guiándome por lo
              que parecía ser sano, comencé remplazando todas mis comidas por
              ensaladas y haciendo 45 minutos de trotadora todos los días, sin
              ningún tipo de entrenamiento de pesas.
              <br />
              <br />
              Logré bajar de peso considerablemente, desde casi 70 kg hasta los
              56 kg. Viendo hacia atrás, me veía esquelético, pero en ese
              momento descubrí la satisfacción de ver resultados y quedé
              sorprendido por lo que podía lograr con solo la fuerza de
              voluntad.
              <br />
              <br />
              Ya con 17 años, comencé a ir al nutricionista y a entrenar en un
              gimnasio, tenía un hambre insaciable por aprender y mejorar.
              Lamentablemente, me di cuenta que mucha información era
              contradictoria y que no todos los entrenadores sabían lo que
              hacían. Especialmente después de buscar en internet, aprendí que,
              aunque la información es abundante, la cantidad de desinformación
              y "gurus" también lo es.
              <br />
              <br />
              En lo general, no me arrepiento de nada de lo que hice, ya que me
              ayudó a aprender. Pero si pudiera hacer las cosas de nuevo, te
              aseguro que lo haría de manera distinta. Oh, el progreso que
              podría haber hecho si hubiera saltado todos los errores y pasos
              inútiles que tomé.
              <br />
              <br />
            </p>

            <img
              src={SkinnyImg}
              className="block w-full mb-5"
              alt="Skinny"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="whitespace-break-spaces my-5">
              Hoy en día, con 23 años y casi 6 años de experiencia, me siento
              más seguro que nunca de mi mismo al momento de entrenar. He
              logrado transformar mi cuerpo y mi vida, y quiero ayudar a otros a
              hacer lo mismo.
              <br />
              <br />
              Estoy estudiando Ingeniería Civil en Ciencias de la Computación en
              la Universidad de Los Andes, y terminé mi minor en nutrición hace
              un par de años. Me encanta la tecnología y estoy muy agradecido de
              poder juntar las cosas que me apasionan en este proyecto.
              <br />
              <br />
              Hay un montón de buena información en internet, pero también un
              montón de basura. Quiero ayudarte a poder maximizar tu tiempo y
              esfuerzo, <strong>
                  saltarte los errores que yo cometí 
                  y que muchos otros
                  cometen, 
              </strong>
                  y que puedas lograr tus objetivos de la manera más
                  eficiente.
              <br />
              <br />
              <strong>
                  No estoy aquí para venderte una píldora mágica, ni para decirte
                  que es fácil
              </strong>. De lo contrario, el camino es duro, pero lo que es
              más duro es mirar 5-10 años atrás y darte cuenta que pudiste haber
              logrado mucho más con el mismo tiempo, dinero y esfuerzo.
              <br />
              <br />
              El tiempo es el recurso más valioso que tenemos. Déjame ayudarte a
              evitar perderlo y lograr tu verdadero potencial.
            </p>
            <img
              src={BWImg}
              className="block  rounded-md h-128"
              alt="B&W"
              loading="lazy"
            />
            <div className="flex flex-col gap-2 my-6">
              <button
                className={styles.button}
                onClick={handleConsultationForm}
              >
                Agendar Consulta
              </button>
              <button
                className={styles.button_outline}
                onClick={handleCoachingForm}
              >
                Aplica para Coaching 1:1
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default AboutMe;
