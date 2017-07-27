import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


var Stopwatch = React.createClass({
  getInitialState: function(){
    return{
      running:false,
      prev:0,
      elapse:0
    };
  },

  onStop: function(){
      this.setState({running:false})
  },
  onStart: function(){
      this.setState({
        running:true,
        prev:Date.now(),
      });

  },
  onReset: function(){
      this.setState({
        elapse:0,
        prev:Date.now(),
      });
  },

  componentDidMount(){
    setInterval(this.ontick, 100);
  },

  componentWillUnmount(){
    clearInterval(this.interval);
  },

  ontick:function(){
    if(this.state.running){
        var now = Date.now();
        this.setState({
        prev:now,
        elapse: this.state.elapse+(now - this.state.prev),
      });
      console.log('ontick')
    } 
  },
render : function(){
  var seconds=Math.floor(this.state.elapse/1000)
  return(
    <div className="stopwatch">
      <h2> Stop watch</h2><br/>
      <div className="stopwatch-score">{seconds}</div>
      {this.state.running ? <button onClick={this.onStop}>Stop</button> : <button onClick={this.onStart}>Start</button>}
      <button onClick={this.onReset}>Reset</button>
    </div>
    );
}
});
var Addplayer= React.createClass({
 
  getInitialState:function(){
  return{
        name:""
      };
 },
  onsubmit: function(e){
      e.preventDefault();
      this.props.onAdd(this.state.name);
      this.setState({name:""})
      
  },
  onchange: function(e){
    this.setState({name:e.target.value})
    
  },

  render: function(){
    return(
            <div className ="add-player-form">
              <form onSubmit={this.onsubmit}>
                <input type="text" value ={this.state.name}onChange={this.onchange} />
                <input type="Submit" value="Add Player" />
              </form>
            </div>
          );
      }
})

function Stats(props){
  var length = props.parray1.length
  var sum = props.parray1.reduce(function(total,obj){
    return total+obj.score
  },0)
  return(
        <table className="stats">
          <tbody>
            <tr>
              <td>Players:</td>
              <td>{length}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>{sum}</td>
            </tr>
          </tbody>
        </table>
        );
}


function Header(props){
   return (
            <div className="header">
            <Stats parray1={props.parray}/>
              <h1>{props.title}</h1>
              <Stopwatch/>
            </div>
          );
 }

Header.propTypes={
  title:React.PropTypes.string.isRequired
}

Header.defaultProps={
  title:"ScoreBoard"
}

function Counter(props){
      return(
              <div className="player-score">
              <div className="counter" >
                  <button className="counter-action decrement" onClick={function(){props.onChange(-1);}}> - </button>
                  <div className="counter-score">{props.score}</div>
                  <button className="counter-action increment" onClick={function(){props.onChange(1);}}> + </button>
              </div>
              </div>
              
            );
    }

Counter.propTypes={
  score:React.PropTypes.number,
  onChange: React.PropTypes.func.isRequired
}

Counter.defaultProps={
  score:0,
} 

function Players(props){
  return (
           
              <div className="player">
                <div className="player-name">
                <a className="remove-player" onClick={props.onRemove}>X</a>
                {props.name}</div>
                <Counter score={props.score} onChange={props.onScoreChange}/>
              </div>
          );
}

Players.propTypes= {
  list:React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired,
  })).isRequired
  
};

var nextId=4;
var App = React.createClass ({

 getInitialState:function(){
  return{
    list: this.props.initialplayers,
  };
 },

 onScoreChange: function(index,delta){
    console.log(index,delta);
    this.state.list[index].score += delta;
    this.setState(this.state);
 },

 add: function(name){
  this.state.list.push({
    name:name,
    score:0,
    id:nextId
  })
  nextId++;
  this.setState(this.state)
 },

 onRemovePlayer(index){
  this.state.list.splice(index,1)
  this.setState(this.state)
 },

render: function(){
  return (
          <div className="scoreboard">
            <Header title={this.props.title} parray={this.state.list} />
              <div className="players">
                {this.state.list.map(function(player,index){
                    return(
                      <Players
                        onScoreChange={function(delta) {this.onScoreChange(index,delta)}.bind(this)}
                        onRemove={function(){this.onRemovePlayer(index)}.bind(this)}
                        key={player.id}
                        name={player.name} 
                        score={player.score}/>
                    );
                  }.bind(this))}
                
                <Addplayer onAdd={this.add}/>
              </div>
          </div>
        );
  }
});

export default App;
