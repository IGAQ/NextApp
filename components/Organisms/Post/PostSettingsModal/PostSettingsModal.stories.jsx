import React from 'react';

import {PostSettingsModal} from './index';

export default {
    title: 'Organisms/Post/SettingsModal',
    component: PostSettingsModal,
    argTypes: {},
};

const Template = (args) => <PostSettingsModal {...args} />;

export const Default = Template.bind({});
Default.args = {};