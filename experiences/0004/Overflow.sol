// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MathSpecial {
    function add(uint8 x) public pure returns(uint8) {
        return 255 + x; 
    }
}

contract Overflow {
    event Log(string message);
    MathSpecial public mathSpecial;

    constructor() {
        mathSpecial = new MathSpecial();
    }

    function overflow(uint8 y) public {
        try mathSpecial.add(y) {
            emit Log("Good");
        } catch {
            emit Log("Error");
        }
    }
}