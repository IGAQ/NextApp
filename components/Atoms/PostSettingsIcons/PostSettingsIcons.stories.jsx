import React from 'react';

import { PostSettingsIcons } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Post/Atoms/SettingsIcons',
    component: PostSettingsIcons,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PostSettingsIcons {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    icon: '/ReportIcon.svg',
};

