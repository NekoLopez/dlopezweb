import limac from "../../assets/images/limac_peru.jpg"
import limacEspana from "../../assets/images/limac_espana.jpg"
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <>
    <section id="portafolio" className="py-[120px] px-[6%] relative">
        <div className="section-head max-w-[640px] mb-[64px]">
            <span className="text-[.85rem] font-semibold tracking-[2px] uppercase text-[#3dc9dc]">Portafolio</span>
            <h2 className="tracking-[-1px] mt-[10px] text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-normal">Proyectos en los que he trabajado</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[26px] mb-6">
            <div className="border border-[#232c40] bg-[#131926] rounded-[20px] overflow-hidden relative transition-[transform,box-shadow,border-color] duration-350 ease-[ease]">
                <a href="https://proyectolimac.dlopezweb.com/002.html" target="_blank">
                    <div>
                        <img src={limacEspana} />
                    </div>
                    <div className="py-[24px] px-[26px]">
                        <h3 className="text-[1.2rem] mb-[6px] font-semibold">LIMAC España</h3>
                        <p className="text-[#8a94a8] text-[0.92rem] mb-[16px] leading-[1.5]">Sitio corporativo para la filial de Madrid de una empresa de traducción. Maquetado, desarrollo responsive e integración de secciones dinámicas.</p>
                    </div>
                </a>
            </div>

            <div className="border border-[#232c40] bg-[#131926] rounded-[20px] overflow-hidden relative transition-[transform,box-shadow,border-color] duration-350 ease-[ease]">
                <div>
                    <img src={limac} />
                </div>
                <div className="py-[24px] px-[26px]">
                    <h3 className="text-[1.2rem] mb-[6px] font-semibold">LIMAC</h3>
                    <p className="text-[#8a94a8] text-[0.92rem] mb-[16px] leading-[1.5]">Sitio corporativo para la sede de Lima. Maquetado y desarrollo frontend completo, con secciones de servicios, testimonios y bolsa de trabajo. Vista no disponible.</p>
                </div>
            </div>
            
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[26px] mb-6">

            <div className="flex justify-end gap-[26px] flex-wrap border border-[#232c40] bg-[#131926] py-[24px] px-[26px] rounded-[20px] overflow-hidden relative transition-[transform,box-shadow,border-color] duration-350 ease-[ease]">
                <div className="flex gap-4 items-start flex-col lg:flex-row">
                    <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center bg-[linear-gradient(135deg,#3ddc97_0%,#3dc9dc_50%,#7c5cff_100%)] text-[1.3rem] text-[#06120c] shrink-0 mx-auto lg:mx-0"><FontAwesomeIcon icon={faLinkedin} /></div>
                    <p className="text-[#8a94a8] text-[1.05rem] leading-[1.6]">Estos proyectos corresponden a experiencia laboral previa. Puedes revisar mi historial completo en LinkedIn o conversamos directamente sobre mi experiencia.</p>
                </div>
                <Button onClick={()=>{
                    window.open("https://www.linkedin.com/in/daniel-angel-lopez-cribilleros", "_blank");
                }}><FontAwesomeIcon icon={faLinkedin} className="text-[18px]" /> Linkedin</Button>
            </div>

            <div className="flex justify-end gap-[26px] flex-wrap border border-[#232c40] bg-[#131926] py-[24px] px-[26px] rounded-[20px] overflow-hidden relative transition-[transform,box-shadow,border-color] duration-350 ease-[ease]">
                <div className="flex gap-4 items-start flex-col lg:flex-row">
                    <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center bg-[linear-gradient(135deg,#3ddc97_0%,#3dc9dc_50%,#7c5cff_100%)] text-[1.3rem] text-[#06120c] shrink-0 mx-auto lg:mx-0"><FontAwesomeIcon icon={faFile} /></div>
                    <p className="text-[#8a94a8] text-[1.05rem] leading-[1.6]">Adicionalmente puede obtener información sobre mis estudios, habilidades y experiencia laboral descargando el siguiente currículum.</p>
                </div>
                <Button onClick={()=>{
                    window.open("https://dlopezweb.com/assets/pdf/CVDanielLopez.pdf", "_blank");
                }}><FontAwesomeIcon icon={faFile} className="text-[18px]" /> Descargar CV</Button>
            </div>

        </div>

    </section>
    </>
  )
}

export default Portfolio