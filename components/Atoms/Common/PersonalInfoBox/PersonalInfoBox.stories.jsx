import React from 'react';

import { PersonalInfoBox } from './index';

export default {
    title: 'Atoms/Common/PersonalInfoBox',
    component: PersonalInfoBox,
    argTypes: {
        infoheading: { control: 'text' },
        infodetail: { control: 'text' },
    },
};

const Template = (args) => <PersonalInfoBox {...args} />;

export const Username = Template.bind({});
Username.args = {
    infoheading: 'Username',
    infodetail: 'IGAQUser',
};

export const Email = Template.bind({});
Email.args = {
    infoheading: 'Email Address',
    infodetail: 'IGAQ@email.com',
};

