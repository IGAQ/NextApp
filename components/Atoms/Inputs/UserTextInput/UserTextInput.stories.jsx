import React from 'react';

import {UserTextInput} from './index';

export default {
    title: 'Atoms/Inputs/UserTextInput',
    component: UserTextInput,
    argTypes: {
        type: {control: 'text'},
        placeholder: {control: 'text'},
        label: {control: 'text'},
    },
};

const Template = (args) => <UserTextInput {...args} />;

export const Username = Template.bind({});
Username.args = {
    type: 'text',
    placeholder: 'Username',
    label: 'Username',
};

export const Email = Template.bind({});
Email.args = {
    type: 'text',
    placeholder: 'email@address.com',
    label: 'Email Address',
};

export const Password = Template.bind({});
Password.args = {
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
};

