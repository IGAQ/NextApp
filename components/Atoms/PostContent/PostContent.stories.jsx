import React from 'react';

import { PostContent } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Post/Atoms/Content',
    component: PostContent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PostContent {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    content: 'Some default post text',
    maxHeight: '4.2em',
};

export const Test = Template.bind({});
Test.args = {
    content: 'Testing different post text that can be passed through with lorum ipsum to see max length', 
    maxHeight: '4.2em',
};
