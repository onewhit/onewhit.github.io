import { useState, useRef, useEffect } from "react";

export default function useTimer() {
    const interval_ref = useRef(null);
    const [timer, set_timer] = useState(0);

    
    function start_timer() {
        if (interval_ref.current) clearInterval(interval_ref.current);
        const id = setInterval(() => {
            console.log("test");
        }, 1000);
        interval_ref.current = id;
    }

    // useEffect(start_timer,[])
}