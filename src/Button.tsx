import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

const Button = styled.button`
${variant({
  variants: {
    primary: {
      p: 2,
      boxShadow: 'default',
      borderRadius: 2,
    },
    secondary: {
      p: 3,
      boxShadow: 'large',
      borderRadius: 4,
    },
  }
})}
`;


export default Button;
