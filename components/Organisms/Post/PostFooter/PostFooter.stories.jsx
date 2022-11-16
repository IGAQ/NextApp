import React from 'react';

import {PostFooter} from './index';

export default {
    title: 'Organisms/Post/Footer',
    component: PostFooter,
    argTypes: {
        score: {control: 'text'},
        numComments: {control: 'text'},
    },
};

const Template = (args) => <PostFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
    score: '0',
    numComments: '0',
};