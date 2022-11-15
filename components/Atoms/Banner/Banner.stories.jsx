import React from 'react';

import {Banner} from './index';

export default {
    title: 'Atoms/Banner',
    component: Banner,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <Banner {...args} />;

export const WelcomeBack = Template.bind({});
WelcomeBack.args = {
    bannerTitle: 'Welcome Back!',
    bannerBgColor: '#A5CEFF',
};

export const JoinOurSafeSpace = Template.bind({});
JoinOurSafeSpace.args = {
    bannerTitle: 'Join our safe space!',
    bannerBgColor: '#DFEEFF',
};
