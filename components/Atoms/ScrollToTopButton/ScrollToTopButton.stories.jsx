import React from 'react';

import { ScrollToTopButton } from './index';

const story = {
    title: 'Atoms/ScrollToTopButton',
    component: ScrollToTopButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};
export default story;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ScrollToTopButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'ScrollToTopButton',
};