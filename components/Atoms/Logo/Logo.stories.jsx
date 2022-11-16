import React from 'react';

import {Logo} from './index';

export default {
    title: 'Atoms/Logo',
    component: Logo,
    argTypes: {
        imageSrc: {
            control: 'text',
            defaultValue: '/IGAQLogo.svg',
        },
        imageAlt: {
            control: 'text',
            defaultValue: 'IGAQ Logo',
        },
        imageWidth: {
            control: 'text',
            defaultValue: '250',
            description: 'Width of the image in pixels',
        },
        imageHeight: {
            control: 'text',
            defaultValue: '250',
            description: 'Height of the image in pixels',
        },
        containerHeight: {
            control: 'text',
            defaultValue: '10',
            description: 'Height of the container in em',
        },
        containerWidth: {
            control: 'text',
            defaultValue: '10',
            description: 'Width of the container in em',
        },
    },
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {};