import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProjectDemo.css"; // Import custom CSS

const projectsData = [
  {
    id: 1,
    title: "Development website ",
    demoUrl: "https://development-site.netlify.app/",
    sourceUrl: "https://development-site.netlify.app/",
    image: "dev.png",
  },
  {
    id: 2,
    title: "Calculator App",
    demoUrl: "https://calculator-61564.web.app/",
    sourceUrl: "https://calculator-61564.web.app/",
    image: "cal.png",
  },
  {
    id: 3,
    title: "Online Quize Game",
    demoUrl: "https://online-q.netlify.app/",
    sourceUrl: "https://online-q.netlify.app/",
    image: "quiz.png",
  },
  {
    id: 4,
    title: "Leopard Villa",
    demoUrl: "https://example.com/leopard-villa",
    sourceUrl: "https://github.com/example/leopard-villa",
    image: "https://via.placeholder.com/600x400?text=Leopard+Villa",
  },
  {
    id: 5,
    title: "Navas Hotel",
    demoUrl: "https://example.com/navas-hotel",
    sourceUrl: "https://github.com/example/navas-hotel",
    image: "https://via.placeholder.com/600x400?text=Navas+Hotel",
  },
  {
    id: 6,
    title: "StudentWin Education",
    demoUrl: "https://example.com/studentwin",
    sourceUrl: "https://github.com/example/studentwin",
    image: "https://via.placeholder.com/600x400?text=StudentWin+Education",
  },
];

const ProjectsDemo = () => {
  return (
    <section className="projects-section py-5" id="projects">
      <div className="container">
        <h2 className="text-center mb-5 section-title">🚀 My Projects</h2>

        <div className="row g-4">
          {projectsData.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div className="project-card text-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid rounded shadow"
                />
                <h5 className="mt-3">{project.title}</h5>
                <div className="links">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-link"
                  >
                    Live Preview
                  </a>{" "}
                  /{" "}
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="source-link"
                  >
                    Request Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsDemo;
