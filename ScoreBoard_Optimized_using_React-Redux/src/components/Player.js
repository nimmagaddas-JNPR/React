import React, {Component, propTypes} from 'react';
import Counter from './Counter'

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={ ()=> props.removePlayer(props.index)}>✖</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter index={props.index} updatePlayer={props.updatePlayer} score={props.score} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  index:React.PropTypes.number.isRequired,
  removePlayer: React.PropTypes.func.isRequired,
  updatePlayer: React.PropTypes.func.isRequired,
};

export default Player;
