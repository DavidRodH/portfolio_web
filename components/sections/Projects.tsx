import Image from "next/image";

const projects = [
  /* {
    title: "Landing page profesional",
    description:
      "Página de presentación de un servicio con diseño adaptable y llamadas a la acción.",
    img: "/images/projects/Portal_FND.webp",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    demo: "https://fnd.org.co/colombiasonlasregiones",
    github: "",
  },
  {
    title: "Aplicación de tareas",
    description:
      "Aplicación interactiva para organizar tareas y administrar actividades.",
      img: "/images/projects/Portal_FND.webp",
    technologies: ["React", "TypeScript", "CSS"],
    demo: "",
    github: "",
  },
  {
    title: "Catálogo de productos",
    description:
      "Interfaz de catálogo con tarjetas, información de productos y navegación.",
      img: "/images/projects/Portal_FND.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "",
    github: "",
  }, */
  {
    title: "Página Web de la FND",
    img: "/images/projects/Portal_FND.webp",
    description:
      "Administre el contenido y desarrollo de nuevas funcionalidades para un portal de la FND, incluyendo la creación de páginas, secciones y componentes interactivos.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://fnd.org.co/colombiasonlasregiones",
    github: "",
  },
  {
    title: "Campus virtual Defensoría del Pueblo",
    description:
      "Administracion del portal de Campus Virtual de la Defensoría del Pueblo, incluyendo la creación de secciones, componentes e infografias interactivas.",
    img: "/images/projects/Portal_Campus_Virtaul_Defensoria.webp",
    technologies: ["HTML", "CSS", "Angular"],
    demo: "https://campusvirtual.defensoria.gov.co/especial_violencia_sexual_ninos_ninas_adolescentes",
    github: "",
  },
  {
    title: "El Tiempo - Especial Urgencias",
    description:
      "Maquetacion infografias interactivas para el portal de Especiales El Tiempo, incluyendo la creación de secciones, componentes y animaciones interactivas.",
    img: "/images/projects/Especiales_El_Tiempo.webp",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    demo: "https://www.eltiempo.com/salud/servicio-de-urgencias-en-colombia-la-critica-situacion-del-pais-en-el-sector-de-la-salud-460436",
    github: "",
  },
  {
    title: "El Tiempo - Especial Héroes en tiempos de pandemia",
    description:
      "Maquetacion infografias interactivas para el portal de Especiales El Tiempo, incluyendo la creación de secciones, componentes y animaciones interactivas.",
    img: "/images/projects/Especiales_El_Tiempo_Heroes.webp",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    demo: "https://www.eltiempo.com/cultura/gente/historias-de-personas-que-luchan-contra-el-coronavirus-en-colombia-483152",
    github: "",
  },
  /* {
    title: "",
    description:
      "",
    img: "/images/projects/.webp",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    demo: "",
    github: "",
  }, */
  /* {
    title: "",
    description:
      "",
    img: "/images/projects/.webp",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    demo: "",
    github: "",
  }, */
];

export default function Projects() {
  return (
    <section id="proyectos" className="bg-slate-900/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Mi trabajo
        </p>

        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          Proyectos destacados
        </h2>

        <p className="mb-12 max-w-2xl text-slate-300">
          Una selección de proyectos personales y demostraciones
          de mis habilidades de desarrollo.
        </p>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
            >
              <div className="flex h-48 items-center justify-center bg-linear-to-br from-cyan-500/20 to-indigo-500/20">
                {/* <span className="text-5xl font-bold text-cyan-300">
                  {"</>"}
                </span> */}
                <Image
                  src={project.img}
                  alt={project.description}
                  width={600}
                  height={600}
                  className="rounded-2xl object-cover"
                  unoptimized
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mb-5 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm font-semibold">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      Ver proyecto
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-300 hover:text-white"
                    >
                      Código fuente
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}