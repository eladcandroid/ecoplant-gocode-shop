const { override, addDecoratorsLegacy } = require("customize-cra");

/* config-overrides.js */
module.exports = function (config, env) {
  config = override(addDecoratorsLegacy())(config, env);

  return config;
};
