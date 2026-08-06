import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"
import { faPlug } from "@fortawesome/free-solid-svg-icons"

const Skills = () => {
  return (
    <>
    <section id="habilidades" className="py-[120px] px-[6%] relative">
        <div className="section-head max-w-[640px] mb-[64px]">
            <span className="text-[.85rem] font-semibold tracking-[2px] uppercase text-[#3dc9dc]">Habilidades</span>
            <h2 className="tracking-[-1px] mt-[10px] text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-normal">Stack de trabajo</h2>
            <p className="text-[#8a94a8] mt-[14px] text-[1.15rem] leading-[1.6]">Herramientas y lenguajes con los que construyo interfaces.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
            <div className="py-[30px] px-[26px] rounded-[18px] border border-[#232c40] bg-[#131926] transition-[transform,border-color,background] duration-300 ease-[ease]">
                <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center bg-[linear-gradient(135deg,#3ddc97_0%,#3dc9dc_50%,#7c5cff_100%)] text-[1.3rem] text-[#06120c] mb-[20px]"><FontAwesomeIcon icon={faCode} /></div>
                <h3 className="font-bold">Frontend Core</h3>
                <p>Maquetado y desarrollo de interfaces responsive desde cero.</p>
                <div className="flex flex-wrap mt-[14px] gap-[8px]">
                    <span className="text-[0.78rem] py-[5px] px-[12px] rounded-full border border-[#232c40] text-[#8a94a8] bg-[rgba(255,255,255,0.02)]">HTML5</span>
                    <span className="text-[0.78rem] py-[5px] px-[12px] rounded-full border border-[#232c40] text-[#8a94a8] bg-[rgba(255,255,255,0.02)]">CSS3</span>
                    <span className="text-[0.78rem] py-[5px] px-[12px] rounded-full border border-[#232c40] text-[#8a94a8] bg-[rgba(255,255,255,0.02)]">Bootstrap</span>
                    <span className="text-[0.78rem] py-[5px] px-[12px] rounded-full border border-[#232c40] text-[#8a94a8] bg-[rgba(255,255,255,0.02)]">jQuery</span>
                </div>
            </div>
            <div className="py-[30px] px-[26px] rounded-[18px] border border-[#232c40] bg-[#131926] transition-[transform,border-color,background] duration-300 ease-[ease]">
                <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center bg-[linear-gradient(135deg,#3ddc97_0%,#3dc9dc_50%,#7c5cff_100%)] text-[1.3rem] text-[#06120c] mb-[20px]"><FontAwesomeIcon icon={faLayerGroup} /></div>
                <h3 className="font-bold">Frameworks</h3>
                <p>Nivel básico, aplicado en componentes y estilos utilitarios.</p>
                <div className="flex flex-wrap mt-[14px] gap-[8px]">
                    <span className="text-[0.78rem] py-[5px] px-[12px] rounded-full border border-[#232c40] text-[#8a94a8] bg-[rgba(255,255,255,0.02)]">React</span>
                    <span className="text-[0.78rem] py-[5px] px-[12px] rounded-full border border-[#232c40] text-[#8a94a8] bg-[rgba(255,255,255,0.02)]">Tailwind CSS</span>
                </div>
            </div>
            <div className="py-[30px] px-[26px] rounded-[18px] border border-[#232c40] bg-[#131926] transition-[transform,border-color,background] duration-300 ease-[ease]">
                <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center bg-[linear-gradient(135deg,#3ddc97_0%,#3dc9dc_50%,#7c5cff_100%)] text-[1.3rem] text-[#06120c] mb-[20px]"><FontAwesomeIcon icon={faPlug} /></div>
                <h3 className="font-bold">Integración de APIs</h3>
                <p>Conexión de servicios externos a partir de documentación técnica.</p>
                <div className="flex flex-wrap mt-[14px] gap-[8px]">
                    <span className="text-[0.78rem] py-[5px] px-[12px] rounded-full border border-[#232c40] text-[#8a94a8] bg-[rgba(255,255,255,0.02)]">REST APIs</span>
                    <span className="text-[0.78rem] py-[5px] px-[12px] rounded-full border border-[#232c40] text-[#8a94a8] bg-[rgba(255,255,255,0.02)]">JSON</span>
                    <span className="text-[0.78rem] py-[5px] px-[12px] rounded-full border border-[#232c40] text-[#8a94a8] bg-[rgba(255,255,255,0.02)]">Documentación técnica</span>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Skills