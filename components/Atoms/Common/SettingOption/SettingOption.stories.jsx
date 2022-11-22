import React from 'react';

import { SettingOption } from './index';

export default {
    title: 'Atoms/Common/SettingOption',
    component: SettingOption,
    argTypes: {
        text: { control: 'text' },
        settingTextColor: { control: 'color' },
        settingsWeight: { control: '400' },
    },
};

const Template = (args) => <SettingOption {...args} />;

export const PersonalInformation = Template.bind({});
PersonalInformation.args = {
    text: 'Personal Information',
    settingTextColor: '#121212',
    settingsWeight: '400'
};

export const ChangePassword = Template.bind({});
ChangePassword.args = {
    text: 'Change Password',
    color: '#121212',
    settingsWeight: '400'
};

export const LogOut = Template.bind({});
LogOut.args = {
    text: 'Log Out',
    color: '#ff758c',
    settingsWeight: '600'
};

export const HelpCentre = Template.bind({});
HelpCentre.args = {
    text: 'Help Centre',
    color: '#121212',
    settingsWeight: '400'
};

