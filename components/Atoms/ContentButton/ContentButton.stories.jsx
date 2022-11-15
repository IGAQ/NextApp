import React from 'react';

import {ContentButton} from './index';

export default {
    title: 'Post/Atoms/ContentButton',
    component: ContentButton,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <ContentButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

