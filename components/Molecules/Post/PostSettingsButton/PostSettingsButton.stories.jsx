import React from 'react';

import {PostSettingsButton} from './index';
import {iconsPaths} from '../../../../lib/constants/iconsPaths';

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
    icon: iconsPaths.reportIcon,
    setType: 'Report',
};

export const Save = Template.bind({});
Save.args = {
    icon: iconsPaths.saveIcon,
    setType: 'Save',
};