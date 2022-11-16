import React from 'react';

import {PostTitle} from './index';

export default {
    title: 'Molecules/Post/Title',
    component: PostTitle,
    argTypes: {},
};

const Template = (args) => <PostTitle {...args} />;

export const Default = Template.bind({});
Default.args = {};