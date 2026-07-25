import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Links from "./components/Links"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="flex flex-col mx-12 my-10">
      <Hero />
      <Projects />
      <Links />
      <Footer />
    </div>
 )
}

export default App
