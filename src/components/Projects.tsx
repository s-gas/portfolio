import Project from "./Project";

const Projects = () => {
  return (
    <section className="flex flex-col mt-60">
      <div className="border-b border-border pb-2">
        <h2 className="text-secondary text-sm">PROJECTS</h2>
      </div>
      <Project href="https://github.com/s-gas/meg-zki" title="meg-zki" description="PORTFOLIO WEBSITE" />
      <Project href="https://github.com/s-gas/gasmetrics" title="gasmetrics" description="GAS CONSUMPTION TRACKER" />
      <Project href="https://github.com/s-gas/hauslab" title="hauslab" description="SELF-HOSTED HOMELAB" />
      <Project href="https://github.com/s-gas/webserv" title="webserv" description="WEB SERVER" />
      <Project href="https://github.com/s-gas/inception" title="inception" description="CONTAINERIZED INFRASTRUCTURE" />
      <Project href="https://github.com/s-gas/minishell" title="minishell" description="SHELL" />
    </section>
  );
};

export default Projects;
