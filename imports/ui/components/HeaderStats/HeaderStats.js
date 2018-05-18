import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const HeaderStats = ({ game, game_id }) => (
  <div className="row">
    <div className="col-md-12 pull-right">
    {/* @TODO: Copy success info */}
    <CopyToClipboard text={game_id}
          onCopy={() => console.log('Copied!')}>
          <button className="btn btn-outline-dark">Copy share id</button>
    </CopyToClipboard>
    </div>
    <div className="col-md-6 text-center">
      <div className="row">
        <div className="col-sm-6">
          {game.name}
        </div>
        <div className="col-sm-6">
          Goals: {game.goals}
          Shots: {game.shots}
        </div>
      </div>
    </div>

    <div className="col-md-6 text-center">
      <div className="row">
        <div className="col-sm-6">
          Opponent
        </div>
        <div className="col-sm-6">
          Goals: {game.goalsAgainst}
          Shots: {game.shotsAgainst}
        </div>
      </div>
    </div>
  </div>
);

export default HeaderStats;