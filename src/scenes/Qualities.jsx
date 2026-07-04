import {motion} from "framer-motion";


function Qualities({next}){


const words=[

"Kind 🤍",

"Caring 🌸",

"Different ✨",

"Trustworthy 💗"

];


return(

<div className="qualityPage">


<motion.h1

initial={{opacity:0}}

animate={{opacity:1}}

>

Things you may not notice...

</motion.h1>




<div className="wordBox">


{

words.map((w,i)=>(


<motion.div

className="word"

key={i}


initial={{
scale:0,
opacity:0
}}


animate={{
scale:1,
opacity:1
}}


transition={{

delay:i*.8,

type:"spring"

}}


>


{w}


</motion.div>


))


}


</div>



<motion.button

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:4}}

onClick={next}

>

Read something 💌

</motion.button>



</div>

)

}


export default Qualities;