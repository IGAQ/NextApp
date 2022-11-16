import React from 'react';

import {OTDTitle} from './index';

export default {
    title: 'Atoms/OfTheDay/OTDTitle',
    component: OTDTitle,
    argTypes: {
        title: {control: 'text'},
    },
};

const Template = (args) => <OTDTitle {...args} />;

export const Queery = Template.bind({});
Queery.args = {
    title: 'Queery of the Day',
};

export const Story = Template.bind({});
Story.args = {
    title: 'Story of the Day',
};
