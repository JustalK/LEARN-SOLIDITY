// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ImmutableConstant {
    uint256 public constant NUMBER = 50; // <= Directly saved in byteCode on the contract
    uint256 public NUMBER_NOT_CONSTANT = 50; // <= vs stored on the contract
    // Calcul gas price
    // Price per gas: https://etherscan.io/gastracker
    // Convert Gwei: https://eth-converter.com/
    // 376 * 28000000000 = 10 528 000 000 000 wei
    // Convert EthGas with Price of Eth
    // 0,000010528 Eth * 2160 = 0,022 $ per call
    // vs
    // 2432 gas => 0.147 $ per call

    // 395 gas
    address public immutable iOwner;

    // 2552 gas
    address public owner;

    constructor() {
        iOwner = msg.sender;
        owner = msg.sender;
    }

    // 376 gas
    function getNumber() public pure returns (uint256) {
        return NUMBER;
    }

    // 2432 gas
    function getNumberNotConstant() public view returns (uint256) {
        return NUMBER_NOT_CONSTANT;
    }
}