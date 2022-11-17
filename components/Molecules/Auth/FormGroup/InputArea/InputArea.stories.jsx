import React, {useState} from 'react';

import {InputArea} from './index';

export default {
    title: 'Molecules/Auth/FormGroup/InputArea',
    component: InputArea,
    argTypes: {
        type: {
            control: {
                type: 'select',
                labels: ['text', 'number', 'password', 'email', 'date', 'checkbox', 'color', 'datetime-local', 'file', 'image', 'month', 'radio', 'range', 'tel'],
            },
        },
        label: {
            control: {
                type: 'text',
                description: 'Label for the input',
                defaultValue: 'Label',
            },
        },
        placeholder: {
            control: {
                type: 'text',
                description: 'Placeholder for the input',
            },
        },
        topSpacerSize: {
            control: {
                type: 'number',
                description: 'Size of the top spacer',
                defaultValue: 40,
            },
        },
    },
};

const Template = (args) => <InputArea {...args}/>;

export const UsernameInput = Template.bind({});
UsernameInput.args = {
    type: 'text',
    label: 'Username',
    placeholder: 'Username',
    topSpacerSize: 40,
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
    type: 'password',
    label: 'Password',
    placeholder: 'Password',
    topSpacerSize: 20,
};