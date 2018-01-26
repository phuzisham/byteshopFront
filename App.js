import React, { Component } from 'react';
import { Container, Header, Title, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import UserRegistration from './components/registrations/UserRegistration';

export default class App extends Component {
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

        <UserRegistration />

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
