require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { INFURA_API_KEY, MNEMONIC } = process.env;

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_API_KEY),
      network_id: '5',
      gas: 4465030
    }
  },
  compilers: {
    solc: {
      version: "0.8.17" // Fetch exact version from solc-bin (default: truf>
      // docker: true,        // Use "0.5.1" you've installed locally with >
      // settings: {          // See the solidity docs for advice about opt>
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }

};
