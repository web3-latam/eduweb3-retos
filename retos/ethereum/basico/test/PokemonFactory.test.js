const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("PokemonFactory", function () {
  let PokemonFactory;
  let pokemonFactory;

  before(async function () {
    PokemonFactory = await ethers.getContractFactory("PokemonFactory");
    pokemonFactory = await PokemonFactory.deploy();

    await pokemonFactory.deployed();
  });

  it("Should say Welcome Pokemon Masters", async function () {
    let result = await pokemonFactory.hello();
    expect(result).to.be.equals("Welcome Pokemon Masters");
  });

});