import React from 'react';

import {PostScore} from './index';

export default {
    title: 'Molecules/Post/Score',
    component: PostScore,
    argTypes: {
        score: {control: 'text'},
    },
};

const Template = (args) => <PostScore {...args} />;

export const Default = Template.bind({});
Default.args = {
    score: '1',
};