import React from 'react';

import { OTDPrompt } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'OTD/Atoms/Prompt',
    component: OTDPrompt,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <OTDPrompt {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    prompt: 'Do you have a same-gender crush? Who?',
};

export const Story = Template.bind({});
Story.args = {
    prompt: 'I kissed a girl and I liked it, the taste of her cherry chapstick..', 
};
