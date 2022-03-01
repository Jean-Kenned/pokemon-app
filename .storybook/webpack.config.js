module.exports = async ({ config }) => {
    config.resolve.alias = {
      'react-native$': 'react-native-web',
      'react-native-svg': 'react-native-svg/lib/commonjs/ReactNativeSVG.web',
    };

    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-react-loader',
    });
    return config;
  };