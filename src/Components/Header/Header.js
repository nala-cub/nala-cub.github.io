import React from 'react';
import {
  Container,
  Menu,
  Segment,
} from 'semantic-ui-react';

const HeaderMenu = () => {
  const fixed = false;
  return (
    <Segment
      inverted
      textAlign="center"
      style={{ padding: '0em 0em' }}
      vertical
    >
      <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size="large"
      >
        <Container>
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a" link href="/people">People</Menu.Item>
          <Menu.Item as="a">Research</Menu.Item>
          <Menu.Item as="a">Contact Us</Menu.Item>
        </Container>
      </Menu>
    </Segment>
  );
};

export default HeaderMenu;
