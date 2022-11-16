import React from 'react';
import IGAQLoader from '../../../../public/IGAQ_loader.json';
import { Loader } from './index';

export default {
    title: 'Atoms/Common/Loader',
    component: Loader,
    argTypes: {},
};

const Template = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};

