import React from 'react';

import {StyledSubmitButton} from './index';

export default {
    title: 'Atoms/Common/Buttons/StyledSubmitButton',
    component: StyledSubmitButton,
    argTypes: {},
};

const Template = (args) => <StyledSubmitButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

