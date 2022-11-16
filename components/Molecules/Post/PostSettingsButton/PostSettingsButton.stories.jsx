import React from 'react';

import {PostSettingsButton} from './index';

export default {
    title: 'Molecules/Post/SettingsButton',
    component: PostSettingsButton,
    argTypes: {
        icon: {control: 'text'},
    },
};

const Template = (args) => <PostSettingsButton {...args} />;

export const Report = Template.bind({});
Report.args = {
    icon: '/ReportIcon.svg',
    setType: 'Report',
};

export const Save = Template.bind({});
Save.args = {
    icon: '/SaveIcon.svg',
    setType: 'Save',
};