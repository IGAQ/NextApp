import React from 'react';

import {PostHeader} from './index';

export default {
    title: 'Organisms/Post/Header',
    component: PostHeader,
    argTypes: {
        username: {control: 'text'},
        date: {control: 'text'},
    },
};

const Template = (args) => <PostHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
    username: 'username',
    date: '1666321046',
};
