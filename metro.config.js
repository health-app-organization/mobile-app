const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname, { isCSSEnabled: true });

config.resolver.extraNodeModules = {
    "@components": path.resolve(__dirname, "components"),
    "@screens": path.resolve(__dirname, "screens"),
    "@utils": path.resolve(__dirname, "utilities"),
    "@assets": path.resolve(__dirname, "src/assets"),
};

config.watchFolders = [
    path.resolve(__dirname, "components"),
    path.resolve(__dirname, "screens"),
    path.resolve(__dirname, "utilities"),
    path.resolve(__dirname, "assets"),
];

module.exports = withNativeWind(config, { input: "./global.css" });
