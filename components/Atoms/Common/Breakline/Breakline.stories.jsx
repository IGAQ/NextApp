import React from 'react';

import {Breakline} from './index';

export default {
    title: 'Atoms/Common/Breakline',
    component: Breakline,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <Breakline {...args} />;

export const Default = Template.bind({});
Default.args = {
    width: '100%',
    margin: '0 0 15px 0',
};
