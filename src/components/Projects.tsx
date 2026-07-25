import Project from "./Project";

const Projects = () => {
  return (
    <div className="flex flex-col mt-60">
      <div className="border-b border-secondary pb-2">
        <h2 className="text-secondary">PROJECTS</h2>
      </div>
      <Project title="meg-zki" description="PORTFOLIO WEBSITE" />
      <Project title="gasmetrics" description="GAS CONSUMPTION TRACKER" />
      <Project title="hauslab" description="SELF-HOSTED HOMELAB" />
      <Project title="webserv" description="WEB SERVER (42 PROJECT)" />
      <Project title="inception" description="CONTAINERIZED INFRASTRUCTURE (42 PROJECT)" />
      <Project title="minishell" description="SHELL (42 PROJECT)" />
    </div>
  );
};

export default Projects;
