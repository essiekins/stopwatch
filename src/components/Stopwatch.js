import React from 'react';

{/* my timer starts at 0 and counts up */ }
{/* timer needs a reset state and a stop state */ }
{/* render function first? */}
{/*  log seconds first using Date.prototype.getSeconds() in a state counting from 0 */}
{/* realized rendering visual components should be separate */}
{/*according to examples on w3schools, my starting state should be under class start */}
{/* https://www.w3schools.com/react/react_state.asp */}

class Stopwatch extends Component {
    offState={   //starting at off state, everything should be 0
        on=false,
        start=0,
        time=0,
    }
    render(){
        return (
            <div className="Stopwatch">
           
            </div>
        )
    }
}

export default Stopwatch;