// // SPDX-License-Identifier: SEE LICENSE IN LICENSE
// pragma solidity ^0.8.24;

// contract Counter {
//     uint256 public count;
//     address public owner;

//     constructor(uint256 _initialCount) {
//         count = _initialCount;
//         owner = msg.sender; // msg => Global variable
//     }

//     modifier onlyOwner() {
//         require(msg.sender == owner, "Not Owner");
//         _; // This is like the function that will run if the requires passe. Like next()
//     }

//     function get() public view returns (uint256) {
//         return count;
//     }

//     function inc() public {
//         count += 1;
//     }

//     function dec() public onlyOwner {
//         require(count > 0, "You can't decrease 0");
//         count -= 1;
//     }
// }
