import Image from "next/image";

export default function About() {
  return (
    <section id="sobre-mi" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Conóceme
        </p>

        {/* <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
              Sobre mí
            </h2> 
            <p>
              Hola soy David Rodriguez, profesional en Diseño Gráfico con enfoque en diseño y desarrollo web.
            </p>
            <p>
              Tengo experiencia administración de portales web, diseño y desarrollo de interfaces 
              modernas, responsivas y optimizadas, con base en análisis de requerimientos de 
              contenidos, público objetivo y expectativa de impacto, así mismo evaluar y 
              analizar métricas de contenido e información y generar reportes e informes 
              respectivos. 
            </p>
            <p>
              Tengo experiencia en HTML, CSS, Javascript, React y consumo de 
              APIs. Experiencia trabajando con GitHub, Dreamhost, CMS como Wordpress y 
              Strapi. 
            </p>
            <p>
              Tengo interés en desarrollo de soluciones web escalables, administración y 
              mantenimiento de sitios web y convertir requerimientos de negocio en 
              experiencias digitales funcionales. 
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/profile_web.webp"
              alt="David Rodriguez"
              width={400}
              height={600}
              className="rounded-2xl object-cover"
              unoptimized
            />
          </div>
        </div> */}

        <div className="grid items-center gap-12 md:grid-cols-2">
          
          {/* Foto */}
          <div>
            <Image
              src="/images/profile.webp"
              alt="David Rodriguez"
              width={600}
              height={600}
              className="rounded-2xl object-cover"
              unoptimized
            />
          </div>

          {/* Información */}
          <div>
            <h3 className="text-3xl font-bold text-white">
              David Rodriguez
            </h3>

            <p className="mt-3 text-xl text-cyan-400">
              Diseñador y Desarrollador Web
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Desarrollador web enfocado en la creación de sitios y aplicaciones modernas utilizando React, Next.js, TypeScript y tecnologías de backend.
            </p>

            <div className="mt-8">
              <span className="text-4xl font-bold text-white">
                5+
              </span>

              <p className="text-slate-400">
                años de experiencia
              </p>
            </div>

            {/* CV */}
            <a
              href="/pdf/Carlos David Rodriguez Hernandez - CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
                Descargar CV
            </a>
          </div>

        </div>
        
      </div>
    </section>
  );
}