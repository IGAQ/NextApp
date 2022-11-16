import React from 'react';

import {PostContent} from './index';

export default {
    title: 'Atoms/Post/Content',
    component: PostContent,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <PostContent {...args} />;

export const Default = Template.bind({});
Default.args = {
    content: 'Some default post text',
    maxHeight: '4.2em',
};

export const Test = Template.bind({});
Test.args = {
    content: 'Testing different post text that can be passed through with lorum ipsum to see max length',
    maxHeight: '4.2em',
};
