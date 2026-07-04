import {motion} from "framer-motion";
import {TypeAnimation} from "react-type-animation";


function Loader({next}){


return(

<div className="loaderPage">


<motion.div

initial={{
scale:0,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

transition={{
duration:1
}}

>


<h1>🤍</h1>


<TypeAnimation

sequence={[

"Searching special person...",
2000,

"Checking memories...",
2000,

"Found: Nishi ✨",
2000,

()=>next()

]}

speed={40}

className="loaderText"

/>


</motion.div>


</div>

)

}


export default Loader;