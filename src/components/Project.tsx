import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
}

const Project = ({ title, description }: ProjectProps) => {
  return (
    <div className="border-b border-secondary flex py-4 gap-2">
      <ArrowUpRight strokeWidth={1}/>
      <div className="flex justify-between items-center w-full">
        <p>{title}</p>
        <p className="text-secondary text-xs">{description}</p>
      </div>
    </div>
  );
};

export default Project;
