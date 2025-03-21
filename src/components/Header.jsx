
import { useContext } from "react";
import menu from "../assets/icons/menu.svg";
import { SidebarContext } from "../context/SidebarContext";


function Header() {
    const { openSidebar } = useContext(SidebarContext);

    return (
        <header className="text-text-light bg-dark fixed top-0 z-40 flex w-full items-center justify-between p-6 text-base font-medium">
            <h2 className="cursor-pointer">khim</h2>
            <div
                className="flex cursor-pointer items-center gap-7"
                onClick={openSidebar}
            >
                <span>menu</span>
                <img src={menu} alt="menu button" />
            </div>
        </header>
    );
}

export default Header;