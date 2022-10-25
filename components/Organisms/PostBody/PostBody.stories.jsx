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

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    title: 'Post Title',
    content: 'Post Content',
    posts: [
        { postId: 1,
            postTitle: 'Test',
            postContent: 'Test',
            createdAt: '1635170171',
            updatedAt: '1635170171',
            postTags: [{tagName:'serious'}, {tagName:'advice'}],
            authorUser: {username: 'test'},
        }],
};