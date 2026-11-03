export default function Contact() {
  return (
    <section id="contacto" className="px-6 py-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-slate-900 p-8 text-center sm:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Hablemos
        </p>

        <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
          ¿Tienes un proyecto en mente?
        </h2>

        <p className="mx-auto mb-8 max-w-2xl leading-7 text-slate-300">
          Estoy interesado en conocer nuevas oportunidades profesionales,
          colaborar en proyectos y continuar creciendo como desarrollador.
        </p>

        <a
          href="mailto:tu-correo@ejemplo.com"
          className="inline-block rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Enviarme un correo
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
          {/* <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-cyan-400"
          >
            GitHub
          </a> */}

          <a
            href="https://www.linkedin.com/in/david-rodriguez-2b462689/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}