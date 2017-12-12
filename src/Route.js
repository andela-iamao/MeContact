import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Home, AddContact, Manage, Contact} from './view';

import * as UIAction from './action/ui.action';

@connect(
  (state) => ({ ui: state.ui, contacts: state.contacts }),
  (dispatch) => ({ UIAction: bindActionCreators(UIAction, dispatch)})
)
class Router extends Component {
  activeRoute() {
    const { UIAction: { route } } = this.props;
    switch(this.props.ui.active) {
      case 'home':
        return <Home navigate={route} />;
      case 'contact':
        return <Contact navigate={route} />;
      case 'manage':
        return <Manage navigate={route} />;
      case 'add-contact':
        return <AddContact navigate={route} />;
      default:
        return <Home navigate={route} />;
    }
  }
  render() {
    return this.activeRoute();
  }
}

export default Router;