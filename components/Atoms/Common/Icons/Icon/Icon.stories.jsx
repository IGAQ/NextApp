import React from 'react';

import {Icon} from './index';
import {iconsPaths} from '../../../../../lib/constants/iconsPaths';
import {badgesPaths} from '../../../../../lib/constants/badgesPaths';

export default {
    title: 'Atoms/Common/Icons/Icon',
    component: Icon,
    argTypes: {
        icon: {
            control: 'select',
            options: [
                ...iconsPaths,
                ...badgesPaths.flags,
                ...badgesPaths.avatars,
                ...badgesPaths.pronouns,
                ...badgesPaths.openness,
                '/IGAQLogo.svg',
            ],
            description: 'The icon to display. Will be loaded from the public folder. Defaults to /ReportIcon.svg',
            defaultValue: iconsPaths.reportIcon,
        },
        size: {
            control: 'text',
            defaultValue: '1',
            description: 'Size of the icon in rem',
        },
        cssTransform: {
            control: 'text',
            defaultValue: 'none',
            description: 'CSS transform property https://developer.mozilla.org/en-US/docs/Web/CSS/transform',
        },
        colorHexCode: {
            control: 'color',
            defaultValue: '#000000',
        },
    },
};

const Template = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    colorHexCode: '#da0000',
};