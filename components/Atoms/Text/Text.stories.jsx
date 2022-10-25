import React from 'react';

import { Text } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Atoms/Text',
    component: Text,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    size: '2rem',
    color: 'black',
    weight: '400',
    text: 'Heading',
    textAlign: 'left',
    display: 'block',
    margion: '0',
    lineHeight: 'inherit',
    overflow: 'visible',
    paddling: '0',
};
