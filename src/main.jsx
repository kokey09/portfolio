import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import "./index.css";
import App from "./App";


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <SidebarProvider>
            <App />
        </SidebarProvider>
    </StrictMode>
);
