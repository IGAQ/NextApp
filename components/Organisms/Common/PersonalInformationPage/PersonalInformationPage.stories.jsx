import React from 'react';

import { PersonalInformationPage } from './index';

export default {
    title: 'Organisms/Common/PersonalInformationPage',
    component: PersonalInformationPage,
    argTypes: {},
};

const Template = (args) => <PersonalInformationPage {...args} />;

export const Default = Template.bind({});
Default.args = {
};

