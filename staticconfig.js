var rootdir = env.rootdir || __dirname;
var appConfig = require('appconfig');
var staticConfig = require(rootdir + appConfig.ConfigurationFilePath.StaticAsset);

module.exports = staticConfig;
