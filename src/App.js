import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import AppRoutes from './app/layout/AppRoutes'

function App() {
  const _routes = AppRoutes.registeredRoutes();
  
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {
            _routes.map((item, i) => {
              const _routeItem = AppRoutes.getRoute(item);
              const itemKey = `${item}_${i}`;

              if (_routeItem.hasOwnProperty('default') && _routeItem.default) {
                return (<Route key={itemKey} exact path={_routeItem.path} component={_routeItem.component} />);
              } else {
                return (<Route key={itemKey} path={_routeItem.path} component={_routeItem.component} />);
              }
            })
          }
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
