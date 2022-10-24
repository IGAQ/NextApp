import React from 'react';

import { PostHeader } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Post/Organisms/Header',
    component: PostHeader,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PostHeader {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    username: 'username',
    date: '1666321046',
};
