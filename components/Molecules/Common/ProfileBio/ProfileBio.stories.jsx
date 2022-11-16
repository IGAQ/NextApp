import React from 'react';

import {ProfileBio} from './index';

export default {
    title: 'Molecules/Common/ProfileBio',
    component: ProfileBio,
    argTypes: {},
};

const Template = (args) => <ProfileBio {...args} />;

export const Default = Template.bind({});
Default.args = {};