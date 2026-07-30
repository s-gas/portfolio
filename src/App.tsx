import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Stack from "./components/Stack"

function App() {
  return (
    <div className="flex flex-col px-8 sm:px-16 py-10">
      <Hero />
      <Projects />
      <Stack />
      <Footer />
    </div>
 )
}

export default App
