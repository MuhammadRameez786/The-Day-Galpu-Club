require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    // hardhat: {},
    
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/xIBH7P9EZ_MMBB70aN7KVWF8a6LnPRBg",
      accounts: [
        `0x${"096ad43b71bc2ee6deb3de5af2e8ded614c406a819fbe4d3a324b6e68ab94bbf"}`,
      ],
    },
  },
};
