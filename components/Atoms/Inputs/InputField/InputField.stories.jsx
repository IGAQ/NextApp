import React from 'react';

import {TextInput} from './index';

export default {
    title: 'Atoms/Inputs/InputField',
    component: TextInput,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'text',
    placeholder: 'Placeholder',
    label: 'Label',
    id: 'id',
};
