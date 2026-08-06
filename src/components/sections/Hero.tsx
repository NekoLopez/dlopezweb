import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <>
    <section id="inicio" className="flex relative min-h-screen flex-col justify-center items-start pt-[120px] pb-[80px] px-[6%]">
        <div className="eyebrow"><span className="dot"></span> Disponible para nuevos proyectos</div>
        <h1 className="text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.05] font-bold tracking-[-1.5px] max-w-[900px] opacity-0 animate-[fadeUp_.7s_ease_.1s_forwards]">Hola, soy Daniel López.<br/>Construyo <span className="inline-block bg-[linear-gradient(135deg,#3ddc97_0%,#3dc9dc_50%,#7c5cff_100%)] bg-clip-text text-transparent">interfaces web</span> que funcionan.</h1>
        <p className="mt-[22px] text-[1.15rem] text-[#8a94a8] max-w-[680px] leading-[1.65] opacity-0 animate-[fadeUp_.7s_ease_.2s_forwards]">Desarrollador <strong className="text-[#e8ecf3]">Frontend</strong> con más de 3 años de experiencia maquetando y desarrollando sitios web funcionales con HTML5, CSS3, Bootstrap y jQuery. También integro <strong className="text-[#e8ecf3]">APIs</strong> siguiendo documentación técnica para conectar la web con servicios externos y la información llegue donde tiene que llegar.</p>
        <div className="flex gap-4 mt-[38px] flex-wrap opacity-0 animate-[fadeUp_.7s_ease_.3s_forwards]">
            <Button onClick={() => {
              window.location.href = "#portafolio";
            }} className="bg-[linear-gradient(135deg,#3ddc97_0%,#3dc9dc_50%,#7c5cff_100%)] text-[#06120c]"><FontAwesomeIcon icon={faBriefcase} className="text-[18px]" /> Portafolio</Button>
            <Button onClick={()=>{
                window.open("https://www.linkedin.com/in/daniel-angel-lopez-cribilleros", "_blank");
            }}><FontAwesomeIcon icon={faLinkedin} className="text-[18px]" /> Linkedin</Button>
        </div>
    </section>
    </>
  )
}

export default Hero