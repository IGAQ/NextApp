import React from 'react';

import {MaxTextArea} from './index';

export default {
    title: 'Molecules/MaxTextArea',
    component: MaxTextArea,
    argTypes: {
        backgroundColor: {control: 'color'},
        text: {control: 'text'},
        maxLength: {control: 'number'},
        label: {control: 'text'},
        rows: {control: 'number'},
        placeholder: {control: 'text'},
    },
};

const Template = (args) => <MaxTextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: '250',
    setText: '250',
    maxLength: 250,
    name: 'name',
    label: 'label',
    rows: 5,
    placeholder: 'placeholder',
};