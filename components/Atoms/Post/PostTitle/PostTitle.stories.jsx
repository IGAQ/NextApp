import React from 'react';

import {PostTitle} from './index';

export default {
    title: 'Atoms/Post/Title',
    component: PostTitle,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <PostTitle {...args} />;

export const Base = Template.bind({});
Base.args = {
    title: 'Base Title',
};

export const Test = Template.bind({});
Test.args = {
    title: 'A different Title',
};
