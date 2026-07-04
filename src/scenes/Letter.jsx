import {motion} from "framer-motion";


function Letter({next}){


return(

<div className="letterPage">


<motion.div

className="letterCard"


initial={{
scale:.2,
opacity:0,
rotate:-10
}}


animate={{
scale:1,
opacity:1,
rotate:0
}}


transition={{
duration:1,
type:"spring"
}}


>


<h2>

Dear Nishi 🤍

</h2>



<p>

Maybe I moved faster than I should...

<br/><br/>

Maybe I expressed more than I planned...

<br/><br/>

But one thing was always real —

<br/><br/>

My respect, my efforts and my intentions ✨

<br/><br/>

No pressure...  
just wanted you to know this little truth.

</p>

<motion.button

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:2}}

onClick={next}

>

One last thing 🤍

</motion.button>

</motion.div>


</div>


)

}


export default Letter;