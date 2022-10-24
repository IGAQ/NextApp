import React from 'react';

import { NewPost } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Post/Templates/NewPost',
    component: NewPost,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <NewPost {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    username: 'Username',
    date: '1666321046',
    title: 'Title',
    content: 'Content',
    text: 'Tag',
    tagBgColor: '#C2ADFF',
    tagTextColor: 'white',
    score: '0',
    numComment: '0',
};