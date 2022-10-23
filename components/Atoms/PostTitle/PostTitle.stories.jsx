import React from 'react';

import { PostTitle } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Post/Atoms/Title',
    component: PostTitle,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PostTitle {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    title: 'Base Title',
};

export const Test = Template.bind({});
Test.args = {
    title: 'A different Title',
};
