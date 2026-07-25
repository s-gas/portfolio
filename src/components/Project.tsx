interface ProjectProps {
  title: string;
  description: string;
}

const Project = ({ title, description }: ProjectProps) => {
  return (
    <div className="border-b border-secondary flex justify-between items-center py-4">
      <p>{title}</p>
      <p className="text-secondary text-xs">{description}</p>
    </div>
  );
};

export default Project;
