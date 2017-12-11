import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { Input, Button } from '../component';

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
    const { add, navigate, isEdit, update } = this.props;
    const contact = { name, home, email, work };
    return(
      <View>
        <Button label="Back" onPress={() => navigate('manage')}/>
        <Input
          value={name}
          placeholder="Firstname Lastname"
          onChangeText={(text) => this.onChange('name', text)}/>
        <Input
          value={home}
          placeholder="Home number"
          onChangeText={(text) => this.onChange('home', text)}/>
        <Input
          value={work}
          placeholder="Work number"
          onChangeText={(text) => this.onChange('work', text)}/>
        <Input
          value={email}
          placeholder="Email"
          onChangeText={(text) => this.onChange('email', text)}/>
        <Button
          label={`${isEdit ? 'Update' : 'Add'} Contact`}
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
