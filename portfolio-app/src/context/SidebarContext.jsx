import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const sidebar = localStorage.getItem("sidebar");
        if (sidebar !== null) {
            setIsSidebarOpen(JSON.parse(sidebar));
        }
    }, []);

    const openSidebar = () => {
        setIsSidebarOpen(true);
        localStorage.setItem("sidebar", JSON.stringify(true));
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        localStorage.setItem("sidebar", JSON.stringify(false));
    };

    return (
        <SidebarContext.Provider
            value={{ isSidebarOpen, openSidebar, closeSidebar }}
        >
            {children}
        </SidebarContext.Provider>
    );
};
