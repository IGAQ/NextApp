import React from 'react';

import {StyledSwitch} from './index';

export default {
    title: 'Atoms/StyledSwitch',
    component: StyledSwitch,
    argTypes: {},
};

const Template = (args) => <StyledSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {};
