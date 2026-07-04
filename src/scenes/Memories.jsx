import {motion} from "framer-motion";


function Memories({next}){


const memories=[

{
title:"A random request ✨",
text:"Who knew a simple request could start a beautiful conversation..."
},


{
title:"The name Nishi 🤍",
text:"Sometimes a small nickname becomes a little special."
},


{
title:"Those busy?? messages 😂",
text:"Small words that secretly bring a smile."
},


{
title:"Trust 🌸",
text:"Because trust is where every real story begins."
}


];



return(

<div className="memoryPage">


<motion.h1

className="memoryTitle"

initial={{opacity:0,y:-50}}

animate={{opacity:1,y:0}}

>

Little things I remember...

</motion.h1>




<div className="memoryBox">


{

memories.map((m,i)=>(


<motion.div

className="polaroid"

key={i}


initial={{

y:-300,

rotate:
Math.random()*40-20,

opacity:0

}}


animate={{

y:0,

opacity:1

}}


transition={{

delay:i*.6,

type:"spring"

}}


whileHover={{

scale:1.12,

rotate:0

}}


>


<h3>

{m.title}

</h3>


<p>

{m.text}

</p>



</motion.div>



))

}


</div>

<motion.button

className="nextBtn"

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:3}}

onClick={next}

>

Something more ✨

</motion.button>

</div>


)

}


export default Memories;