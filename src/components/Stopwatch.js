import React from 'react';

{/* my timer starts at 0 and counts up */ }
{/* timer needs a reset state and a stop state */ }
{/* render function first? *?}
{/*  log seconds first using Date.prototype.getSeconds() in a state counting from 0 */}
{/* realized rendering visual components should be separate */}

function Stopwatch() {
     return(
     <div className="watchBox">
         
     
     </div>
                
     )

    }
        offState={        
        on=false, /*on switch should be off at start */
        start=0,  /* start counting at 0 */
        time=0,   /* time starts at 0. adding in case time and date method needs remove later */
        }

        timeStart={
            on=true, /* when pressed time starts, switch on */
            
        }
    

export default Stopwatch;