import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Input, Button } from '../component';

import * as contactAction from '../action/contacts.action';

import style from '../style/style';

@connect(
  (state) => ({ contacts: state.contacts }),
  (dispatch) => ({ contactAction: bindActionCreators(contactAction, dispatch)})
)
class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = props.contacts.editing || { name: '', home: '', work: '', email: '' };
  }

  componentWillMount() {
    const { isCreating, editing } = this.props.contacts;
    if (!isCreating && !editing) {
      this.props.navigate('manage');
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isCreating, editing } = nextProps.contacts;
    if (!isCreating && !editing) {
      this.props.navigate('manage');
    }
  }

  componentWillUnmount() {
    this.props.contactAction.clearEdit();
    this.props.contactAction.clearSelected();
    this.props.contactAction.stopCreation();
  }

  onChange(field, text) {
    return this.setState({ [field]: text });
  }

  render() {
    const { name, home, email, work } = this.state;
    const { editing } = this.props.contacts;
    const { createContact, updateContact } = this.props.contactAction;

    const contact = { name, home, email, work };
    return(
      <View style={[style.homeContainer, { flex: 1 }]}>
        <Text style={style.addContactHeader}>Add a new contact</Text>
        <View style={{ marginTop: 20, marginBottom: 40 }}>
          <Input
            value={name}
            placeholder="Name"
            style={style.inputStyle}
            onChangeText={(text) => this.onChange('name', text)}/>
          <Input
            value={home}
            style={style.inputStyle}
            placeholder="Home number"
            onChangeText={(text) => this.onChange('home', text)}/>
          <Input
            value={work}
            style={style.inputStyle}
            placeholder="Work number"
            onChangeText={(text) => this.onChange('work', text)}/>
          <Input
            value={email}
            placeholder="Email"
            style={style.inputStyle}
            onChangeText={(text) => this.onChange('email', text)}/>
        </View>
        <Button
          textStyle={{ color: '#FFF' }}
          label={`${editing ? 'Update' : 'Add'} Contact`}
          style={[style.contactPageEditButton, style.addContactButton]}
          onPress={() =>
            editing ? updateContact({ ...contact, id: editing.id }) : createContact(contact)}
        />
      </View>
    );
  }
}

AddContact.propTypes = {
  navigate: PropTypes.func,
  add: PropTypes.func,
  update: PropTypes.func
};

export { AddContact };
