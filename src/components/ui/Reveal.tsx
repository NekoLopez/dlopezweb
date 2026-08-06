import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Props que recibirá el componente Reveal.
 */
interface RevealProps {
  // Cualquier contenido que envuelvas con <Reveal>...</Reveal>
  children: ReactNode;

  // Permite agregar clases Tailwind adicionales
  className?: string;
}

export default function Reveal({
  children,
  className = "",
}: RevealProps) {

  /**
   * useRef guarda una referencia al elemento del DOM.
   *
   * Al principio vale:
   * ref.current = null
   *
   * Después de renderizar:
   * ref.current = <div>...</div>
   *
   * Gracias a esto podemos decirle al
   * IntersectionObserver qué elemento observar.
   */
  const ref = useRef<HTMLDivElement>(null);

  /**
   * Estado que indica si el elemento ya fue mostrado.
   *
   * false = todavía oculto
   * true = ya apareció en pantalla
   */
  const [show, setShow] = useState(false);

  /**
   * useEffect se ejecuta cuando el componente termina de renderizar.
   *
   * Como el arreglo de dependencias está vacío ([]),
   * este código solamente se ejecutará UNA VEZ.
   */
  useEffect(() => {

    /**
     * Seguridad.
     *
     * Si por alguna razón todavía no existe el div,
     * salimos del efecto.
     */
    if (!ref.current) return;

    /**
     * Creamos un IntersectionObserver.
     *
     * ¿Qué es?
     *
     * Es una API nativa del navegador que detecta
     * cuándo un elemento entra o sale del viewport
     * (la parte visible de la pantalla).
     *
     * Es mucho más eficiente que escuchar el evento
     * "scroll" constantemente.
     */
    const observer = new IntersectionObserver(

      /**
       * Este callback se ejecuta cada vez que cambia
       * la visibilidad del elemento observado.
       *
       * El navegador envía un array de elementos
       * observados (entries).
       *
       * Como nosotros solamente observamos un elemento,
       * usamos destructuración:
       *
       * ([entry])
       *
       * en lugar de:
       *
       * (entries) => entries[0]
       */
      ([entry]) => {

        /**
         * entry contiene mucha información:
         *
         * entry.isIntersecting
         * entry.intersectionRatio
         * entry.target
         * entry.boundingClientRect
         * etc.
         */

        /**
         * ¿El elemento ya entró en la pantalla?
         */
        if (entry.isIntersecting) {

          /**
           * Cambiamos el estado.
           *
           * React volverá a renderizar el componente.
           */
          setShow(true);

          /**
           * Dejamos de observar.
           *
           * Ya no necesitamos seguir comprobando
           * porque la animación solo debe ocurrir una vez.
           */
          observer.disconnect();
        }
      },
      {
          threshold: 0.15
      }

      /**
       * Opciones del observer.
       *
       * Por defecto no ponemos ninguna.
       *
       * Pero podríamos hacer por ejemplo:
       *
       * {
       *   threshold: 0.25
       * }
       *
       * para esperar hasta que el 25% del elemento
       * sea visible.
       */
    );

    /**
     * Empezamos a observar nuestro div.
     *
     * A partir de este momento el navegador vigilará
     * cuándo entra y sale del viewport.
     */
    observer.observe(ref.current);

    /**
     * Cleanup.
     *
     * React ejecuta esta función cuando el componente
     * desaparece de la pantalla.
     *
     * Así evitamos dejar observers activos
     * consumiendo memoria.
     */
    return () => observer.disconnect();

  }, []);

  return (

    /**
     * Asociamos el ref con este div.
     *
     * React hará automáticamente:
     *
     * ref.current = este div
     */
    <div
      ref={ref}

      /**
       * Clases Tailwind.
       *
       * Si show == false
       *
       * opacity-0
       * translate-y-10
       *
       * Si show == true
       *
       * opacity-100
       * translate-y-0
       *
       * Como existen:
       *
       * transition-all
       * duration-700
       *
       * Tailwind anima automáticamente
       * el cambio entre ambos estados.
       */
      className={`
        transition-all
        duration-700
        ease-out
        ${show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[30px]"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}