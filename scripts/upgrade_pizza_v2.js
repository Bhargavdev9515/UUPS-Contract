const { ethers, upgrades } = require("hardhat");

const PROXY = "0xCd1D7061C3c5459CFFB728d47a3a0931F9cf3398";

async function main() {
 const PizzaV2 = await ethers.getContractFactory("PizzaV2");
 console.log("Upgrading Pizza...");
 await upgrades.upgradeProxy(PROXY, PizzaV2);
 console.log("Pizza upgraded successfully");
}

main();