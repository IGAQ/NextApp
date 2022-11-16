import React from 'react';

import {TextInput} from './index';

export default {
    title: 'Atoms/Common/Inputs/TextInput',
    component: TextInput,
    argTypes: {
        type: {control: 'text'},
        placeholder: {control: 'text'},
        label: {control: 'text'},
        name: {control: 'text'},
    },
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'text',
    placeholder: 'Placeholder',
    label: 'Label',
    name: 'name',
};

