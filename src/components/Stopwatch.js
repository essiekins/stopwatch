import React from 'react';
import Component from 'react'; /* how do I even declare this? */

{/* my timer starts at 0 and counts up */ }
{/* timer needs a reset state and a stop state */ }
{/* render function first? */}
{/* https://reactjs.org/docs/react-component.html */}
{/*  log seconds first using Date.prototype.getSeconds() in a state counting from 0 */}
{/* realized rendering visual components should be separate */}
{/*according to examples on w3schools, my starting state should be under class start */}
{/* https://www.w3schools.com/react/react_state.asp */}
{/* learned that all script must run before render as well! */}
{/* when using extending metods instead of functions, according to w3schools, it has to be defined in import */}

class Stopwatch extends Component {
    state={   /*starting at off state, everything should be 0 */
        on:false,
        start:0,
        time:0,
    }
    /* SYNTAX REMINDERS!!! */
    /* note for the future, these are objects don't use =, use : for objects inside a function!!! */
    /* now I need a function to execute the values above, but also run after 0 */
    /* also remember objects go inside {}... smh */

    startCounting = () => {
        this.setState ({    /* this current time frame should equal to: start running. setState to change it from previous state where it was off */
            on: true,
            onCount:this.state.onCount, /* just declaring in case of undefined errors */
            start: Date.prototype.getSeconds() - this.state.onCount, /* start time from right now till ??? */
        })
    }


    /* okay pause Idk how to get this in console so let's render this baby on the DOM! css time! */

    render(){
        return (
            <div className="Stopwatch">
           
            </div>
        )
    }
}

export default Stopwatch;