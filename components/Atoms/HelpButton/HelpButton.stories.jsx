import React from 'react';

import { HelpButton } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Atoms/HelpButton',
    component: HelpButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HelpButton {...args} />;

export const AboutUs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AboutUs.args = {
    headingtext: 'About Us',
    descriptiontext: 'Read more about us here',
};

export const CommunityGuidelines = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CommunityGuidelines.args = {
    headingtext: 'Community Guidelines',
    descriptiontext: 'Read the Community Guidelines here',
};

export const SubmitATicket = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SubmitATicket.args = {
    headingtext: 'Submit a Ticket',
    descriptiontext: 'Have suggestions or need assistance with something? Submit a ticket here',
};

