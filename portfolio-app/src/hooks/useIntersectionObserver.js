import { useEffect, useRef } from "react";

function useIntersectionObserver(callback, options) {
    const elementsRef = useRef([]);

    useEffect(() => {
        // elementsRef array
        const currentElements = elementsRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback(entry);
                }
            });
        }, options);

        currentElements.forEach((element) => {
            if (element) observer.observe(element);
        });

        function cleanup() {
            currentElements.forEach((element) => {
                if (element) observer.unobserve(element);
            });
        }

        return cleanup;
    }, [callback, options]);

    return (element) => {
        if (element && !elementsRef.current.includes(element)) {
            elementsRef.current.push(element);
        }
    };
}

export default useIntersectionObserver;
