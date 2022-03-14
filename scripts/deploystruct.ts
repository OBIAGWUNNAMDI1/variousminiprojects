/* eslint-disable prettier/prettier */
import { ethers } from "hardhat";

async function mainAcc() {
  const hold = await ethers.getContractFactory("structHolder");

  const holder = await hold.deploy();

  await holder.deployed();
  const address: string = "0xe7306a46752cc00af2ff2b0acd33bcd8ef4448be";
  //   interface owner {
  //     name: string;
  //     age: number;
  //     ownerAddress: string;}
  const owner1 = {
    name: "Bayo",
    age: 24,
    ownerAddress: address,
  };
  // write to contract
  const structnumber = await holder.SetStruct(owner1);
  const structNumberWait = await (await structnumber).wait();
  console.log(structNumberWait.events[0].args[0].age);
  // read to contract
  const output = await holder.getStruct(0);
  console.log(output);
}

mainAcc().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
