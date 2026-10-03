import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";


const Header = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("#inicio");

    const links = [
        { id: "inicio", label: "Inicio" },
        { id: "sobre-mi", label: "Sobre mí" },
        { id: "habilidades", label: "Habilidades" },
        { id: "portafolio", label: "Proyectos" },
        { id: "contacto", label: "Contacto" },
    ];

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        // Banda de detección en la parte superior del viewport.
        // Con threshold alto (p. ej. 0.6), las secciones más altas que la
        // pantalla nunca llegan a ese % visible y nunca activan el menú.
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible[0]) {
                    setActive(`#${visible[0].target.id}`);
                }
            },
            {
                rootMargin: "-35% 0px -55% 0px",
                threshold: [0, 0.25, 0.5, 0.75, 1],
            }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <>
        <div className="bg-glow"></div>
        <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6%] py-5 backdrop-blur-[14px] bg-[rgba(10,14,20,0.55)] border-b border-[rgba(255,255,255,0.06)] transition-[padding] duration-300 ease-in-out">
            <div className="font-bold text-[1.3rem] tracking-[0.5px]">DL</div>
            <ul className={`flex gap-9 list-none ${open ? "open" : ""}`} id="navLinks">

                {links.map(({ id, label }) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            onClick={() => {
                                setOpen(false);
                                setActive(`#${id}`);
                            }}
                            className={`text-[#8a94a8] no-underline text-[0.92rem] font-medium relative py-1 transition-colors duration-250 ease-in-out ${active === `#${id}` ? "active2" : ""}`}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
            <button className="block md:hidden bg-none border-0 text-[#e8ecf3] text-[1.4rem] cursor-pointer" id="menuToggle" aria-label="Menu" onClick={() => setOpen(!open)}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </header>
        </>
    )
}

export default Header