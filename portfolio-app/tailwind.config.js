/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#131313", // black
                'md-dark': "#979797", // black
                light: "#EEEEEE", // white
                accent: "#0088CC", //blue
                secondary: "#666666", // gray
                "border-line": "#979797",
                "text-dark": "#000000", // black
                "text-light": "#FFFFFF", // white
                // Add more custom colors here
            },
        },
    },
    plugins: [],
};
