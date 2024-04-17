import React from "react";
import { projects } from "../project-data";
import '../assets/css/project.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Projects() {
    return (
        <section id="projects" className="py-5">
            <div className="container">
                <h1 className="text-center mb-5">
                    My Projects
                </h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 single-project">
                    {projects.map((project) => (
                        <div className="col" key={project.id}>
                            <a href={project.link} className="text-decoration-none">
                                <div className="card h-100">
                                    <img src={project.image} className="card-img-top project-img" alt="project" />
                                    <div className="card-body">
                                        <h5 className="card-title">{project.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{project.subtitle}</h6>
                                        <p className="card-text">{project.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Projects