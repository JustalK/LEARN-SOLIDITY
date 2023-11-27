// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

contract SimpleStorage {
    uint256 public favoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    People[] public people;
    mapping(string => uint256) public nameToFavoriteNumber;

    People public person = People({
        favoriteNumber: 2,
        name: "justalk"
    });


    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    // Like any getter
    function retrieve() public view returns(uint256) {
        return favoriteNumber;
    }

    // Cannot use anything stored
    function calculAddition(uint256 _favoriteNumber) public pure {
        _favoriteNumber * 2;
    }

    // memory vs storage
    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People({favoriteNumber: _favoriteNumber, name: _name}));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}