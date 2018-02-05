import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';
import { Button, Text, Form, Item, Input, View } from 'native-base';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  registerUser = () => {
    console.log('this.state =>', this.state);

    fetch('http://10.0.0.123:3000/api/auth/sign_in', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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
            <Input placeholder='Email' name='email' onChangeText={ (email) => { this.setState({ email })} } />
          </Item>
          <Item>
            <Input secureTextEntry={true} placeholder='Password' name='password' onChangeText={ (password) => { this.setState({ password })} } />
          </Item>
          <Button block success style={{margin: 20, backgroundColor: '#AFBCA1'}} onPress={ () => { this.registerUser() } }>
            <Text>Log In</Text>
          </Button>
        </Form>
      </View>
    );
  }
}

AppRegistry.registerComponent('Login', () => Login);
