// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transaction {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function fund() public payable {
        require(msg.value >= 100, "Not enough money paid!");
        // payable(address(this)).transfer(msg.value);
    }

    function withdraw() public payable {
        payable(owner).transfer(address(this).balance);
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}