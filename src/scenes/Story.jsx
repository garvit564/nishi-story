import {motion} from "framer-motion";
import {TypeAnimation} from "react-type-animation";


function Story({next}){


return (

<div className="story-page">


<motion.div

className="story"

initial={{

opacity:0,
scale:.7

}}

animate={{

opacity:1,
scale:1

}}

transition={{

duration:1.2

}}

>


<TypeAnimation


sequence={[


"Hey...",
1500,

"I made something special ✨",
2000,

"Not for everyone...",
2000,

"Only for Nishi 🤍",
2500,

"Some stories start unexpectedly...",
2500,

"Like a random request 🌸",
2500


]}


speed={35}

className="storyText"

/>



</motion.div>
<motion.button

className="nextBtn"

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:9}}

onClick={next}

>

Continue 🤍

</motion.button>
</div>

)


}



export default Story;