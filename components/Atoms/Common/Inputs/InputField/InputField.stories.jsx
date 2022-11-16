import React from 'react';

import {TextInput} from './index';

export default {
    title: 'Atoms/Common/Inputs/InputField',
    component: TextInput,
    argTypes: {},
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'text',
    placeholder: 'Placeholder',
    label: 'Label',
    id: 'id',
};
