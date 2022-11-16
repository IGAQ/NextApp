import React from 'react';

import {ChipGroup} from './index';

export default {
    title: 'Molecules/ChipGroup',
    component: ChipGroup,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <ChipGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
    postTags: [{tagName: 'serious'}, {tagName: 'advice'}],
    onChange: () => {
    },
};

export const Selected = Template.bind({});
Selected.args = {};