import { ComponentStory, ComponentMeta } from '@storybook/react';
import AuthBtnTemplate, { AuthBtnTemplateProps } from './AuthBtnTemplate';
import { mockAuthBtnTemplateProps } from './AuthBtnTemplate.mocks';

export default {
  title: 'buttons/AuthnBtnTemplate',
  component: AuthBtnTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AuthBtnTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AuthBtnTemplate> = (args) => (
  <AuthBtnTemplate {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAuthBtnTemplateProps.btn,
} as AuthBtnTemplateProps;
