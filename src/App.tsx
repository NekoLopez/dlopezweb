import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Reveal from "./components/ui/Reveal";
import Skills from "./components/sections/Skills";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";

function App() {

  return (
    <>
      <Layout>
        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Portfolio />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>

      </Layout>
    </>
  )
}

export default App
