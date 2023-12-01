// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transaction {
    mapping(address => uint256) public addresses;
    function fund() public payable {
        require(msg.value >= 1 * 10 ** 18, "Not enough money paid!");
        addresses[msg.sender] += msg.value;
    }

    function withdraw() public payable {
        payable(msg.sender).transfer(address(this).balance);
    }
}