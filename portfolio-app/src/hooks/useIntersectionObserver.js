import { useEffect, useRef } from "react";

const useIntersectionObserver = (callback, options) => {
    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback(entry);
                }
            });
        }, options);

        elementsRef.current.forEach((element) => {
            if (element) observer.observe(element);
        });

        return () => {
            elementsRef.current.forEach((element) => {
                if (element) observer.unobserve(element);
            });
        };
    }, [callback, options]);

    const setRef = (element) => {
        if (element && !elementsRef.current.includes(element)) {
            elementsRef.current.push(element);
        }
    };

    return setRef;
};

export default useIntersectionObserver;
