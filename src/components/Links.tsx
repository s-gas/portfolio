import Link from "./Link"

const Links = () => {
  return (
    <div className="flex flex-col items-center mt-60 gap-4">
      <Link href="https://github.com/s-gas">GITHUB</Link>
      <Link href="https://www.linkedin.com/in/simone-gasparini-0b95a5179">LINKEDIN</Link>
      <Link href="mailto:simone.gasparini.2@gmail.com">EMAIL</Link>
    </div>
  );
};

export default Links;
