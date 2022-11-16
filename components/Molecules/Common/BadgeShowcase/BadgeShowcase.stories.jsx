import React from 'react';

import {BadgeShowcase} from './index';

export default {
    title: 'Molecules/Common/BadgeShowcase',
    component: BadgeShowcase,
    argTypes: {},
};

const Template = (args) => <BadgeShowcase {...args} />;

export const Default = Template.bind({});
Default.args = {};
