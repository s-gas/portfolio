import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="flex flex-col mx-12 sm:mx-16 my-10">
      <Hero />
      <Projects />
      <Footer />
    </div>
 )
}

export default App
