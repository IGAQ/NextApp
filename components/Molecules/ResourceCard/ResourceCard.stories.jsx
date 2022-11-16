import React from 'react';

import {ResourceCard} from './index';

export default {
    title: 'Molecules/ResourceCard',
    component: ResourceCard,
    argTypes: {
        title: {control: 'text'},
        content: {control: 'text'},
    },
};

const Template = (args) => <ResourceCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'title',
    content: 'content',
    tags: [
        {
            tagName: '',
            tagId: '',
            tagColor: '',
        },
    ],
};