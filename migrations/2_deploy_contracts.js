const Demo_Contract = artifacts.require("HelloWorld");

module.exports = function(deployer) {
  deployer.deploy(Demo_Contract);
};
