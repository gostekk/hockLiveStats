import React from 'react';

import HeaderStats from '../HeaderStats/HeaderStats';
import HeaderActions from '../HeaderActions/HeaderActions';

const Header = ({ game, game_id }) => (
  <div>
    <HeaderStats game={game} game_id={game_id} />
    <HeaderActions game_id={game_id} />
  </div>
);

export default Header;