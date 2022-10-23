import React from 'react';

import { PostComments } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Post/Atoms/Comments',
    component: PostComments,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PostComments {...args} />;

export const One = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
One.args = {
    numComments: '1',
};

export const AnotherOne = Template.bind({});
AnotherOne.args = {
    numComments: '11',
};
