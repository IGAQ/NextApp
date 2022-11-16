import React from 'react';

import {SearchBar} from './index';

export default {
    title: 'Molecules/SearchBar',
    component: SearchBar,
    argTypes: {},
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {};