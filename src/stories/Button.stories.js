import { Button } from './Button';

export default {
  title: 'Shared UI/Button',
  component: Button,
  // parameters: {
  //   layout: 'centered',
  // },
  // tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button'
  },
};

export const Large = {
  args: {
    primary: true,
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Disabled = {
  args: {
    isDisabled: true,
    label: ' Disabled Button',
  },
};