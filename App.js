import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Registration from './components/registration.js';
import Login from './components/login.js';

export default class AnatomyExample extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#332c30'}}>
        <Header style={{backgroundColor: '#9A8F56'}}>
          <Left>
            <Button transparent>
              <Icon name='menu' style={{color: '#E4633D'}} />
            </Button>
          </Left>
          <Body>
            <Title>ByteShop</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Login />
        </Content>

        <Footer style={{backgroundColor: '#9A8F56'}}>
          <FooterTab>
            <Button full>
              <Text style={{color: '#E4633D'}}>Home</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
