import type { StorybookConfig } from '@storybook/angular';
import type { RuleSetRule } from 'webpack';

const config: StorybookConfig = {
  stories: ['../**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  webpackFinal: async (config) => {
    const cssRule: RuleSetRule = {
      test: /\.css$/,
      resourceQuery: { not: [/ngResource/, /ngGlobalStyle/] },
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: { importLoaders: 1 },
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            postcssOptions: {
              plugins: [
                require('@tailwindcss/postcss')(),
              ],
            },
          },
        },
      ],
    };

    config?.module?.rules?.push(cssRule);
    return config;
  }
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
