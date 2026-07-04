import {useState} from "react";
import {motion} from "framer-motion";
import confetti from "canvas-confetti";


function Question(){


const [pos,setPos]=useState({

x:0,
y:0

});


const [count,setCount]=useState(0);


const [answer,setAnswer]=useState(false);



function runAway(){


if(count>=25){

return;

}



let x =
Math.random()*300-150;


let y =
Math.random()*300-150;



setPos({

x:x,
y:y

});



setCount(count+1);


}




function yes(){


setAnswer(true);


confetti({

particleCount:250,

spread:120,

origin:{

y:.6

}

})


}





return(

<div className="questionPage">


{

answer ?

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
duration:1,
type:"spring"
}}

className="answerBox"

>

<h1>🤍</h1>


<h2>
Maybe this is where our little story begins...
</h2>


<p>

No big promises.  
<br/>

No perfect words.

<br/><br/>

Just two things I can promise —

<br/><br/>

Respect that never changes 🤍

<br/>

and efforts that never stop ✨

<br/><br/>

Let's not rush...

<br/>

Let's just make this story beautiful,
one day at a time 🌸

</p>


</motion.div>

:
<>


<motion.h1

initial={{opacity:0,y:-50}}

animate={{opacity:1,y:0}}

>

Can we give this little story a chance?

</motion.h1>




<div className="buttons">


<button

className="yes"

onClick={yes}

>

Let's try 🤍

</button>





<motion.button


className="no"


animate={{

x:pos.x,

y:pos.y,

rotate:count*20

}}


onMouseEnter={runAway}


transition={{

type:"spring"

}}


>

{

count<25?

"No 😤"

:

"Okay click 😭"

}


</motion.button>



</div>





<p className="counter">


{

count>0 && count<25?

`Attempts: ${count}/25 😂`

:

""

}


</p>


{

count>=25 &&


<p className="respect">


Okay jokes aside...

<br/>

your choice matters more than my wish 🤍


</p>


}



</>


}


</div>

)

}



export default Question;