import React from 'react';

import {BackArrow} from './index';

export default {
    title: 'Atoms/Common/Buttons/BackArrow',
    component: BackArrow,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <BackArrow {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

