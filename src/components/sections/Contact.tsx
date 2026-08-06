import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  return (
    <>
    <section id="contacto" className="py-[120px] px-[6%] relative">
        <div className="section-head max-w-[640px] mb-[64px]">
            <span className="text-[.85rem] font-semibold tracking-[2px] uppercase text-[#3dc9dc]">Contacto</span>
            <h2 className="tracking-[-1px] mt-[10px] text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-normal">Hablemos de tu próximo proyecto</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[22px]">
            <a href="mailto:dlopezc90@gmail.com" className="bg-[#131926] border border-[#232c40] rounded-[18px] py-[32px] px-[24px] text-center text-[#e8ecf3] transition-all duration-300 ease-[ease] no-underline">
                <div className="w-[56px] h-[56px] mt-0 mx-auto mb-[18px] rounded-[50%] flex items-center justify-center border border-[#232c40] text-[1.3rem] text-[#3dc9dc]">
                    <FontAwesomeIcon icon={faEnvelope} className="text-[28px]" />
                </div>
                <strong className="block text-[1rem] mb-[6px]">Correo electrónico</strong>
                <span className="text-[#8a94a8] text-[.88rem] wrap-break-word">dlopezc90@gmail.com</span>
            </a>
            <a href="https://wa.me/51963920988?text=Hola%2C%20he%20visto%20tu%20p%C3%A1gina%20y%20estoy%20interesado%2Fa%20en%20crear%20un%20sitio%20web%20contigo" target="_blank" className="bg-[#131926] border border-[#232c40] rounded-[18px] py-[32px] px-[24px] text-center text-[#e8ecf3] transition-all duration-300 ease-[ease] no-underline">
                <div className="w-[56px] h-[56px] mt-0 mx-auto mb-[18px] rounded-[50%] flex items-center justify-center border border-[#232c40] text-[1.3rem] text-[#3dc9dc]">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-[30px]" />
                </div>
                <strong className="block text-[1rem] mb-[6px]">Whatsapp</strong>
                <span className="text-[#8a94a8] text-[.88rem] wrap-break-word">+51 963 920 988</span>
            </a>
            <a href="tel:+34614588935" target="_blank" className="bg-[#131926] border border-[#232c40] rounded-[18px] py-[32px] px-[24px] text-center text-[#e8ecf3] transition-all duration-300 ease-[ease] no-underline">
                <div className="w-[56px] h-[56px] mt-0 mx-auto mb-[18px] rounded-[50%] flex items-center justify-center border border-[#232c40] text-[1.3rem] text-[#3dc9dc]">
                    <FontAwesomeIcon icon={faPhone} className="text-[28px]" />
                </div>
                <strong className="block text-[1rem] mb-[6px]">Teléfono</strong>
                <span className="text-[#8a94a8] text-[.88rem] wrap-break-word">+34 614 588 935</span>
            </a>
            <a href="https://www.linkedin.com/in/daniel-angel-lopez-cribilleros" target="_blank" className="bg-[#131926] border border-[#232c40] rounded-[18px] py-[32px] px-[24px] text-center text-[#e8ecf3] transition-all duration-300 ease-[ease] no-underline">
                <div className="w-[56px] h-[56px] mt-0 mx-auto mb-[18px] rounded-[50%] flex items-center justify-center border border-[#232c40] text-[1.3rem] text-[#3dc9dc]">
                    <FontAwesomeIcon icon={faLinkedin} className="text-[28px]" />
                </div>
                <strong className="block text-[1rem] mb-[6px]">LinkedIn</strong>
                <span className="text-[#8a94a8] text-[.88rem] wrap-break-word">Daniel López</span>
            </a>
        </div>
    </section>
    </>
  )
}

export default Contact