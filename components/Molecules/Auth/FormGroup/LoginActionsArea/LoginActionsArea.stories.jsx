import React from 'react';

import {LoginActionsArea} from './index';

export default {
    title: 'Molecules/Auth/FormGroup/LoginActionArea',
    component: LoginActionsArea,
    argTypes: {
        onLogin: { action: 'onClick'},
        onForgotPassword: { action: 'onClick'},
    },
};

const Template = (args) => <LoginActionsArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};