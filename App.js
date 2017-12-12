import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { AsyncStorage, View, Platform } from 'react-native';

import Router from './src/Route';

import { Home, Contact, Manage, AddContact } from './src/view';

import { AppBar } from './src/component';

import style from './src/style/style';

import store from './src/store';
import { fetchContacts } from './src/action/index';

async function save(data) {
  return await AsyncStorage.setItem('contacts', JSON.stringify(data));
}

async function get() {
  return await AsyncStorage.getItem('contacts');
}


class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { active: 'home', props: {}, contacts: [] };
  }

  componentWillMount() {
    return fetchContacts();
    // return get().then((contacts) => this.setState({ contacts: contacts ? JSON.parse(contacts): [] }));
  }

  changeActive(active, props) {
    this.setState({ active, props });
  }

  addContact(contact) {
    const { contacts } = this.state;
    const id = contacts.length + 1;
    const newContacts = [...contacts, { ...contact, id }];
    save(newContacts).then(() => this.setState({ contacts: newContacts, active: 'manage'}));
  }

  updateContact(data) {
    const contacts = this.state.contacts.map((contact) =>
      contact.id === data.id ? data : contact);
    save(contacts).then(() => this.setState({ contacts, active: 'manage'}));
  }

  removeContact({ id }) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    save(contacts).then(() => this.setState({ contacts}));
  }

  renderView() {
    const { contacts } = this.props;
    switch(this.props.ui.active) {
      case 'home':
        return <Home navigate={this.changeActive.bind(this)} />;
      case 'contact':
        return <Contact {...this.state.props} navigate={this.changeActive.bind(this)} />;
      case 'manage':
        return <Manage
          remove={this.removeContact.bind(this)}
          navigate={this.changeActive.bind(this)}
        />;
      case 'add-contact':
        return <AddContact
          {...this.state.props}
          navigate={this.changeActive.bind(this)}
        />;
      default:
        return <Home navigate={this.changeActive.bind(this)} />;
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={style.defaultContainer}>
          {Platform.OS !== 'ios' && <AppBar navigate={this.changeActive.bind(this)}/>}
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;
