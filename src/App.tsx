function App() {
  return (
    <div className="flex flex-col mx-12 my-10">
      <div className="flex flex-col sm:flex-row justify-between mt-60">
        <p className="text-lg">SIMONE GASPARINI</p>
        <p className="text-secondary text-lg">SOFTWARE DEVELOPER</p>
      </div>
      <div className="flex flex-col mt-60">
        <div className="border-b border-secondary pb-2">
          <h2 className="text-secondary">PROJECTS</h2>
        </div>
        <div className="border-b border-secondary flex justify-between py-4">
          <p>meg-zki</p>
          <p className="text-secondary text-xs">PORTFOLIO WEBSITE</p>
        </div>
        <div className="border-b border-secondary flex justify-between py-4">
          <p>gasmetrics</p>
          <p className="text-secondary text-xs">GAS CONSUMPTION TRACKER</p>
        </div>
        <div className="border-b border-secondary flex justify-between items-center py-4">
          <p>hauslab</p>
          <p className="text-secondary text-xs">SELF-HOSTED HOMELAB</p>
        </div>
        <div className="border-b border-secondary flex justify-between items-center py-4">
          <p>webserv</p>
          <p className="text-secondary text-xs">WEB SERVER (42 PROJECT)</p>
        </div>
        <div className="border-b border-secondary flex justify-between items-center py-4">
          <p>inception</p>
          <p className="text-secondary text-xs">CONTAINERIZED INFRASTRUCTURE (42 PROJECT)</p>
        </div>
        <div className="border-b border-secondary flex justify-between items-center py-4">
          <p>minishell</p>
          <p className="text-secondary text-xs">SHELL (42 PROJECT)</p>
        </div>
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
