// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

error Unauthorized();
error UnauthorizedWithAVeryLongCustomErrorToSeeThePricePerGas();
error MyCustomError(string message);
error MyCustomError2(string message);

contract CustomError {

    string public constant ERROR = "This is impossible!";

    // 487 Gas
    function Impossible1() public pure {
        revert("This is impossible!");
    }

    // 465 Gas
    function Impossible2() public pure {
        require(false, "This is impossible!");
    }

    // 198 Gas
    function Impossible3() public pure {
        if (true) { 
            revert Unauthorized();
        }
    }

    // 242 Gas
    function Impossible4() public pure {
        if (true) {
            revert UnauthorizedWithAVeryLongCustomErrorToSeeThePricePerGas();
        }
    }

    //491 Gas
    function Impossible5() public pure {
        if (true) { 
            revert MyCustomError("This is impossible!");
        }
    }

    // 742 Gas
    function Impossible6() public pure {
        if (true) { 
            revert MyCustomError(ERROR);
        }
    }

    // 252 Gas
    function Impossible7() public pure {
        assert(false);
    }
}