import React, { Component } from 'react';
import { AsyncStorage, View, Platform } from 'react-native';

import { Home, Contact, Manage, AddContact } from './src/view';

import { AppBar } from './src/component';

import style from './src/style/style';

async function store(data) {
  return await AsyncStorage.setItem('contacts', JSON.stringify(data));
}

async function get() {
  return await AsyncStorage.getItem('contacts');
}

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { active: 'home', props: {}, contacts: [] };
  }

  componentWillMount() {
    return get().then((contacts) => this.setState({ contacts: contacts ? JSON.parse(contacts): [] }));
  }

  changeActive(active, props) {
    this.setState({ active, props });
  }

  addContact(contact) {
    const { contacts } = this.state;
    const id = contacts.length + 1;
    const newContacts = [...contacts, { ...contact, id }];
    store(newContacts)
      .then(() => this.setState({ contacts: newContacts, active: 'manage'}));
  }

  updateContact(data) {
    const contacts = this.state.contacts.map((contact) =>
      contact.id === data.id ? data : contact);
    store(contacts)
      .then(() => this.setState({ contacts, active: 'manage'}));
  }

  removeContact({ id }) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    store(contacts).then(() => this.setState({ contacts}));
  }

  renderView() {
    switch(this.state.active) {
      case 'home':
        return <Home navigate={this.changeActive.bind(this)} />;
      case 'contact':
        return <Contact
          {...this.state.props}
          navigate={this.changeActive.bind(this)} />;
      case 'manage':
        return <Manage
          contacts={this.state.contacts}
          remove={this.removeContact.bind(this)}
          navigate={this.changeActive.bind(this)}
        />;
      case 'add-contact':
        return <AddContact
          {...this.state.props}
          add={this.addContact.bind(this)}
          update={this.updateContact.bind(this)}
          navigate={this.changeActive.bind(this)}
        />;
      default:
        return <Home navigate={this.changeActive.bind(this)} />;
    }
  }

  render() {
    return (
      <View style={style.defaultContainer}>
        {Platform.OS !== 'ios' && <AppBar navigate={this.changeActive.bind(this)}/>}
        {this.renderView()}
      </View>
    );
  }
}
