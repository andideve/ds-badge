import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Badge from '../badge';
import defaults from '../badge.defaults';

export default {
  title: 'Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: defaults.size,
  variant: defaults.variant,
  rounded: defaults.rounded,
  children: 'Badge text',
};
