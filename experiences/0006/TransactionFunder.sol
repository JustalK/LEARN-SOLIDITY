// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransactionFunder {
    mapping(address => uint256) public funderMoney;
    address[] public funders;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Only owner can do that!");
        _;
    }

    function fund() public payable {
        funderMoney[msg.sender] += msg.value;
        funders.push(msg.sender);
    }



    function withdraw() public onlyOwner payable {
        payable(owner).transfer(address(this).balance);
        for (uint256 funderIndex = 0; funderIndex < funders.length; funderIndex++) {
            address funder = funders[funderIndex];
            funderMoney[funder] = 0;
        }
        funders = new address[](0);
    }
}