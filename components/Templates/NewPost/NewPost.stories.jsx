import React from 'react';

import { NewPost } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Post/Templates/NewPost',
    component: NewPost,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <NewPost {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    username: 'Username',
    title: 'Title',
    content: 'Content',
    score: '0',
    numComment: '0',
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