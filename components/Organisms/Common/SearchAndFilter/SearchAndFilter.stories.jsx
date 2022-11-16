import React from 'react';

import {SearchAndFilter} from './index';

export default {
    title: 'Organisms/Common/SearchAndFilter',
    component: SearchAndFilter,
    argTypes: {},
};

const Template = (args) => <SearchAndFilter {...args} />;

export const Default = Template.bind({});
Default.args = {};