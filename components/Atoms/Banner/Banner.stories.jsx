import React from 'react';

import { Banner } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Atoms/Banner',
    component: Banner,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Banner {...args} />;

export const WelcomeBack = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WelcomeBack.args = {
    bannerTitle: 'Welcome Back!',
    bannerBgColor: '#A5CEFF',
};

export const JoinOurSafeSpace = Template.bind({});
JoinOurSafeSpace.args = {
    bannerTitle: 'Join our safe space!',
    bannerBgColor: '#DFEEFF',
};
