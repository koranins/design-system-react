import styled from 'styled-components'
// import { variant } from 'styled-system'
import { get, createParser } from '@styled-system/core'
import css from '@styled-system/css'
import { background } from 'styled-system';
// import console = require('console');

const variant = ({
  scale,
  prop = 'variant',
  // enables new api
  variants = {},
  // shim for v4 API
  key,
}) => {
  let sx
  if (Object.keys(variants).length) {
    console.log('[ks] 1111');
    sx = (value, scale, props) => css(get(scale, value, null))(props.theme)
  } else {
    console.log('[ks] 2222');
    sx = (value, scale, props) => css(get(scale, value, null))(props.theme)
    sx = (value, scale) => get(scale, value, null)
  }
  sx.scale = scale || key
  sx.defaults = variants
  const config = {
    [prop]: sx,
  }
  const parser = createParser(config)

  console.log('[ks] parser', parser({theme: {color: 'red'}}));

  return parser
}

const Button = styled.button`
  ${variant({
      variants: {
        primary: {
          color: 'white',
          bg: 'blue',
        }
      },
      scale: 'buttons',
    })}
`;

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
