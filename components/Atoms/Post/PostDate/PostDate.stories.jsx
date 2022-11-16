import React from 'react';

import {PostDate} from './index';

export default {
    title: 'Atoms/Post/Date',
    component: PostDate,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <PostDate {...args} />;

export const Jan = Template.bind({});
Jan.args = {
    date: '1666321046',
};

export const Aug = Template.bind({});
Aug.args = {
    date: '1234567890',
};
