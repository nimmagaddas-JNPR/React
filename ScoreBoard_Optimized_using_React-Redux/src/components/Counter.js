import React, {Component, propTypes} from 'react';




function Counter(props) {
 return (
   <div className="counter" >
     <button className="counter-action decrement" onClick={() => props.updatePlayer(props.index,-1)}>
       -
     </button>
     <div className="counter-score"> {props.score} </div>
     <button className="counter-action increment" onClick={() => props.updatePlayer(props.index,1)}>
       +
     </button>
   </div>
 );
}

Counter.propTypes = {
  updatePlayer: React.PropTypes.func.isRequired,
  index: React.PropTypes.number.isRequired,
  score: React.PropTypes.number.isRequired,
};

export default Counter;