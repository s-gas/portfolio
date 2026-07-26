import Project from "./Project";

const Projects = () => {
  return (
    <section className="flex flex-col mt-60">
      <div className="border-b border-secondary pb-2">
        <h2 className="text-secondary">PROJECTS</h2>
      </div>
      <Project href="https://github.com/s-gas/meg-zki" title="meg-zki" description="PORTFOLIO WEBSITE" />
      <Project href="https://github.com/s-gas/gasmetrics" title="gasmetrics" description="GAS CONSUMPTION TRACKER" />
      <Project href="https://github.com/s-gas/hauslab" title="hauslab" description="SELF-HOSTED HOMELAB" />
      <Project href="https://github.com/s-gas/webserv" title="webserv" description="WEB SERVER (42 PROJECT)" />
      <Project href="https://github.com/s-gas/inception" title="inception" description="CONTAINERIZED INFRASTRUCTURE (42 PROJECT)" />
      <Project href="https://github.com/s-gas/minishell" title="minishell" description="SHELL (42 PROJECT)" />
    </section>
  );
};

export default Projects;
