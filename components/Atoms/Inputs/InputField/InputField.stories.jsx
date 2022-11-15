import React from 'react';

import {TextInput} from './index';

export default {
    title: 'Atoms/Inputs/TextInput',
    component: TextInput,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: 'text',
    placeholder: 'Placeholder',
    label: 'Label',
    id: 'id',
};
