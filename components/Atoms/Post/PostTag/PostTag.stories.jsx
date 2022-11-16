import React from 'react';

import { PostTag } from './index';

export default {
    title: 'Atoms/Post/Tag',
    component: PostTag,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <PostTag {...args} />;

export const Serious = Template.bind({});
Serious.args = {
    text: 'Serious',
    tagBgColor: '#C2ADFF',
    tagColor: 'white',
};

export const Casual = Template.bind({});
Casual.args = {
    text: 'Casual',
    tagBgColor: '#C2ADFF',
    tagColor: 'white',
};
