import React from 'react';
import { InPageLoader, PageLoader } from './index';

export default {
    title: 'Atoms/Common/Loader',
    component: PageLoader,
    argTypes: {},
};

const Template = (args) => <PageLoader {...args} />;

export const Default = Template.bind({});
Default.args = {};

