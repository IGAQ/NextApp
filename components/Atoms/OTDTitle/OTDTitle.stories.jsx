import React from 'react';

import { OTDTitle } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'OTD/Atoms/Title',
    component: OTDTitle,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <OTDTitle {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    title: 'Queery of the Day',
};

export const Story = Template.bind({});
Story.args = {
    title: 'Story of the Day', 
};
