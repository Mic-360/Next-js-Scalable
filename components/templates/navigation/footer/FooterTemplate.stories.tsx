import { ComponentStory, ComponentMeta } from '@storybook/react';
import FooterTemplate, { FooterTemplateProps } from './FooterTemplate';
import { mockFooterTemplateProps } from './FooterTemplate.mocks';

export default {
  title: 'navigation/FooterTemplate',
  component: FooterTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FooterTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FooterTemplate> = (args) => (
  <FooterTemplate {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFooterTemplateProps.footer,
} as FooterTemplateProps;
