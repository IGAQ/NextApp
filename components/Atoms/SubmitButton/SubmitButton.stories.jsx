import React from 'react';

import { StyledSubmitButton } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Atoms/StyledSubmitButton',
    component: StyledSubmitButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <StyledSubmitButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};

export const Secondary = Template.bind({});
Secondary.args = {

};
