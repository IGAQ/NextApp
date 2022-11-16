import React from 'react';

import {MobileNav} from './MobileNav';

export default {
    title: 'Organisms/Common/MobileNav',
    component: MobileNav,
    argTypes: {},
};

const Template = (args) => <MobileNav {...args} />;

export const Default = Template.bind({});
Default.args = {};

