import {useEffect, useRef, useState} from 'react';
export const useScrollAnimation=()=>{
    const elementRef=useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer=new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    setIsVisible(true)
                    observer.unobserve(elementRef.current)
                }
            },{threshold:0.5}
        )
        if(elementRef.current){
            observer.observe(elementRef.current)
        }
        return ()=>{
            if(elementRef.current){
                observer.unobserve(elementRef.current)
            }
        }
    }, []);
    return [elementRef,isVisible]
}