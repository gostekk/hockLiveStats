import React from 'react';

const HeaderActions = ({ game_id }) => (
  <div className="row">
    <div className="col-md-6">
      <button type="button" className="btn btn-dark pull-right">Reset</button>
    </div>
    <div className="col-md-6">
      <div className="btn-group" role="group" aria-label="Goals buttons">
        <button type="button" className="btn btn-success">+</button>
        <button type="button" disabled className="btn btn-dark">Goal</button>
        <button type="button" className="btn btn-danger">-</button>
      </div>
      <div className="btn-group" role="group" aria-label="Shots buttons">
        <button type="button" className="btn btn-success">+</button>
        <button type="button" disabled className="btn btn-dark">Shot</button>
        <button type="button" className="btn btn-danger">-</button>
      </div>
      <div className="btn-group" role="group" aria-label="PMs buttons">
        <button type="button" className="btn btn-success">+</button>
        <button type="button" disabled className="btn btn-dark">PM</button>
        <button type="button" className="btn btn-danger">-</button>
      </div>
    </div>
  </div>
);

export default HeaderActions;