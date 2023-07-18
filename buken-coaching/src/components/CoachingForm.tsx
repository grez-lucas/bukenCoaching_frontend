import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface CoachingFormProps {
  setSelectedOption: (option: string) => void;
}

function CoachingForm({ setSelectedOption }: CoachingFormProps) {
  const styles = {
    label: "block text-sm font-medium text-dark mb-2",
    field:
      "my-4 p-3 focus:ring-dark focus:border-dark block w-full border-b-2 border-dark shadow-sm sm:text-base text-dark bg-gray placeholder:text-dark-500",
    error: "text-sm text-red-600",
    button:
      "flex flex-col justify-center py-2 px-4 my-8 border border-transparent shadow-sm text-base font-semibold rounded-md text-white bg-success hover:bg-success-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark",
  };

  const formSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    instagramHandle: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
    age: Yup.string().required("Required"),
    serviceOfInterest: Yup.string().required("Required"),
    shortTermGoals: Yup.string().required("Required"),
    longTermGoals: Yup.string().required("Required"),
    biggestObstacles: Yup.string().required("Required"),
    motivation: Yup.string().required("Required"),
    trainingExperience: Yup.string().required("Required"),
    commitmentLength: Yup.string().required("Required"),
    whenToStart: Yup.string().required("Required"),
    seriousnessLevel: Yup.string().required("Required"),
    emailCheckRadio: Yup.string().required("Required"),
  });

  return (
    <>
      <div className="mt-[10vh] py-8 px-2 h-min bg-main">
        <div className="py-3 px-6 bg-white ">
          <h1 className="my-6 text-3xl text-center font-bold">Coaching Form</h1>
          <p className="mb-6">
            Si estas insatisfecho con tus resultados o buscas acelerar tu
            progreso, permiteme ayudarte a optimizar y estructurar tu plan.
          </p>
          <p className="mb-6">
            Aunque estés recien comenzando o tengas varios años de experiencia
            entrenando, puedo ayudar bloqueando el ruido y guiarte mediante un
            plan individualizado de entrenamiento y una estrategia nutricional
            adaptada a tus metas. Todo esto con el fin de desbloquear tu
            potencial y lograr resultados reales.
          </p>
          <p className="mb-6">
            Si estás interesado en trabajar conmigo, por favor completa el
            siguiente formulario para verificar que haremos buen equipo y me
            pondré en contacto contigo lo antes posible.
          </p>
          <Formik
            initialValues={{
              email: "",
              firstName: "",
              lastName: "",
              instagramHandle: "",
              phoneNumber: "",
              age: "",
              serviceOfInterest: "",
              shortTermGoals: "",
              longTermGoals: "",
              biggestObstacles: "",
              motivation: "",
              trainingExperience: "",
              commitmentLength: "",
              whenToStart: "",
              seriousnessLevel: "",
              emailCheckRadio: "",
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={formSchema}
          >
            <Form>
              <div className="bg-white">
                <Field
                  className={styles.field}
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  className={styles.error}
                  name="email"
                  component="div"
                />
                <Field
                  className={styles.field}
                  id="firstName"
                  name="firstName"
                  placeholder="Nombre"
                />
                <ErrorMessage
                  className={styles.error}
                  name="firstName"
                  component="div"
                />
                <Field
                  className={styles.field}
                  id="lastName"
                  name="lastName"
                  placeholder="Apellido"
                />
                <ErrorMessage
                  className={styles.error}
                  name="lastName"
                  component="div"
                />
                <Field
                  className={styles.field}
                  id="instagramHandle"
                  name="instagramHandle"
                  placeholder="Usuario de Instagram (@luken.buken)"
                />
                <ErrorMessage
                  className={styles.error}
                  name="instagramHandle"
                  component="div"
                />
                <Field
                  className={styles.field}
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Número de teléfono"
                />
                <ErrorMessage
                  className={styles.error}
                  name="phoneNumber"
                  component="div"
                />
                <Field
                  className={styles.field}
                  id="age"
                  name="age"
                  placeholder="Edad"
                />
                <ErrorMessage
                  className={styles.error}
                  name="age"
                  component="div"
                />
                <label className={styles.label} htmlFor="trainingExperience">
                  ¿Cuánto tiempo llevas entrenando?
                </label>
                <Field
                  className={styles.field}
                  id="trainingExperience"
                  name="trainingExperience"
                  placeholder="4 años"
                />
                <ErrorMessage
                  className={styles.error}
                  name="trainingExperience"
                  component="div"
                />
                <label className={styles.label} htmlFor="serviceOfInterest">
                  ¿Qué servicio te interesa?
                </label>
                <div className="flex flex-col gap-2 mb-6">
                  <label>
                    <Field
                      type="radio"
                      name="serviceOfInterest"
                      value="Entrenamiento y nutrición"
                      className="mr-2 text-dark"
                    />
                    Entrenamiento y nutrición
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="serviceOfInterest"
                      value="Solo nutrición"
                      className="mr-2 text-dark"
                    />
                    Solo nutrición
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="serviceOfInterest"
                      value="Solo entrenamiento"
                      className="mr-2 text-dark"
                    />
                    Solo entrenamiento
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="serviceOfInterest"
                      value="No estoy seguro"
                      className="mr-2 text-dark"
                    />
                    No estoy seguro
                  </label>
                </div>
                <ErrorMessage
                  className={styles.error}
                  name="serviceOfInterest"
                  component="div"
                />
                <label className={styles.label} htmlFor="shortTermGoals">
                  ¿Cuáles son tus metas a corto plazo?
                </label>
                <Field
                  className={styles.field}
                  id="shortTermGoals"
                  name="shortTermGoals"
                  placeholder="Metas dentro de 3-6 meses"
                />
                <ErrorMessage
                  className={styles.error}
                  name="shortTermGoals"
                  component="div"
                />
                <label className={styles.label} htmlFor="longTermGoals">
                  ¿Cuáles son tus metas a largo plazo?
                </label>
                <Field
                  className={styles.field}
                  id="longTermGoals"
                  name="longTermGoals"
                  placeholder="Metas dentro de 1+ años"
                />
                <ErrorMessage
                  className={styles.error}
                  name="longTermGoals"
                  component="div"
                />

                <label className={styles.label} htmlFor="biggestObstacles">
                  ¿Cuáles son tus mayores obstáculos para llegar a tus metas?
                </label>
                <Field
                  className={styles.field}
                  id="biggestObstacles"
                  name="biggestObstacles"
                  placeholder="Tiempo, motivación, conocimiento, etc."
                />
                <ErrorMessage
                  className={styles.error}
                  name="biggestObstacles"
                  component="div"
                />

                <label className={styles.label} htmlFor="motivation">
                  ¿Qué te motiva a alcanzar tus metas?
                </label>
                <Field
                  className={styles.field}
                  id="motivation"
                  name="motivation"
                  placeholder="Salud, confianza, estética, etc."
                />
                <ErrorMessage
                  className={styles.error}
                  name="motivation"
                  component="div"
                />
                <label className={styles.label} htmlFor="commitmentLength">
                  ¿Por cuánto tiempo te comprometes a dedicar para conseguir
                  resultados conmigo?
                </label>
                <div className="flex flex-col gap-2 mb-6 text-base">
                  <label>
                    <Field
                      type="radio"
                      name="commitmentLength"
                      value="Al menos 1 mes"
                      className="mr-2 text-dark"
                    />
                    Al menos 1 mes
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="commitmentLength"
                      value="Al menos 3 meses"
                      className="mr-2 text-dark"
                    />
                    Al menos 3 meses
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="commitmentLength"
                      value="Al menos 6 meses"
                      className="mr-2 text-dark"
                    />
                    Al menos 6 meses
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="commitmentLength"
                      value="Cliente de largo plazo buscando resultados substanciales"
                      className="mr-2 text-dark"
                    />
                    Cliente de largo plazo buscando resultados substanciales
                  </label>
                </div>
                <ErrorMessage
                  className={styles.error}
                  name="commitmentLength"
                  component="div"
                />
                <label className={styles.label} htmlFor="whenToStart">
                  ¿Idealmente, cuándo deseas empezar?
                </label>
                <Field
                  className={styles.field}
                  id="whenToStart"
                  name="whenToStart"
                  placeholder="1 de enero, ASAP, etc."
                />
                <ErrorMessage
                  className={styles.error}
                  name="whenToStart"
                  component="div"
                />
                <label className={styles.label} htmlFor="seriousnessLevel">
                  ¿Te sientes serio respecto a tu compromiso a alcanzar tus
                  metas? Esto incluye esfuerzo, tiempo, energía, y dinero.
                </label>
                <div className="flex flex-col gap-2 mb-6 text-base">
                  <label>
                    <Field
                      type="radio"
                      name="seriousnessLevel"
                      value="Si, estoy listo"
                      className="mr-2 text-dark"
                    />
                    Si, estoy listo
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="seriousnessLevel"
                      value="No estoy listo aún"
                      className="mr-2 text-dark"
                    />
                    No estoy listo aún
                  </label>
                </div>
                <ErrorMessage
                  className={styles.error}
                  name="seriousnessLevel"
                  component="div"
                />

                <label className={styles.label} htmlFor="emailCheckRadio">
                  <Field
                    type="checkbox"
                    name="emailCheckRadio"
                    className="mr-2 text-dark"
                  />
                  ¡Chequea este botón para asegurarte de que mi correo te llegue!
                </label>
                <ErrorMessage
                  className={styles.error}
                  name="emailCheckRadio"
                  component="div"
                />

                <div className="flex justify-center">
                  <button
                    className={styles.button}
                    type="submit"
                  >
                    <p>ENVIAR APLICACIÓN A COACHING</p>
                    <p>💪</p>
                  </button>

                  </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default CoachingForm;
