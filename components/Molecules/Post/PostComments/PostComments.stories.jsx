import React from 'react';

import { PostComments } from './index';

export default {
    title: 'Molecules/Post/Comments',
    component: PostComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <PostComments {...args} />;

export const Default = Template.bind({});
Default.args = {
    numComments: '1',
};
