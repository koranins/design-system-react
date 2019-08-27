import React from 'react';
import Button from './Button';

export default {
  title: 'CSF|child/grandchild/ts',
};

export const primary = () => <Button variant="primary">click me</Button>;

primary.story = {
  name: 'primary'
};

export const secondary = () => <Button variant="secondary">click me</Button>;

secondary.story = {
  name: 'secondary'
};
