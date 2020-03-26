import React from 'react';

{/* my timer starts at 0 and counts up */ }
{/* timer needs a reset state and a stop state */ }
{/* render function first? */}
{/*  log seconds first using Date.prototype.getSeconds() in a state counting from 0 */}
{/* realized rendering visual components should be separate */}
{/*according to examples on w3schools, my starting state should be under class start}

class Stopwatch extends Component {
    render(){
        return (
            <div className="Stopwatch">

            </div>
        )
    }
}

    /* off state to start off, then an on switch? probably need a running one separate from the on */
        offState={        
        on=false, /*on switch should be off at start */
        start=0,  /* start counting at 0 */
        time=0,   /* time starts at 0. adding in case time and date method needs remove later */
        }

    /*on switch here */
        timeStart={
            on=true, /* when pressed time starts, switch on */
            

        }

        // don't forget to make an off one!
    

export default Stopwatch;