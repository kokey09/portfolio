import { useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import fmrl from "../assets/projects-img/fmrl.svg";
import onlineVoting from "../assets/projects-img/online-voting.svg";

const projects = [
    {
        name: "Expense Monitoring Web App",
        description: "Fullstack development",
        imageUrl: fmrl,
        techStack: ["React", "Django", "Tailwind"],
    },
    {
        name: "Online Voting Web App",
        description: "Fullstack development",
        imageUrl: onlineVoting,
        techStack: ["React", "Django", "Tailwind", "ShadCn"],
    },
];

function FloatingImage({ imageUrl, altText, mousePosition, techStack }) {
    return (
        <div
            className="bg-md-dark pointer-events-none fixed z-50 flex flex-col gap-6 px-10 py-16"
            style={{
                top: mousePosition.y,
                left: mousePosition.x,
                transform: "translate(-50%, -50%)",
            }}
        >
            <img
                src={imageUrl}
                alt={altText}
                className="h-auto max-w-[400px]"
                loading="lazy"
            />

            <div className="flex gap-2">
                {techStack.map((tech, index) => (
                    <div
                        key={index}
                        className="text-light bg-accent inline-block self-start rounded-full px-4 py-2 text-sm"
                    >
                        <span>{tech}</span>
                    </div>
                ))}
            </div>
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
        // fade in function "OR" useIntersectionObserver callback
        (entry) => {
            if (entry.target.nodeName !== "LI") return;
            entry.target.classList.add("fade-in");
        },
        { threshold: 0.1 },
    );

    return (
        <section
            className="mx-auto w-full max-w-[90vw] py-32 xl:max-w-[1200px]"
            id="projects"
        >
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
                                className="grid grid-cols-2 items-center px-[7vw] py-[5vw] lg:px-20 lg:py-10"
                            >
                                <span
                                    className={`text-2xl font-medium transition-transform duration-300 lg:text-4xl ${
                                        hoveredProject === project
                                            ? "-translate-x-2 transform"
                                            : ""
                                    }`}
                                >
                                    {project.name}
                                </span>
                                <span className="text-secondary text-right text-sm lg:text-base">
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
                    techStack={hoveredProject.techStack}
                    mousePosition={mousePosition}
                />
            )}
        </section>
    );
}

export default Projects;
