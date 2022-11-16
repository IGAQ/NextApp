import React from 'react';

import {Splash} from './index';

export default {
    title: 'Template/Common/Splash',
    component: Splash,
    argTypes: {},
};

const Template = (args) => <Splash {...args} />;

export const Default = Template.bind({});
Default.args = {};
