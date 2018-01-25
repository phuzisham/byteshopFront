import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Form, Item, Input } from 'native-base';

export default class AnatomyExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  registerUser = () => {
    console.log('First State',this.state);

    fetch('http://192.168.1.167:3000/api/auth', {
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
      console.log("status", response.status);
      console.log("stuff: ", response.headers.map);
    });
  }

  handleChange = (event) => {
    console.log('nativeEvent: ', event.nativeEvent);
    this.setState({
      [event.nativeEvent.target.name]: event.nativeEvent.text
    })
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>ByteShop</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Card>
            <CardItem>
              <Image source={require('./img/carts.jpg')} style={{height: 200, width: null, flex: 1, borderRadius: 7}} />
            </CardItem>
          </Card>

          <Form>
            <Item>
              <Input placeholder="Name" name="name" onChangeText={ (name) => { this.setState({ name })} } />
            </Item>
            <Item>
              <Input placeholder="Email" name="email" onChangeText={ (email) => { this.setState({ email })} } />
            </Item>
            <Item last>
              <Input placeholder="Password" name="password" onChangeText={ (password) => { this.setState({ password })} } />
            </Item>
            <Button block success style={{margin: 20}} onPress={ () => { this.registerUser() } }>
              <Text>Register</Text>
            </Button>
          </Form>
        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Sign Up</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
