function App() {
  return (
    <div className="flex flex-col mx-12 my-10">
      <div className="flex flex-col sm:flex-row justify-between mt-60">
        <p>SIMONE GASPARINI</p>
        <p className="text-secondary">SOFTWARE DEVELOPER</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-60">
        <div className="w-50 h-50 bg-amber-700"></div>
        <div className="w-50 h-50 bg-amber-700"></div>
        <div className="w-50 h-50 bg-amber-700"></div>
      </div>
      <div className="flex flex-col items-center mt-60 gap-4">
        <p>GITHUB</p>
        <p>LINKEDIN</p>
        <p>EMAIL</p>
      </div>
      <div className="mt-60">
        <p className="text-secondary text-xs">© {new Date().getFullYear()}</p>
      </div>
    </div>
 )
}

export default App
