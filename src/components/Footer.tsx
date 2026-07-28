import Link from "./Link";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row justify-between mt-60 text-sm text-secondary">
      <Link href="https://github.com/s-gas">GITHUB</Link>
      <Link href="https://www.linkedin.com/in/s-gas">LINKEDIN</Link>
      <Link href="mailto:simone.gasparini.2@gmail.com">EMAIL</Link>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
