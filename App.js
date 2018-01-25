import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Form, Item, Input } from 'native-base';

export default class AnatomyExample extends Component {
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
            <Input placeholder="Username" />
          </Item>
          <Item last>
            <Input placeholder="Password" />
          </Item>
          <Button block success style={{margin: 20}}>
            <Text>Log In</Text>
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
