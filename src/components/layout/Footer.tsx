import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <>
      <footer className="py-[40px] px-[6%] border-t border-t-[#232c40] flex justify-between items-center text-[#8a94a8] text-[.85rem] flex-wrap gap-[16px]">
        <span>© 2026 Daniel López. Todos los derechos reservados.</span>
        <div className="flex gap-[16px]">
          <a href="mailto:dlopezc90@gmail.com" className="text-[1.1rem]">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://www.linkedin.com/in/daniel-angel-lopez-cribilleros" target="_blank" className="text-[1.1rem]">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer