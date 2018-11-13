const { injectBabelPlugin } = require('react-app-rewired');

let override = (config, env) => {
  config = injectBabelPlugin(   
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config,
   );
  return config;
}

module.exports = override;
