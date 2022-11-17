import React from 'react';

import {LoginForm} from './index';

export default {
    title: 'Organisms/Auth/LoginForm',
    component: LoginForm,
    argTypes: {
        onLogin: { action: 'onClick'},
    },
};

const Template = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};