import {useEffect, useState} from "react";

export default function useOnScreen(refs) {
    const [isIntersecting, setIntersecting] = useState(undefined);
    const [intersections, setIntersections] = useState(new Set());
    let observer;

    if (typeof window !== "undefined") {
        observer = new IntersectionObserver(onChange, {root: null, rootMargin: '0px', threshold: 0.2});
    }

    function onChange(changes) {
        changes.forEach(entry => {
            if (entry.isIntersecting) {
                setIntersections(intersections.add(entry));
            } else {
                for(let inter of intersections){
                    if(entry.target === inter.target){
                        intersections.delete(inter);
                        setIntersections(intersections);
                    }
                }
            }

            let inter = Array.from(intersections);
            if(inter[0]) setIntersecting(inter[0].target);
        });
    }

    useEffect(() => {
        if (observer) {
            for (let ref of refs)
                observer.observe(ref.current);
        }
        return () => {
            if (observer) observer.disconnect()
        }
    }, [])

    return isIntersecting;
}