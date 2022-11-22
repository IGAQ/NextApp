import React from 'react';

import { SettingToggle } from './index';

export default {
    title: 'Atoms/Common/SettingToggle',
    component: SettingToggle,
    argTypes: {
        text: { control: 'text' },
        settingTextColor: { control: 'color' },
        settingsWeight: { control: '400' },
    },
};

const Template = (args) => <SettingToggle {...args} />;

export const PushNotifications = Template.bind({});
PushNotifications.args = {
    text: 'Enable push notifications',
    settingTextColor: '#121212',
    settingsWeight: '400'
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    text: 'Dark Mode',
    settingTextColor: '#121212',
    settingsWeight: '400'
};

