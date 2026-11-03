const services = [
  {
    title: "Desarrollo de interfaces web",
    description:
      "Construcción de interfaces modernas utilizando React y componentes reutilizables.",
  },
  {
    title: "Diseño adaptable",
    description:
      "Páginas que se adaptan a móviles, tabletas y computadores.",
  },
  {
    title: "Desarrollo con Next.js",
    description:
      "Creación de páginas y aplicaciones web con una estructura organizada.",
  },
  {
    title: "Optimización web",
    description:
      "Mejoras de rendimiento, accesibilidad y experiencia de usuario.",
  },
  {
    title: "Integración de APIs",
    description:
      "Conexión de interfaces con servicios y fuentes de datos externos.",
  },
  {
    title: "Mantenimiento web",
    description:
      "Corrección de errores, actualización de componentes y mejoras continuas.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Qué puedo aportar
        </p>

        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          Servicios
        </h2>

        <p className="mb-12 max-w-2xl text-slate-300">
          Soluciones web enfocadas en la funcionalidad, el diseño
          y la experiencia de las personas.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:border-cyan-400/50"
            >
              <h3 className="mb-4 text-xl font-semibold">
                {service.title}
              </h3>

              <p className="leading-7 text-slate-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}