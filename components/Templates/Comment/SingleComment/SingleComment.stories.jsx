import React from 'react';

import { SingleComment } from './index';

export default {
    title: 'Template/Comment/SingleComment',
    component: SingleComment,
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

const Template = (args) => <SingleComment {...args} />;

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