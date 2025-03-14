function HeroSection() {
    return (
        <main className="bg-dark text-text-light grid min-h-screen place-content-center pt-16 text-center">
            <h1 className="mb-4 text-6xl font-bold">Khim S. Rata</h1>
            <h2 className="mb-14 text-4xl font-medium">
                Fullstack <span className="text-accent">Developer</span>
            </h2>

            <div className="flex items-center justify-center gap-5 text-base">
                <a
                    className="bg-light text-text-dark rounded-full px-6 py-4"
                    href="https://drive.google.com/file/d/1V25jyzTdgUAJJmS8qtH4ppqfr2_vIHZD/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </a>

                <a
                    className="bg-dark border-solid-light rounded-full border px-6 py-4"
                    href="#projects"
                >
                    Projects
                </a>
            </div>
        </main>
    );
}

export default HeroSection;
