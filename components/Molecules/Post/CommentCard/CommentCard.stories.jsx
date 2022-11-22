import React from 'react';

import { CommentCard } from './index';

export default {
    title: 'Molecules/Post/CommentCard',
    component: CommentCard,
    argTypes: {
    },
};

const Template = (args) => <CommentCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    numComments: '1',
};
