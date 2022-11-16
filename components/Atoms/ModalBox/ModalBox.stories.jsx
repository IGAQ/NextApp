import React from 'react';

import {ModalBox} from './index';

export default {
    title: 'Atoms/ModalBox',
    component: ModalBox,
    argTypes: {},
};

const Template = (args) => <ModalBox {...args} />;

export const Default = Template.bind({});
Default.args = {};

