import React from 'react';

import {NewPostModal} from './index';

export default {
    title: 'Organisms/Post/NewPostModal',
    component: NewPostModal,
    argTypes: {},
};

const Template = (args) => <NewPostModal {...args} />;

export const Default = Template.bind({});
Default.args = {};