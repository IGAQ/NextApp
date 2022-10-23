import React from 'react';

import { PostUsername } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Post/Atoms/Username',
    component: PostUsername,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PostUsername {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    username: 'BaseTest',
};

export const Test = Template.bind({});
Test.args = {
    username: 'A different test',
};
