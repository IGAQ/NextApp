import React from 'react';

import {OTDCard} from './index';

export default {
    title: 'Organisms/OfTheDay/Card',
    component: OTDCard,
    argTypes: {
        title: {control: 'text'},
        prompt: {control: 'text'},
        replies: {control: 'text'},
    },
};

const Template = (args) => <OTDCard {...args} />;

export const Queery = Template.bind({});
Queery.args = {
    title: 'Queery of the day',
    prompt: 'Do you have a same-gender crush? Who?',
    replies: '0',
};

export const Story = Template.bind({});
Story.args = {
    title: 'Story of the day',
    prompt: 'I kissed a girl and I liked it, the taste of her cherry chapstick..',
    replies: '6',
};