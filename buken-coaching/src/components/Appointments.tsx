function Appointments() {
  return (
    <div className="mt-[10vh] bg-white text-slate-200 divide-y-4 divide-main">
      <section className=" flex flex-col items-center">
          <iframe
          title="Appointments"
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0URxqmicDMS4kgGh-OjaQ_5_OfcudzaJt38bxfLL8mYDPwypStXyfVfGIuv2FAMkUWpRVjGezV?gv=true"
            // style="border: 0"
            width="100%"
            height="600"
            // frameborder="0"
          ></iframe>
      </section>
    </div>
  );
}

export default Appointments;
