import React from 'react';

import {FilterIcon} from './index';

export default {
    title: 'Atoms/Icons/FilterIcon',
    component: FilterIcon,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <FilterIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};