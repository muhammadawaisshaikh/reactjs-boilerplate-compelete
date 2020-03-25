import React from 'react';

import {
  Route,
  Switch
} from "react-router-dom";

import { connect } from "react-redux";

import {
  GetUsers,
  GetProducts
} from "./app/redux/actions/taskAction";

import AppRoutes from './app/layout/AppRoutes';

import Main from './app/components/main/MainComponent'

 const _routes = AppRoutes.registeredRoutes();
 
 class App extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
      }
  }

  componentDidMount() {
    this.props.GetUsers();
    this.props.GetProducts();
    
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
  }
  
  render() {
    console.log("this.props.tasksss ", this.props.Loading);
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

const mapStateToProps = state => ({
  Loading: state.task.loading
});

const mapDispacthToProps = dispatch => {
  return {
    GetUsers: () => dispatch(GetUsers()),   
    GetProducts: () => dispatch(GetProducts())    
  };
  
};
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(App);
