import React from 'react';

import {Badge} from './index';

export default {
    title: 'Atoms/Badge',
    component: Badge,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {};

