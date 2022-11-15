import React from 'react';

import {StyledSubmitButton} from './index';

export default {
    title: 'Atoms/Buttons/StyledSubmitButton',
    component: StyledSubmitButton,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <StyledSubmitButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

