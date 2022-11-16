import React from 'react';

import {SubmissionModal} from './index';

export default {
    title: 'Organisms/Common/Modals/SubmissionModal',
    component: SubmissionModal,
    argTypes: {},
};

const Template = (args) => <SubmissionModal {...args} />;

export const Default = Template.bind({});
Default.args = {};