import React from 'react';

import {HelpButton} from './index';

export default {
    title: 'Atoms/HelpButton',
    component: HelpButton,
    argTypes: {
        headingtext: {control: 'text'},
        descriptiontext: {control: 'text'},
    },
};

const Template = (args) => <HelpButton {...args} />;

export const AboutUs = Template.bind({});
AboutUs.args = {
    headingtext: 'About Us',
    descriptiontext: 'Read more about us here',
};

export const CommunityGuidelines = Template.bind({});
CommunityGuidelines.args = {
    headingtext: 'Community Guidelines',
    descriptiontext: 'Read the Community Guidelines here',
};

export const SubmitATicket = Template.bind({});
SubmitATicket.args = {
    headingtext: 'Submit a Ticket',
    descriptiontext: 'Have suggestions or need assistance with something? Submit a ticket here',
};

