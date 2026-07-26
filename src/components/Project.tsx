import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  href: string;
  title: string;
  description: string;
}

const Project = ({ href, title, description }: ProjectProps) => {
  return (
    <a href={href}
      className="group border-b border-secondary flex py-4 gap-2"
      target="_blank" rel="noopener noreferrer">
      <ArrowUpRight className="block sm:hidden sm:group-hover:block" strokeWidth={1}/>
      <div className="flex flex-col sm:flex-row justify-between items-baseline w-full">
        <p>{title}</p>
        <p className="text-secondary text-xs">{description}</p>
      </div>
    </a>
  );
};

export default Project;
