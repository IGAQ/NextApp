import React from 'react';

import {CustomProfile} from './index';

export default {
    title: 'Template/Common/CustomProfile',
    component: CustomProfile,
    argTypes: {},
};

const Template = (args) => <CustomProfile {...args} />;

export const Default = Template.bind({});
Default.args = {};
