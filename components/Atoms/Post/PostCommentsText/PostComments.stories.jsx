import React from 'react';

import {PostCommentsText} from './index';

export default {
    title: 'Atoms/Post/CommentsText',
    component: PostCommentsText,
    argTypes: {
        numComments: {control: 'number'},
    },
};

const Template = (args) => <PostCommentsText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    numComments: 16,
};