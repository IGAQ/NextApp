import React from 'react';

import { CommentBody } from './index';

export default {
    title: 'Organisms/Comment/CommentBody',
    component: CommentBody,
    argTypes: {
        title: {control: 'text'},
        content: {control: 'text'},
        tags: {control: 'array'},
    },
};

const Template = (args) => <CommentBody {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Comment Title',
    content: 'Comment Content',
    tags: [{tagName: 'serious'}, {tagName: 'advice'}],
};