// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ImmutableConstant {
    uint8 public constant NUMBER_SMALL = 50;
    uint256 public constant NUMBER = 50; // <= Directly saved in byteCode on the contract
    uint256 public NUMBER_NOT_CONSTANT = 50; // <= vs stored on the contract, the compiler has to create a getter
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

    // 420 gas
    function getNumber() public pure returns (uint256) {
        return NUMBER;
    }

    // 382 gas
    function getNumber2() public pure returns (uint256) {
        return NUMBER_SMALL;
    }

    // 361 gas
    function getNumber3() public pure returns (uint8) {
        return NUMBER_SMALL;
    }

    // 427 Gas
    function getNumber4() public pure returns (uint256) {
        return NUMBER_SMALL;
    }

    // 382 gas
    function getTheSameNumberWithAVeryLongNameForTheFunction() public pure returns (uint256) {
        return NUMBER_SMALL;
    }

    // 2477 gas
    function getNumberNotConstant() public view returns (uint256) {
        return NUMBER_NOT_CONSTANT;
    }
}