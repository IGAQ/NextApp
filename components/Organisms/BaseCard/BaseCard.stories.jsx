import React from 'react';

import { BaseCard } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Organisms/BaseCard',
    component: BaseCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BaseCard {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    posts: [
        { postId: 1, 
        postTitle: 'test', 
        postContent: 'test', 
        updatedAt: '1378571974', 
        postTags: [{tagName:'serious'}, {tagName:'advice'}], 
        authorUser: {username: 'test'} 
    }],
};