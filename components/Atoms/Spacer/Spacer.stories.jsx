import React from 'react';

import {Spacer} from './index';

export default {
    title: 'Atoms/Spacer',
    component: Spacer,
    argTypes: {
        display: {control: 'text'},
        getWidth: {control: 'text'},
        getHeight: {control: 'text'},
    },
};

const Template = (args) => <Spacer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    display: 'block',
    getWidth: '3px',
    getHeight: '3px',
};