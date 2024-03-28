import hre, { ethers } from "hardhat";
import { expect } from "chai";

describe("VHToken", () => {
  it("rejects if total supply has been reached", async () => {
    const VHToken = await hre.ethers.deployContract("VHToken");

    const tx = VHToken.create(1001);
    await expect(tx).to.be.rejectedWith("Total supply reached!");
  });

  it("creates tokens and update total supply", async () => {
    const VHToken = await hre.ethers.deployContract("VHToken");
    await VHToken.create(420);

    expect(await VHToken.totalCreated()).to.equal(420);
  });

  it("retrieves the balance after creation", async () => {
    const [_addr] = await ethers.getSigners();

    const VHToken = await hre.ethers.deployContract("VHToken");
    await VHToken.create(420);

    const getBalanceTx = await VHToken.getBalance(_addr);

    expect(getBalanceTx).to.equal(420);
  });

  it("send token from one address to another", async () => {
    const [address1, address2] = await ethers.getSigners();
    const VHToken = await hre.ethers.deployContract("VHToken");
    await VHToken.create(420);

    await VHToken.send(100, address2);

    const getAddress2BalanceTx = await VHToken.getBalance(address2);

    expect(getAddress2BalanceTx).to.equal(100);
  });

  it("reverts if the user dont have enough", async () => {
    const [address1, address2] = await ethers.getSigners();
    const VHToken = await hre.ethers.deployContract("VHToken");
    await VHToken.create(50);

    const sendTx = VHToken.send(100, address2);

    await expect(sendTx).to.be.revertedWith("Not enough VHT");
  });
});
