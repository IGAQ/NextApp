import React from 'react';

import { MaxTextArea } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Molecules/MaxTextArea',
    component: MaxTextArea,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MaxTextArea {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    text: '250',
    setText: '250',
    maxLength: '250',
    name: 'name',
    label: 'label',
    rows: '5',
    placeholder: 'placeholder'
};