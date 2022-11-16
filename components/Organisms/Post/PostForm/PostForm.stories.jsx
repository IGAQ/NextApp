import React from 'react';

import {PostForm} from './index';

export default {
    title: 'Organisms/Post/PostForm',
    component: PostForm,
    argTypes: {},
};

const Template = (args) => <PostForm {...args} />;

export const Default = Template.bind({});
Default.args = {};