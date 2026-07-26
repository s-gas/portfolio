const Stack = () => {
  return (
    <section>
      <div className="border-b border-secondary pb-2 mt-60">
        <h2 className="text-secondary">TECH STACK</h2>
      </div>
      <div className="grid gird-cols-1 sm:grid-cols-[auto_1fr] gap-4 pt-4">
        <div className="text-secondary">Frontend: </div>
        <div>HTML, CSS, JavaScript, React, Tailwind</div>
        <div className="text-secondary">Backend: </div>
        <div>Node.js, Express, MongoDB</div>
        <div className="text-secondary">Tools: </div>
        <div>Git, Docker</div>
      </div>
    </section>
  );
};

export default Stack;
