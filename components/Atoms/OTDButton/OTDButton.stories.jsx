import React from 'react';

import { OTDButton } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'OTD/Atoms/Button',
    component: OTDButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <OTDButton {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    text: 'Answer',
};

export const Story = Template.bind({});
Story.args = {
    text: 'Story',
};
