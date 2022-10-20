import React from 'react';

import { PostTag } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Example/PostTag',
    component: PostTag,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PostTag {...args} />;

export const Serious = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Serious.args = {
    text: 'Serious',
    tagBgColor: '#C2ADFF',
    tagColor: 'white',
};

export const Casual = Template.bind({});
Casual.args = {
    text: 'Casual',
    tagBgColor: '#C2ADFF',
    tagColor: 'white',
};
