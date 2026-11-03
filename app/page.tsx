import Link from "next/link";
import Image from "next/image";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navegación */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="#inicio" className="text-xl font-bold">
            Portafolio<span className="text-cyan-400">Web</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <Link href="#sobre-mi" className="transition hover:text-cyan-400">
              Sobre mí
            </Link>

            <Link href="#proyectos" className="transition hover:text-cyan-400">
              Proyectos
            </Link>

            <Link href="#habilidades" className="transition hover:text-cyan-400">
              Habilidades
            </Link>            

            <Link href="#contacto" className="transition hover:text-cyan-400">
              Contacto
            </Link>
          </div>

          <a
            href="#contacto"
            className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Hablemos
          </a>
        </nav>
      </header>

      {/* Presentación principal */}

      <section id="inicio" className="mx-auto min-h-[40vh] max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 min-h-[60vh] items-center">
          <div className="col-span-2">
            <span className="text-cyan-400 font-semibold">
              Hola, soy
            </span>

            <h1 className="mt-4 text-5xl font-bold">
              David Rodriguez
            </h1>

            <p className="mt-8 mb-8 text-slate-400">
              Desarrollo interfaces web atractivas, rápidas y adaptables a diferentes dispositivos, combinandodiseño, tecnología y una buena experiencia de usuario.
            </p>

            <a
              href="#proyectos"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Ver mis proyectos
            </a>
          </div>
  
          <div className="p-20 md:p-0">
            <Image
              src="/images/profile-hero.webp"
              alt="David Rodriguez"
              width={600}
              height={600}
              className="rounded-full object-cover "
              unoptimized
            />
          </div>
        </div>
      </section>

      <About />
      <Projects />
      <Skills />
      <Services />      
      <Contact />
      <Footer />

      {/* Las demás secciones se agregarán en los siguientes módulos */}
    </main>
  );
}