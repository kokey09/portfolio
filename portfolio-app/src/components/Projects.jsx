import { useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const projects = [
    {
        name: "Expense Monitoring Web App",
        description: "Fullstack development",
        imageUrl: "idont/have/linked/yet.jpg",
    },
    {
        name: "Online Voting Web App",
        description: "Fullstack development",
        imageUrl: "idont/have/linked/yet.jpg",
    },
];

function FloatingImage({ imageUrl, altText, mousePosition }) {
    return (
        <div
            className="pointer-events-none fixed"
            style={{
                top: mousePosition.y + 20,
                left: mousePosition.x + 20,
            }}
        >
            <img
                src={imageUrl}
                alt={altText}
                className="h-48 w-48 object-cover"
            />
        </div>
    );
}

function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (project) => {
        setHoveredProject(project);
    };

    const handleMouseLeave = () => {
        setHoveredProject(null);
    };

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const fadeInRef = useIntersectionObserver(
        (entry) => {
            entry.target.classList.add("fade-in");
        },
        { threshold: 0.1 },
    );

    return (
        <section className="mx-auto w-full max-w-[1200px] py-32" id="projects">
            <h2 className="text-secondary mb-6 text-base">Recent Projects</h2>

            <nav>
                <ul>
                    {projects.map((project, index) => (
                        <li
                            key={index}
                            className={`border-border-line border-b border-solid ${
                                index === 0 ? "border-t" : ""
                            } opacity-0 transition-opacity duration-1000`}
                            onMouseEnter={() => handleMouseEnter(project)}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            ref={fadeInRef}
                        >
                            <a
                                href="#"
                                className="grid grid-cols-2 items-center px-20 py-10"
                            >
                                <span className="text-4xl font-medium">
                                    {project.name}
                                </span>
                                <span className="text-secondary text-right text-base">
                                    {project.description}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {hoveredProject && (
                <FloatingImage
                    imageUrl={hoveredProject.imageUrl}
                    altText={hoveredProject.name}
                    mousePosition={mousePosition}
                />
            )}
        </section>
    );
}

export default Projects;
