import React from 'react';

import {OTDBase} from './index';

export default {
    title: 'Template/OfTheDay/Base',
    component: OTDBase,
    argTypes: {},
};

const Template = (args) => <OTDBase {...args} />;

export const Default = Template.bind({});
Default.args = {};
