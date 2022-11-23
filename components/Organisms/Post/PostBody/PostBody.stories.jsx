import React from 'react';

import {PostBody} from './index';

export default {
    title: 'Organisms/Post/Body',
    component: PostBody,
    argTypes: {
        title: {control: 'text'},
        content: {control: 'text'},
        tags: {control: 'array'},
    },
};

const Template = (args) => <PostBody {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Post Title',
    content: 'Post Content',
    tags: [{tagName: 'serious'}, {tagName: 'advice'}],
};