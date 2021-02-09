import { Route, Switch } from 'react-router-dom';

import Technologies from './Technologies';
import FavoriteTechnologies from './FavoriteTechnologies';

const Routes = () => (
  <Switch>
    <Route path="/technologies" exact>
      <Technologies />
    </Route>
    <Route path="/">
      <FavoriteTechnologies />
    </Route>
  </Switch>
);

export default Routes;
