import React from 'react';

import {NotificationBox} from './index';

export default {
    title: 'Molecules/Common/NotificationBox',
    component: NotificationBox,
    argTypes: {},
};

const Template = (args) => <NotificationBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
