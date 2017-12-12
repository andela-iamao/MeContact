import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { Input, Button } from '../component';

import style from '../style/style';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || '',
      home: props.home || '',
      work: props.work || '',
      email: props.email || '',
      id: props.id
    };
  }

  onChange(field, text) {
    return this.setState({ [field]: text });
  }

  render() {
    const { name, home, email, work } = this.state;
    const { add, isEdit, update } = this.props;
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
          label={`${isEdit ? 'Update' : 'Add'} Contact`}
          style={[style.contactPageEditButton, style.addContactButton]}
          textStyle={{ color: '#FFF' }}
          onPress={() => isEdit ?
            update({ ...contact, id: this.state.id }) : add(contact)}
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
