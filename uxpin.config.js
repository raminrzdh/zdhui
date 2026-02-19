module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.jsx',
          'src/components/ButtonGroup/Root/Root.jsx',
          'src/components/ButtonGroup/Icon/Icon.jsx',
          'src/components/ButtonGroup/Item/Item.jsx',
          'src/components/Checkbox/Checkbox.jsx',
          'src/components/Switch/Switch.jsx',
          'src/components/RadioGroup/RadioGroup.jsx',
          'src/components/RadioGroup/Item/Item.jsx',
        ],
      },
      {
        name: 'Empty Namespace',
        include: ['src/components/ButtonGroup/ButtonGroup.jsx'],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
    settings: { useUXPinProps: true },
  },
  name: 'Example Design System',
};
