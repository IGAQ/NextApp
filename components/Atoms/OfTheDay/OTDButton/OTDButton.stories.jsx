import React from 'react';

import { OTDButton } from './index';

export default {
    title: 'Atoms/OfTheDay/Buttons/OTDButton',
    component: OTDButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <OTDButton {...args} />;

export const Queery = Template.bind({});
Queery.args = {
    text: 'Answer',
};

export const Story = Template.bind({});
Story.args = {
    text: 'Story',
};
