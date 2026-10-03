import DL from "../../assets/images/1718222336426.jpg"

const About = () => {
  return (
    <>
    <section id="sobre-mi" className="py-[120px] px-[6%] relative">
        <div className="section-head max-w-[640px] mb-[64px]">
            <span className="text-[.85rem] font-semibold tracking-[2px] uppercase text-[#3dc9dc]">Sobre mí</span>
            <h2 className="tracking-[-1px] mt-[10px] text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-normal">Diseño y desarrollo frontend con foco en resultados</h2>
        </div>
        <div className="about-grid grid gap-[60px] items-center grid-cols-1 md:grid-cols-[0.9fr_1.4fr]">
            <div className="about-photo aspect-[1/1] rounded-[24px] relative overflow-hidden border border-[#232c40] flex items-center justify-center">
                <img src={DL} alt="Daniel" />
            </div>
            <div className="about-text">
                <p className="leading-[1.75] text-[1.15rem] text-[#8a94a8] mb-[18px]">Soy <strong>Daniel López</strong>, desarrollador frontend con más de <strong>5 años de experiencia en diseño</strong>, maquetado y desarrollo web. Trabajo principalmente con <strong>HTML5, CSS3, Bootstrap y jQuery</strong>, y he complementado mi perfil con <strong>React y Tailwind CSS</strong> a nivel básico.</p>
                <p className="leading-[1.75] text-[1.15rem] text-[#8a94a8] mb-[18px]">Una parte importante de mi trabajo es tomar la documentación de una API y convertirla en una integración real dentro del sitio: formularios que envían datos, contenido dinámico, servicios de terceros funcionando sin fricción para el usuario final.</p>
            </div>
        </div>
        
    </section>
    </>
  )
}

export default About