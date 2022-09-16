import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchTemplate, { SearchTemplateProps } from './SearchTemplate';
import { mockSearchTemplateProps } from './SearchTemplate.mocks';

export default {
  title: 'utility/SearchTemplate',
  component: SearchTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SearchTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchTemplate> = (args) => (
  <SearchTemplate {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSearchTemplateProps.Search,
} as SearchTemplateProps;
