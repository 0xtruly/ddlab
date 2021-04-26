import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: ${(props) => props.height || '50px'};
  width: ${(props) => props.width || '50px'};
  align-items: center;
  border-radius: ${(props) => props.radius || '0.5rem'};
  background: #f0f9ff;
  box-shadow: ${(props) => props.boxShadow};
  overflow: hidden;
  padding: 0.5rem;
  span {
    font-size: ${(props) => props.fontSize || '25px'};
  }
`;

export default class ImageCard extends Component {
  render() {
    const { border, boxShadow, label, symbol, src, fontSize, rounded } = this.props;
    return (
      <Container border={border} boxShadow={boxShadow} fontSize={fontSize}>
        {symbol ? (
          <span role="img" aria-label={label || ''} aria-hidden={label ? false : true}>
            {symbol}
          </span>
        ) : (
          <img src={src} alt="product" />
        )}
      </Container>
    );
  }
}
