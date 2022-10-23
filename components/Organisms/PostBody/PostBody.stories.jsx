import React from 'react';

import { PostBody } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Post/Organisms/Body',
    component: PostBody,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PostBody {...args} />;

export const Like = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Like.args = {
    vote: 'Like',
};

export const Dislike = Template.bind({});
Dislike.args = {
    vote: 'Dislike',
};
