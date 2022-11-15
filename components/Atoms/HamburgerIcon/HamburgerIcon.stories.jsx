import React from 'react';

import {HamburgerIcon} from './index';

export default {
    title: 'Atoms/HamburgerIcon',
    component: HamburgerIcon,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <HamburgerIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 25,
};

