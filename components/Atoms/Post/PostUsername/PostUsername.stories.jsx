import React from 'react';

import {PostUsername} from './index';

export default {
    title: 'Atoms/Post/Username',
    component: PostUsername,
    argTypes: {
        username: {
            control: 'text',
            defaultValue: 'username',
        },
    },
};

const Template = (args) => <PostUsername {...args} />;

export const Base = Template.bind({});
Base.args = {
    username: 'BaseTest',
};

export const Test = Template.bind({});
Test.args = {
    username: 'A different test',
};
