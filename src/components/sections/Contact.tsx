import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
            <a href="mailto:dlopezc90@gmail.com" className="bg-[#131926] border border-[#232c40] rounded-[18px] py-[32px] px-[24px] text-center text-[#e8ecf3] transition-all duration-300 ease-[ease] no-underline">
                <div className="w-[56px] h-[56px] mt-0 mx-auto mb-[18px] rounded-[50%] flex items-center justify-center border border-[#232c40] text-[1.3rem] text-[#3dc9dc]">
                    <FontAwesomeIcon icon={faEnvelope} className="text-[28px]" />
                </div>
                <strong className="block text-[1rem] mb-[6px]">Correo electrónico</strong>
                <span className="text-[#8a94a8] text-[.90rem] wrap-break-word">dlopezc90@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/daniel-angel-lopez-cribilleros" target="_blank" className="bg-[#131926] border border-[#232c40] rounded-[18px] py-[32px] px-[24px] text-center text-[#e8ecf3] transition-all duration-300 ease-[ease] no-underline">
                <div className="w-[56px] h-[56px] mt-0 mx-auto mb-[18px] rounded-[50%] flex items-center justify-center border border-[#232c40] text-[1.3rem] text-[#3dc9dc]">
                    <FontAwesomeIcon icon={faLinkedin} className="text-[28px]" />
                </div>
                <strong className="block text-[1rem] mb-[6px]">LinkedIn</strong>
                <span className="text-[#8a94a8] text-[.90rem] wrap-break-word">Daniel López</span>
            </a>
            <div className="bg-[#131926] border border-[#232c40] rounded-[18px] py-[32px] px-[24px] text-center text-[#e8ecf3] transition-all duration-300 ease-[ease] no-underline">
                <div className="w-[56px] h-[56px] mt-0 mx-auto mb-[18px] rounded-[50%] flex items-center justify-center border border-[#232c40] text-[1.3rem] text-[#3dc9dc]">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-[30px]" />
                </div>
                <strong className="block text-[1rem] mb-[6px]">Whatsapp</strong>
                <div className="flex flex-col gap-2">
                    <a href="https://wa.me/51963920988?text=Hola%2C%20he%20visto%20tu%20p%C3%A1gina%20y%20estoy%20interesado%2Fa%20en%20crear%20un%20sitio%20web%20contigo" target="_blank" >
                        <div className="text-[#8a94a8] text-[.90rem] flex gap-2 justify-center">
                            <svg viewBox="0 0 64 64" className="w-[22px] h-[22px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#ed4c5c"> <path d="M62 32c0-13.1-8.3-24.2-20-28.3v56.6C53.7 56.2 62 45.1 62 32"> </path> <path d="M2 32c0 13.1 8.4 24.2 20 28.3V3.7C10.4 7.8 2 18.9 2 32z"> </path> </g> <path d="M42 3.7C38.9 2.6 35.5 2 32 2s-6.9.6-10 1.7v56.6c3.1 1.1 6.5 1.7 10 1.7s6.9-.6 10-1.7V3.7z" fill="#f9f9f9"> </path> </g></svg> 
                            <span>+51 963 920 988</span>
                        </div>
                    </a>
                    <a href="https://wa.me/34641304305?text=Hola%2C%20he%20visto%20tu%20p%C3%A1gina%20y%20estoy%20interesado%2Fa%20en%20crear%20un%20sitio%20web%20contigo" target="_blank" >
                        <div className="text-[#8a94a8] text-[.90rem] flex gap-2 justify-center">
                            <svg viewBox="0 0 64 64" className="w-[22px] h-[22px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 32c0 5.9 1.7 11.4 4.6 16h50.7c2.9-4.6 4.6-10.1 4.6-16s-1.7-11.4-4.6-16H6.6C3.7 20.6 2 26.1 2 32z" fill="#ffce31"> </path> <g fill="#ed4c5c"> <path d="M57.4 16C52.1 7.6 42.7 2 32 2S11.9 7.6 6.6 16h50.8z"> </path> <path d="M6.6 48c5.3 8.4 14.7 14 25.4 14s20.1-5.6 25.4-14H6.6z"> </path> </g> <g fill="#c8b100"> <path d="M9.2 28.7h3.2v1.8H9.2z"> </path> <path d="M9.2 41.9h3.3v1.7H9.2z"> </path> </g> <path d="M8.9 39.1c-.3.2-.5.4-.5.5c0 .1.1.2.3.3c.2.1.4.3.3.5c.2-.2.3-.4.3-.6c0-.3-.2-.6-.4-.7" fill="#ed4c5c"> </path> <path fill="#ffffff" d="M9.7 30.5H12v11.4H9.7z"> </path> <g fill="#ed4c5c"> <path d="M14.4 34.7c-.5-.2-1.4-.4-2.4-.4c-.3 0-.7 0-1.1.1c-1.4.2-2.5.8-2.4 1.2L8 34.5c-.1-.5 1.1-1.1 2.6-1.4c.5-.1 1-.1 1.4-.1c1 0 1.9.1 2.4.3v1.4"> </path> <path d="M9.7 36.2c-.6 0-1.1-.2-1.1-.5c0-.2.2-.5.6-.7h.6l-.1 1.2"> </path> <path d="M12 35.3c.4.1.7.2.9.3c.1.1-.3.5-.9.8v-1.1"> </path> <path d="M8.2 38.4c-.1-.2.6-.6 1.5-.9c.4-.1.7-.3 1.2-.5c1.2-.5 2.2-1.2 2-1.4l.2 1.2c.1.2-.7.8-1.9 1.4c-.4.2-1.1.5-1.5.6c-.7.2-1.3.6-1.3.7l-.2-1.1"> </path> </g> <g fill="#c8b100"> <path d="M30.7 28.7h3.2v1.8h-3.2z"> </path> <path d="M30.6 41.9h3.3v1.7h-3.3z"> </path> </g> <path d="M34.2 39.1c.3.2.5.4.5.5c0 .1-.1.2-.3.3c-.2.2-.4.5-.3.6c-.2-.2-.3-.4-.3-.6c0-.4.2-.7.4-.8" fill="#ed4c5c"> </path> <path fill="#ffffff" d="M31.1 30.5h2.3v11.4h-2.3z"> </path> <g fill="#ed4c5c"> <path d="M28.7 34.7c.5-.2 1.4-.4 2.4-.4c.3 0 .7 0 1.1.1c1.4.2 2.5.8 2.4 1.2l.5-1.2c.1-.5-1.1-1.1-2.6-1.4h-1.4c-1 0-1.9.1-2.4.3v1.4"> </path> <path d="M33.4 36.2c.6 0 1.1-.2 1.1-.5c0-.2-.2-.5-.6-.7h-.6l.1 1.2"> </path> <path d="M31.1 35.3c-.4.1-.7.2-.9.3c-.1.1.3.5.9.8v-1.1"> </path> <path d="M34.9 38.4c.1-.2-.6-.6-1.5-.9c-.4-.1-.7-.3-1.2-.5c-1.2-.5-2.2-1.2-2-1.4l-.2 1.2c-.1.2.7.8 1.9 1.4c.4.2 1.1.5 1.5.6c.7.2 1.3.7 1.2.8l.3-1.2"> </path> <path d="M21.5 22.3c1.9 0 5.8.4 7.2 1.8c-1.5 3.6-3.9 2.1-7.2 2.1c-3.2 0-5.7 1.5-7.2-2.1c1.4-1.4 5.2-1.8 7.2-1.8"> </path> </g> <g fill="#c8b100"> <path d="M26.4 26.3c-1.2-.7-3-.8-4.9-.8c-1.9 0-3.7.2-4.9.8L17 28c1.1.3 2.7.5 4.5.6c1.8 0 3.3-.2 4.5-.6l.4-1.7"> </path> <path d="M28.1 22c-.4-.3-1.2-.6-1.9-.6c-.3 0-.6 0-.9.1c0 0-.6-.8-2-.8c-.5 0-.9.1-1.3.3v-.1c-.1-.2-.3-.4-.5-.4s-.5.3-.5.5v.1c-.4-.2-.8-.3-1.3-.3c-1.4 0-2 .9-2 .8c-.3-.1-.6-.1-.9-.1c-4.6 0-2.3 3.1-2.3 3.1l.5-.6c-1.1-1.4-.1-2.2 1.9-2.2c.3 0 .5 0 .7.1c-.7 1 .6 1.9.6 1.9l.3-.5c-.7-.5-.8-2.2 1.2-2.2c.5 0 .9.1 1.3.4c0 .1-.1 1.5-.2 1.7l.8.7l.8-.7c-.1-.3-.2-1.6-.2-1.7c.3-.2.8-.4 1.3-.4c2.1 0 2.1 1.7 1.2 2.2l.3.5s1.1-.9.6-1.9c.2 0 .5-.1.7-.1c2.4 0 2.5 1.8 1.9 2.2l.4.6c-.2 0 .9-1.4-.5-2.6"> </path> </g> <path d="M20.9 20.1c0-.3.3-.6.6-.6s.6.3.6.6s-.3.6-.6.6s-.6-.3-.6-.6" fill="#005bbf"> </path> <path fill="#c8b100" d="M21.3 18.4v.3H21v.3h.3v1h-.4v.3h1.2l.1-.2l-.1-.1h-.4v-1h.3v-.3h-.3v-.3z"> </path> <path d="M21.5 28.3c-1.6 0-3-.2-4.1-.5c1.1-.3 2.5-.5 4.1-.5c1.6 0 3 .2 4.1.5c-1 .3-2.5.5-4.1.5" fill="#ed4c5c"> </path> <g fill="#ffffff"> <path d="M21.6 45.6c-1.9 0-3.7-.5-5.3-1.2c-1.2-.6-1.9-1.7-1.9-3v-4.8h14.4v4.8c0 1.3-.8 2.5-1.9 3c-1.6.8-3.4 1.2-5.3 1.2"> </path> <path d="M21.5 28.6h7.2v8h-7.2z"> </path> </g> <path d="M21.6 41.4c0 1.9-1.6 3.4-3.6 3.4s-3.6-1.5-3.6-3.4v-4.8h7.2v4.8" fill="#ed4c5c"> </path> <g fill="#c8b100"> <path d="M15.9 44.2c.2.1.5.3.9.4v-8.2H16l-.1 7.8"> </path> <path d="M14.3 41.3c0 1 .4 1.8.8 2.2v-7.1h-.8v4.9"> </path> </g> <path d="M17.5 44.8h.8v-8.4h-.8v8.4" fill="#c7b500"> </path> <path d="M19.1 44.6c.3-.1.7-.3.9-.4v-7.8h-.8l-.1 8.2" fill="#c8b100"> </path> <path fill="#ed4c5c" d="M14.3 28.6h7.2v8h-7.2z"> </path> <path d="M20.8 43.5c.4-.3.7-1 .8-1.8v-5.2h-.8v7" fill="#c8b100"> </path> <g fill="#ed4c5c"> <path d="M28.8 36.6v4.8c0 1.9-1.6 3.4-3.6 3.4s-3.6-1.5-3.6-3.4v-4.8h7.2"> </path> <path d="M26.2 30c.3.6.3 2.1-.6 1.8c.2.1.3.8.6 1.2c.5.6 1.1.1 1-.6c-.2-1.1-.1-1.8.1-2.9c0 .1.5.1.7-.1c-.1.3-.2.7 0 .7c-.2.3-.7.8-.8 1.1c-.1.7 1 2-.2 2.3c-.8.2-.3.8 0 1.1c0 0-.4 1.3-.2 1.2c-.8.3-.6-.4-.6-.4c.4-1.2-.7-1.3-.6-1.5c-1-.1.1.9-.8.9c-.2 0-.6.2-.6.2c-1.1-.1-.5-1.1-.1-1c.3.1.6.6.6-.1c0 0-.5-.8.8-.8c-.5 0-.8-.4-1-.9c-.2.1-.5.6-1.6.7c0 0-.3-1.1 0-.9c.4.2.6.2 1-.2c-.2-.3-1.4-.7-1.2-1.4c0-.2.6-.5.6-.5c-.1.5.2 1 .8 1c.8.1.5-.2.6-.4c.1-.2.7.1.5-.4c0-.1-.7-.2-.5-.5c.4-.5 1-.1 1.5.4"> </path> <path d="M21.6 44.6l-.2-.5l.2-.6l.2.6l-.2.5"> </path> </g> <g fill="#c8b100"> <path d="M16.5 30.3v.5h.2v.4h-.5v1h.3v2.2h-.6v1.1H20v-1.1h-.5v-2.2h.2v-1h-.5v-.4h.3v-.5h-1v.5h.2v.4h-.5V30h.3v-.5h-1.1v.5h.3v1.2h-.5v-.4h.2v-.5z"> </path> <path d="M27.8 42.6v-5h-5.2v5l2.4 1.1h.3l2.5-1.1M25 38v1.7L23.3 38H25m-2.1.1l2 2l-2 2v-4m.2 4.4l1.9-1.9v2.8l-1.9-.9m2.2.8v-2.8l1.9 1.9l-1.9.9m2.1-1.2l-2-2l2-2v4M25.3 38H27l-1.7 1.7V38"> </path> </g> <path d="M19.2 36.5c0-1.5 1-2.6 2.3-2.6s2.3 1.2 2.3 2.6s-1 2.6-2.3 2.6s-2.3-1.1-2.3-2.6" fill="#ed4c5c"> </path> <path d="M19.9 36.5c0-1.1.7-1.9 1.6-1.9s1.6.9 1.6 1.9c0 1.1-.7 1.9-1.6 1.9s-1.6-.8-1.6-1.9" fill="#005bbf"> </path> <g fill="#c8b100"> <path d="M20.8 35.2l-.4 1.1l.3.1l-.2.4h.6l-.2-.4l.3-.1l-.4-1.1"> </path> <path d="M22.3 35.2l-.4 1.1l.3.1l-.2.4h.6l-.1-.4l.3-.1l-.5-1.1"> </path> <path d="M21.6 36.5l-.5 1.1l.3.1l-.1.4h.5l-.1-.4l.3-.1l-.4-1.1"> </path> </g> </g></svg>
                            <span>+34 641 304 305</span>
                        </div>
                    </a>
                </div>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default Contact