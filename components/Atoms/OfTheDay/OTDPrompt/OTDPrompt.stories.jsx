import React from 'react';

import { OTDPrompt } from './index';

export default {
    title: 'Atoms/OfTheDay/OTDPrompt',
    component: OTDPrompt,
    argTypes: {
        prompt: { control: 'text' },
    },
};

const Template = (args) => <OTDPrompt {...args} />;

export const Queery = Template.bind({});
Queery.args = {
    prompt: 'Do you have a same-gender crush? Who?',
};

export const Story = Template.bind({});
Story.args = {
    prompt: 'I kissed a girl and I liked it, the taste of her cherry chapstick..', 
};
