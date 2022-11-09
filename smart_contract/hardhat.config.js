require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/o0m3CVO9VK3TIuScPcFPoBp-LvkMJIWg',
      accounts: ['1cd45501c30e1e7978fe162974b42f13d91249732abd91f4ffddb70c3f128169'],
    },
  },
};