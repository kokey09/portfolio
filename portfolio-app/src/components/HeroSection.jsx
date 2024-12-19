function HeroSection() {
    return (
        <main className="bg-dark min-h-screen pt-16 text-text-light grid place-content-center text-center">
            <h1 className="font-bold text-6xl mb-4">Khim S. Rata</h1>
            <h2 className="font-medium text-4xl  mb-14">
                Fullstack <span className="text-accent">Developer</span>
            </h2>

            <div className="flex items-center gap-5 justify-center text-base">
                <a
                    className="bg-light text-text-dark px-6 py-4 rounded-full"
                    href="https://drive.google.com/file/d/1V25jyzTdgUAJJmS8qtH4ppqfr2_vIHZD/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </a>

                <a
                    className="bg-dark border border-solid-light px-6 py-4  rounded-full"
                    href="#projects"
                >
                    Projects
                </a>
            </div>
        </main>
    );
}

export default HeroSection;
