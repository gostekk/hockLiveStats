import React from 'react';

import HeaderStats from '../HeaderStats/HeaderStats';
import HeaderActions from '../HeaderActions/HeaderActions';

const Header = ({ game, game_id }) => (
  <div className="card border-secondary mb-2 mt-2">
    <div className="card-body">
      <HeaderStats game={game} game_id={game_id} />
    </div>
    <div className="card-footer">
      <HeaderActions game={game} game_id={game_id} />
    </div>
  </div>
);

export default Header;