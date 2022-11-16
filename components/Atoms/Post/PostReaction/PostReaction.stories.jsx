import React from 'react';

import {PostReaction} from './index';

export default {
    title: 'Atoms/Post/Reaction',
    component: PostReaction,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <PostReaction {...args} />;

export const Like = Template.bind({});
Like.args = {
    vote: 'Like',
};

export const Dislike = Template.bind({});
Dislike.args = {
    vote: 'Dislike',
};
