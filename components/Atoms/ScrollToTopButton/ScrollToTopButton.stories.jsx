import React from 'react';

import { ScrollToTopButton } from './index';

const story = {
    title: 'Atoms/ScrollToTopButton',
    component: ScrollToTopButton,
    argTypes: {
        isVisible: { control: 'boolean', defaultValue: true },
    },
};
export default story;

const Template = (args) => <ScrollToTopButton {...args} />;

export const Primary = Template.bind({ isVisible: true });
Primary.args = {
    primary: true,
};