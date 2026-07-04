import {motion} from "framer-motion";


function Envelope({next}){


return (

<div className="env-page">


<div className="glow"></div>


{
[...Array(25)].map((_,i)=>(

<span
className="particle"
key={i}

style={{

left:`${Math.random()*100}%`,
animationDelay:`${Math.random()*5}s`

}}

>

❤

</span>

))

}



<motion.div

className="envelope"

initial={{
scale:0,
rotate:-20
}}

animate={{
scale:1,
rotate:0
}}

transition={{
duration:1,
type:"spring"
}}

whileHover={{
scale:1.1
}}

onClick={next}

>


<div className="paper">

🤍

</div>


<div className="back"></div>

<div className="cover"></div>

<div className="top"></div>



</motion.div>



<motion.h2

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{delay:1.5}}

>

A little message is waiting...

</motion.h2>


<p>tap the envelope ✨</p>



</div>


)

}


export default Envelope;