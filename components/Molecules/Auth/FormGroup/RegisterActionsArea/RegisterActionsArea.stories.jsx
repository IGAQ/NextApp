import React from 'react';

import {RegisterActionsArea} from './index';

export default {
    title: 'Molecules/Auth/FormGroup/RegisterActionArea',
    component: RegisterActionsArea,
    argTypes: {
        onRegister: { action: 'onClick'},
    },
};

const Template = (args) => <RegisterActionsArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};