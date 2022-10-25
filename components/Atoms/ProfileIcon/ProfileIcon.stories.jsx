import React from 'react';

import {ProfileIcon} from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'ProfileIcon',
    component: ProfileIcon,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ProfileIcon {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    size: 'Serious',
};

export const Test = Template.bind({});
Test.args = {
    size: 'Casual',
};