import React, { Component } from 'react';
import { Image } from 'react-native';
import { Button, Text, Form, Item, Input, View } from 'native-base';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  registerUser = () => {
    console.log('this.state =>', this.state);

    fetch('http://172.31.99.115:3000/api/auth', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((response) => {
      console.log('response.status =>', response.status);
      console.log('response.headers.map =>', response.headers.map);
    });
  }

  render() {
    return (
      <View>
        <Image source={require('../../img/carts.jpg')} style={{height: 200, width: null, flex: 1}} />

        <Form>
          <Item>
            <Input placeholder='Username' name='name' onChangeText={ (name) => { this.setState({ name })} } />
          </Item>
          <Item>
            <Input placeholder='Email' name='email' onChangeText={ (email) => { this.setState({ email })} } />
          </Item>
          <Item>
            <Input secureTextEntry={true} placeholder='Password' name='password' onChangeText={ (password) => { this.setState({ password })} } />
          </Item>
          <Button block success style={{margin: 20}} onPress={ () => { this.registerUser() } }>
            <Text>Register</Text>
          </Button>
        </Form>
      </View>
    );
  }
}
