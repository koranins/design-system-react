import React from 'react';
import Button from './Button';
import ButtonPrimary from './ButtonPrimary';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

export default {
  title: 'CSF|child/grandchild/ts',
};

export const primary = () => (
  <ThemeProvider theme={theme}>
    <ButtonPrimary>click me</ButtonPrimary>
  </ThemeProvider>
);

primary.story = {
  name: 'primary'
};

export const secondary = () => (
  <ThemeProvider theme={theme}>
    <Button secondary>click me</Button>
  </ThemeProvider>
);

secondary.story = {
  name: 'secondary'
};
