import React from 'react';

import { SettingsPage } from './index';

export default {
    title: 'Organisms/Common/SettingsPage',
    component: SettingsPage,
    argTypes: {},
};

const Template = (args) => <SettingsPage {...args} />;

export const Default = Template.bind({});
Default.args = {
};

