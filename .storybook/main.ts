module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    '@storybook/addon-measure',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/preset-ant-design',
  ],
};
