
import {CustomProfile} from './index';

export default {
    title: 'Template/CustomeProfile/Base',
    component: CustomProfile,
    argTypes: {},
};

const Template = (args) => <CustomProfile {...args} />;

export const Default = Template.bind({});
Default.args = {};
