import {useState} from "react";

import Envelope from "./scenes/Envelope";
import Story from "./scenes/Story";
import Memories from "./scenes/Memories";
import Qualities from "./scenes/Qualities";
import Letter from "./scenes/Letter";
import Question from "./scenes/Question";
import Loader from "./scenes/Loader";

import "./App.css";


function App(){

const [page,setPage]=useState(0);


return(

<>

{page===0 &&
<Loader next={()=>setPage(1)}/>
}

{page===1 &&
<Envelope next={()=>setPage(2)}/>
}

{page===2 &&
<Story next={()=>setPage(3)}/>
}

{page===3 &&
<Memories next={()=>setPage(4)}/>
}

{page===4 &&
<Qualities next={()=>setPage(5)}/>
}

{page===5 &&
<Letter next={()=>setPage(6)}/>
}

{page===6 &&
<Question/>
}


</>

)

}


export default App;