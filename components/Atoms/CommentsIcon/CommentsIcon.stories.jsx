import React from 'react';

import {CommentsIcon} from './index';

export default {
    title: 'Post/Atoms/CommentsIcon',
    component: CommentsIcon,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <CommentsIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};

