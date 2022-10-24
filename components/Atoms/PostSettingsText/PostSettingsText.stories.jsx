import React from 'react';

import { PostSettingsText } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Post/Atoms/SettingsText',
    component: PostSettingsText,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PostSettingsText {...args} />;

export const Report = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Report.args = {
    setType: 'Report',
};

export const Save = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Save.args = {
    setType: 'Save',
};
