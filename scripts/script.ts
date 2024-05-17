import hre from "hardhat";
async function main() {
  const accounts = await hre.ethers.getSigners();

  // Running tests before deploy
  // await hre.run("test");
  await hre.run("compile");
  await hre.run("compile");

  // Running a custom task
  // await hre.run("deploy");

  // console.log(taskResult);
}

main().catch((error) => {
  console.log("Script failed!!");
  console.log(error);
  process.exitCode = 1;
});
