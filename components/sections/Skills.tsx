import Image from "next/image";

const skills = [
  {
    image: "/images/icons/html.png",
    name: "HTML",
    description: "Estructura semántica y accesible.",
  },
  {
    image: "/images/icons/css.png",
    name: "CSS",
    description: "Diseño, animaciones y responsive design.",
  },
  { 
    image: "/images/icons/javascript.webp",
    name: "JavaScript",
    description: "Lógica e interactividad web.",
  },
  {
    image: "/images/icons/react.webp",
    name: "React",
    description: "Componentes y aplicaciones interactivas.",
  },
  {
    image: "/images/icons/nextjs.png",
    name: "Next.js",
    description: "Aplicaciones web modernas con React.",
  },
  /* {
    image: "/images/icons/typescript.png",
    name: "TypeScript",
    description: "Código con tipos y mayor seguridad.",
  }, */
  {
    image: "/images/icons/tailwind.webp",
    name: "Tailwind CSS",
    description: "Diseño rápido mediante clases utilitarias.",
  },
  {
    image: "/images/icons/bootstrap.webp",
    name: "Bootstrap",
    description: "Framework de estilo y componentes responsivos.",
  },
  {
    image: "/images/icons/sass.webp",
    name: "SASS",
    description: "Preprocesador de CSS con características avanzadas.",
  },
  {
    image: "/images/icons/nodejs.webp",
    name: "Node.js",
    description: "Entorno de ejecución para aplicaciones web.",
  },
  {
    image: "/images/icons/npm.webp",
    name: "npm",
    description: "Gestor de paquetes para Node.js.",
  },
  {
    image: "/images/icons/web01.webp",
    name: "API REST",
    description: "Interfaz de programación de aplicaciones para comunicación entre sistemas.",
  },
  {
    image: "/images/icons/strapi.png",
    name: "Strapi",
    description: "Headless CMS para la creación de APIs y contenido.",
  },
  {
    image: "/images/icons/json.png",
    name: "JSON",
    description: "Formato de intercambio de datos ligero y fácil de leer.",
  },
  {
    image: "/images/icons/git.webp",
    name: "Git y GitHub",
    description: "Control de versiones y colaboración.",
  },
  {
    image: "/images/icons/figma.webp",
    name: "Figma",
    description: "Herramienta de diseño y prototipado para interfaces de usuario.",
  },
  {
    image: "/images/icons/photoshop.webp",
    name: "Photoshop",
    description: "Herramienta de edición de imágenes y diseño gráfico.",
  },
  {
    image: "/images/icons/illustrator.webp",
    name: "Illustrator",
    description: "Herramienta de diseño vectorial para la creación de gráficos y arte.",
  },
  {
    image: "/images/icons/web02.webp",
    name: "UX/UI",
    description: "Diseño de experiencia de usuario y interfaz.",
  },
  {
    image: "/images/icons/seo.png",
    name: "SEO",
    description: "Optimización para motores de búsqueda.",
  },
  {
    image: "/images/icons/web03.webp",
    name: "Accesibilidad web - WCAG",
    description: "Diseño y desarrollo de contenidos web accesibles para todos los usuarios.",
  }
];

export default function Skills() {
  return (
    <section id="habilidades" className="bg-slate-900/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Mi perfil técnico
        </p>

        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          Habilidades
        </h2>

        <p className="mb-12 max-w-2xl text-slate-300">
          Estas son las tecnologías que utilizo para construir interfaces.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <div className="mb-4 flex items-center">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="float-left mr-4 mb-2"
                  unoptimized
                />

                <h3 className="mb-2 text-lg font-semibold text-cyan-300">
                  {skill.name}
                </h3>
              </div>

              <p className="text-sm leading-4 text-slate-400">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}