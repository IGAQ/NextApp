import React from 'react';

import {Loader} from './index';

export default {
    title: 'Atoms/Common/Loader',
    component: Loader,
    argTypes: {},
};

const Template = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};

