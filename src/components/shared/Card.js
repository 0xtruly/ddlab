import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-width: 300px;
  width: ${(props) => props.width || '350px'};
  display: ${(props) => props.display || 'flex'};
  padding: ${(props) => props.padding || '1.2rem'};
  border-radius: ${(props) => props.radius || '0.3rem'};
  /* border: ${(props) => (props.border ? '1.5px solid red' : '1px solid rgb(209, 205, 205)')}; */
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: ${(props) => props.border || 'none'};
  height: ${(props) => props.height};
  background: white;
  box-shadow: ${(props) => props.boxShadow};
`;

export default class Card extends Component {
  render() {
    const { children, border, boxShadow, display, padding, width } = this.props;
    return (
      <Container
        border={border}
        boxShadow={boxShadow}
        display={display}
        padding={padding}
        width={width}
      >
        {children}
      </Container>
    );
  }
}
