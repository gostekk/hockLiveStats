import React from 'react';

import FormationGoalkeeper from '../FormationGoalkeeper/FormationGoalkeeper';
import FormationPlayer from '../FormationPlayer/FormationPlayer';

const Formation = ({ formation, game_id }) => (
  <div className="row">
    <div className="col-md-12">  
      <div className="card  bg-light mb-3">
        <div className="card-header">
          Goalkeeper
        </div>
        <div className="card-body">
          <FormationGoalkeeper player={formation} game_id={game_id} />
        </div>
      </div>
    </div>
  </div>
);

export default Formation;