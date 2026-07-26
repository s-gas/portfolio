import { ArrowUpRight } from "lucide-react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: LinkProps) => {
  return (
    <div className="flex flex-row">
      <a className="hover:underline underline-offset-4 decoration-inherit decoration-1" href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
      <ArrowUpRight size={16} strokeWidth={1}/>
    </div>
  );
};

export default Link;
