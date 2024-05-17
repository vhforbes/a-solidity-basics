import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
};

task("deploy", "Deploys the smart contract", async (taskArgs, hre) => {
  // Here I could import a custom script ....
  const Contract = await hre.ethers.getContractFactory("VHToken");
  const contract = await Contract.deploy();
  console.log("Contract", contract);
});

export default config;
