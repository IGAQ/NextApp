import React from 'react';

import { OTDCard } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'OTD/Organisms/Card',
    component: OTDCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <OTDCard {...args} />;

export const Queery = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Queery.args = {
    title: 'Queery of the day',
    prompt: 'Do you have a same-gender crush? Who?',
    replies: '0',
};

export const Story = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Story.args = {
    title: 'Story of the day',
    prompt: 'I kissed a girl and I liked it, the taste of her cherry chapstick..',
    replies: '6',
};