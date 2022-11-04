import React from 'react';

import { Icon } from './index';

const story = {
    title: 'Atoms/Icon',
    component: Icon,
    argTypes: {
        icon: {
            control: 'select',
            options: [
                '/ReportIcon.svg',
                '/arrow.svg',
                '/Carousel_1.svg',
                '/Carousel_2.svg',
                '/Carousel_3.svg',
                '/CommentsIcon.svg',
                '/defaultFlag.svg',
                '/DefaultProfile.svg',
                '/IGAQLogo.svg',
                '/PrideFlag.svg',
                '/profileIcon2.svg',
                '/profileIcon3.svg',
                '/profileIcon4.svg',
                '/profileIcon5.svg',
                '/profileIcon6.svg',
                '/SaveIcon.svg',
                '/vercel.svg',
            ],
            description: 'The icon to display. Will be loaded from the public folder. Defaults to /ReportIcon.svg',
            defaultValue: '/ReportIcon.svg',
        },
        size: {
            control: 'text',
            description: 'Size of the icon in rem',
        },
        cssTransform: {
            control: 'text',
            description: 'CSS transform property https://developer.mozilla.org/en-US/docs/Web/CSS/transform',
        },
    },
};
export default story;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Icon',
};