import {motion, useInView, useAnimation} from "framer-motion";
import { useEffect, useRef } from 'react';

interface Props{
    children: JSX.Element
}


function RevealAnimation({children} : Props){


    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const sideControls = useAnimation();
    

    

    useEffect(() =>{
        console.log(isInView);
        if(isInView){
            mainControls.start("visible");
            sideControls.start("visible");
        }
        

    }, [isInView, mainControls,sideControls]);

    return(
        <div ref = {ref} style = {{position: "relative", overflow: "hidden"}} >
            <motion.div
            variants={{
                hidden: {opacity: 0, y: 75},
                visible:{opacity: 1, y: 0},
            }}
            initial="hidden"
            animate= 
            {mainControls}
            transition={{duration: 0.5, delay: 0.25}}
            >
                {children}
            </motion.div>
            <motion.div
            variants={{
                hidden: {left: 0},
                visible:{left: "100%"},
            }}
            initial="hidden"
            animate= 
            {sideControls}
            transition={{duration: 0.5, ease: "easeIn"}}
            style={{position: "absolute", top:4, bottom:4, left: 0, right: 0, zIndex:20, background: "#FBB55C", opacity:0.7}}
            >
            </motion.div>
            
        </div>

    );

}

export default RevealAnimation

