import React from 'react';

import { ResourceCard } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Molecules/ResourceCard',
    component: ResourceCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ResourceCard {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    title: "title",
    content: "content",
    tags: [
        {
            tagName: '',
            tagId: '',
            tagColor: ''
        }
    ]
}