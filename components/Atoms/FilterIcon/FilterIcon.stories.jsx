import React from 'react';

import {FilterIcon} from './index';

export default {
    title: 'Atoms/FilterIcon',
    component: FilterIcon,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <FilterIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};