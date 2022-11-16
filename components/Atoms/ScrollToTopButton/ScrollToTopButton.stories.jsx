import React from 'react';

import {ScrollToTopButton} from './index';

export default {
    title: 'Atoms/ScrollToTopButton',
    component: ScrollToTopButton,
    argTypes: {
        isVisible: {control: 'boolean', defaultValue: true},
    },
};

const Template = (args) => <ScrollToTopButton {...args} />;

export const Primary = Template.bind({isVisible: true});
Primary.args = {
    primary: true,
};