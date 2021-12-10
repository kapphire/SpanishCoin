const Migrations = artifacts.require("SpanishCoin");

module.exports = function (deployer) {
  deployer.deploy(SpanishCoin);
};
