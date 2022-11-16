import React from 'react';

import {PostInfo} from './index';

export default {
    title: 'Molecules/Post/Info',
    component: PostInfo,
    argTypes: {
        username: {control: 'text'},
        date: {control: 'text'},
    },
};

const Template = (args) => <PostInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
    username: 'Username',
    date: '1666321046',
};
