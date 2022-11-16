import React from 'react';

import {PostSetting} from './index';

export default {
    title: 'Atoms/Post/Setting',
    component: PostSetting,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <PostSetting {...args} />;

export const Default = Template.bind({});
Default.args = {};
