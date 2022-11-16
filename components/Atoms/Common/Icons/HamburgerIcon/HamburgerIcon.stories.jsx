import React from 'react';

import {HamburgerIcon} from './index';

export default {
    title: 'Atoms/Common/Icons/HamburgerIcon',
    component: HamburgerIcon,
    argTypes: {
        size: {control: 'number'},
    },
};

const Template = (args) => <HamburgerIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 25,
};

