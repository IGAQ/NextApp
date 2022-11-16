import React from 'react';

import {PostSettingsText} from './index';

export default {
    title: 'Atoms/Post/SettingsText',
    component: PostSettingsText,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <PostSettingsText {...args} />;

export const Report = Template.bind({});
Report.args = {
    setType: 'Report',
};

export const Save = Template.bind({});
Save.args = {
    setType: 'Save',
};
