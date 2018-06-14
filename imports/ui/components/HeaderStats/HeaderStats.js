import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const HeaderStats = ({ game, game_id }) => (
  <div className="row">
    <div className="col-sm-12 mb-2 pull-right">
    {/* @TODO: Copy success info */}
    <CopyToClipboard text={game_id}
          onCopy={() => console.log('Copied!')}>
          <button className="btn btn-outline-dark">Copy share id</button>
    </CopyToClipboard>
    </div>
    <div className="col-md-6 text-center">
      <div className="card border-secondary">
        <div className="card-header">
          {game.name}
        </div>
      <div className="card-body row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              Goals
            </div>
            <div className="card-body">
              {game.goals}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
              <div className="card-header">
                Shots
              </div>
              <div className="card-body">
                {game.shots}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-6 text-center">
      <div className="card border-secondary">
        <div className="card-header">
          Opponent
        </div>
      <div className="card-body row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              Goals
            </div>
            <div className="card-body">
              {game.goalsAgainst}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
              <div className="card-header">
                Shots
              </div>
              <div className="card-body">
                {game.shotsAgainst}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderStats;