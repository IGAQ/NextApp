import React from 'react';

import { NewPost } from './index';

export default {
    title: 'Template/Post/NewPost',
    component: NewPost,
    argTypes: {
        username: {control: 'text'},
        title: {control: 'text'},
        content: {control: 'text'},
        score: {control: 'text'},
        numComment: {control: 'text'},
        postId: {control: 'text'},
        tags: {control: 'array'},
    },
};

const Template = (args) => <NewPost {...args} />;

export const Default = Template.bind({});
Default.args = {
    username: 'Username',
    title: 'Title',
    content: 'Content',
    score: '0',
    numComment: '0',
    postId: '1',
    tags: [{tagName:'serious'}, {tagName:'advice'}],
};