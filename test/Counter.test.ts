import hre from "hardhat";
import { expect } from "chai";

describe("Counter", () => {
  it("should get the current count", async () => {
    // Deploy contract
    const initialCount = 10;
    const counter = await hre.ethers.deployContract("Counter", [initialCount]);

    expect(await counter.count()).to.equal(initialCount);
  });

  it("should increase by one the counter", async () => {
    const initialCount = 10;
    const counter = await hre.ethers.deployContract("Counter", [initialCount]);
    await counter.inc();

    expect(await counter.count()).to.equal(initialCount + 1);
  });

  it("should decrease by one the counter", async () => {
    const initialCount = 10;
    const counter = await hre.ethers.deployContract("Counter", [initialCount]);
    await counter.dec();

    expect(await counter.count()).to.equal(initialCount - 1);
  });

  it("should revert if the counter is in 0", async () => {
    const counter = await hre.ethers.deployContract("Counter", [0]);

    await expect(counter.dec()).to.be.revertedWith("You can't decrease 0");
  });

  it("Only the owner can call the functions", async () => {
    const [owner, otherAccount] = await hre.ethers.getSigners();
    const counter = await hre.ethers.deployContract("Counter", [0]);

    // Changing the account that calls the contract function
    await expect(counter.connect(otherAccount).dec()).to.be.revertedWith(
      "Not Owner"
    );
  });
});
