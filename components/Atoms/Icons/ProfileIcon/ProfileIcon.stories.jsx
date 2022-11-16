import React from 'react';

import {ProfileIcon} from './index';

export default {
    title: 'Atoms/Icons/ProfileIcon',
    component: ProfileIcon,
    argTypes: {
        size: {control: 'text'},
    },
};

const Template = (args) => <ProfileIcon {...args} />;

export const Base = Template.bind({});
Base.args = {
    size: 'Serious',
};

export const Test = Template.bind({});
Test.args = {
    size: 'Casual',
};
