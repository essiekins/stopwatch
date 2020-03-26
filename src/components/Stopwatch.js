import React, { Component } from 'react' ; 
{/* my timer starts at 0 and counts up */ }
{/* timer needs a reset state and a stop state */ }
{/* render function first? */}
{/* https://reactjs.org/docs/react-component.html */}
{/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date */}
{/*  log seconds first using Date.prototype.getSeconds() in a state counting from 0 */}
{/* realized rendering visual components should be separate */}
{/*according to examples on w3schools, my starting state should be under class start */}
{/* https://www.w3schools.com/react/react_state.asp */}
{/* learned that all script must run before render as well! */}
{/* when using extending metods instead of functions, according to w3schools, it has to be defined in import */}
{/* Need to use intervals for fractions of seconds with setInterval */}
{/* dope methods for JS dates! https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript */}

class Stopwatch extends Component {
    offState={   /*starting at off state, everything should be 0 */
        on:false,
        onCount:0,
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
        this.watch=setInterval(() =>{    /* intervals for my milliseconds, to keep seconds running at a realistic pace */
          this.setState ({
              onCount: Date.prototype.getSeconds() - this.state.start,
          })
        }, 15 ); /* starting with 15 ms */
    };


    /* okay pause, Idk how to get this in console so let's render this baby on the DOM! css time! */
    /* before css actually... render, then css */
    /* understanding time conversion https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript */
    /* 60 secs in 1 min, so... I should times it by 60% */ 

    render(
        const {onCount} = this.state; {/*render my count up, starting at original state*/}
        let seconds = ("0" + (Math.floor(onCount /1000) %60))); /*something isn't right :c */
        let minutes = ("0" + (Math.floor(onCount /60000) %60));
        )
    {
        return (
            <div className="Stopwatch">
                
            </div>
        )
    }
};

export default Stopwatch;