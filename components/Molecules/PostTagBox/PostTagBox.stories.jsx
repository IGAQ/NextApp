import React from 'react';

import { PostTagBox } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Post/Molecules/TagBox',
    component: PostTagBox,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PostTagBox {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    posts: [
        { postId: 1,
            postTitle: 'Test',
            postContent: 'Test',
            createdAt: '136246246',
            postTags: [{tagName:'serious'}, {tagName:'advice'}],
            authorUser: {username: 'test'},
        },
    ],
};