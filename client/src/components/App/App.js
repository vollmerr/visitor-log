import React from 'react';
import StateTemplate, { history } from 'state-template';

import routes from './routes';

const App = () => (
  <StateTemplate
    routes={routes}
    history={history}
    headerTitle={'Visitor Log'}
  />
);

export default App;
