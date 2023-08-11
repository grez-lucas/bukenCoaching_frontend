import { FAQAccordion } from "./FAQAccordion";

function FAQ() {
    const styles = {
        title: "my-10 text-4xl font-bold text-center",
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
        {
          question: "¿Qué tan frecuentes son los check-ins?",
          answer:
            "Los check-ins son semanales y consisten en un simple check-list. Dependiendo en la necesidad y tiempo del cliente, los check-ins pueden ser mediante reuniones de videollamada, o simplemente mediante mensajes de texto. Durante los check-ins tambien abro espacio para preguntas y dudas pertinentes.",
        },
        {
          question: "¿Cómo es tu cliente ideal?",
          answer:
            "Mi cliente ideal tiene las siguientes características:\n\n-Honesto\n-Comunicativo\n-Realista\n-Comprometido\n-Dispuesto a aprender\n-Dedicado",
        },
      ];
    

  return (
    <div className="mt-[10vh] min-h-[80vh] max-h-fit bg-dark text-slate-200 divide-y-4 divide-main">
      <section className="py-10 flex flex-col items-center">
        <h2 className={styles.title}>PREGUNTAS FRECUENTES</h2>
      </section>
        <FAQAccordion items={FAQItems} />
    </div>
  );
}

export default FAQ;
