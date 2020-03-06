import React from 'react';

import {
  Route,
  Switch
} from "react-router-dom";

import AppRoutes from './app/layout/AppRoutes';

import Main from './app/components/main/MainComponent'

 const _routes = AppRoutes.registeredRoutes();
 
 class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
      }
  }
  
  render() {
    return (
      <div>
        {/* main component  */}
        <Main />

        {/* routing and navigation  */}
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
      </div>
    );
  }
}

export default App;
