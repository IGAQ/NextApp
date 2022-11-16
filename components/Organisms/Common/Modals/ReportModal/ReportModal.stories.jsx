import React from 'react';

import {ReportModal} from './index';

export default {
    title: 'Organisms/Common/Modals/ReportModal',
    component: ReportModal,
    argTypes: {},
};

const Template = (args) => <ReportModal {...args} />;

export const Default = Template.bind({});
Default.args = {};