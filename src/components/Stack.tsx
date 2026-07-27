const Stack = () => {
  return (
    <section>
      <div className="border-b border-secondary pb-2 mt-60">
        <h2 className="text-secondary text-sm">TECH STACK</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-2 sm:gap-8 pt-4">
        <div className="text-secondary">Frontend: </div>
        <div className="mb-4 sm:mb-0">HTML, CSS, JavaScript, React, Tailwind</div>
        <div className="text-secondary">Backend: </div>
        <div className="mb-4 sm:mb-0">Node.js, Express, MongoDB</div>
        <div className="text-secondary">Tools: </div>
        <div className="mb-4 sm:mb-0">Git, Docker</div>
      </div>
    </section>
  );
};

export default Stack;
