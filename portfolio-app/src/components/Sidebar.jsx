import { useContext, useRef } from "react";
import close from "../assets/icons/close.svg";
import { SidebarContext } from "../context/SidebarContext";
import useOutsideClick from "../hooks/useOutsideClick";

function Sidebar() {
    const navigation = [
        { href: "#samples1", text: "Samples 1" },
        { href: "#samples2", text: "Samples 2" },
        { href: "#samples3", text: "Samples 3" },
    ];

    const socials = [
        { href: "#samples1", text: "Facebook" },
        { href: "#samples2", text: "Github" },
    ];

    const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);

    const sidebarRef = useOutsideClick(closeSidebar);

    return (
        <aside
            ref={sidebarRef}
            className={`custom-left-shadow text-text-dark bg-light fixed right-0 top-0 z-50 flex h-full w-1/2 transform flex-col items-center justify-center gap-56 transition-transform duration-300 ease-in-out lg:w-1/4 ${
                isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <img
                src={close}
                alt="close"
                className="bg-dark absolute right-3 top-3 cursor-pointer rounded-full p-3 hover:bg-red-400"
                onClick={closeSidebar}
            />

            <nav>
                <h2 className="text-secondary border-b-border-line mb-12 border-b py-4 text-xs uppercase">
                    navigation
                </h2>
                <ul className="flex flex-col justify-center gap-4 text-3xl font-medium">
                    {navigation.map((link) => (
                        <li key={link.text} className="hover:underline">
                            <a href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <nav className="text-xs">
                <h2 className="text-secondary py-4 uppercase">Socials</h2>
                <ul className="text flex items-center gap-4">
                    {socials.map((social) => (
                        <li key={social.text}>
                            <a
                                href={social.href}
                                className="text-sm hover:underline"
                            >
                                {social.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
