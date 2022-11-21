import React from 'react';

import {RegisterForm} from './index';

export default {
    title: 'Organisms/Auth/RegisterForm',
    component: RegisterForm,
    argTypes: {
        onRegister: { action: 'onClick'},
    },
};

const Template = (args) => <RegisterForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};