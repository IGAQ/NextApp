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
        postTitle: 'Question about sexuality', 
        postContent: 'Is there a sexuality for ONLY having sexual attraction of the opposite gender you feel like you are at the moment?', 
        updatedAt: '2022.10.24', 
        postTags: [{tagName:'queery'}, {tagName:'casual'}], 
        authorUser: {username: 'dubumelts'}, 
    }],
};