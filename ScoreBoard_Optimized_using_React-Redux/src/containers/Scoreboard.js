import React, {Component, propTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PlayerActionCreators from '../actions/Player'; 

import Header from '../components/Header'
import Player from '../components/Player'
import AddPlayerForm from '../components/AddPlayerForm'
import '../App.css';

class Scoreboard extends Component{ 

  static propTypes={
    players: React.PropTypes.array.isRequired
  };

  render() {

      const {dispatch, players} = this.props;
      const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer,dispatch);
      const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer,dispatch);
      const updatePlayer = bindActionCreators(PlayerActionCreators.updatePlayer,dispatch);
      const playerComponents = players.map((player,index) => (
        <Player 
          index={index}
          name={player.name}
          score={player.score}
          key={player.name}
          updatePlayer={updatePlayer}
          removePlayer={removePlayer}
          />
        ));

  return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          {playerComponents}
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
}

const mapStateToProps = state =>(
{
    players : state
}
);


export default connect(mapStateToProps)(Scoreboard);