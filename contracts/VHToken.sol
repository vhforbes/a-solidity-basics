// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.24;

contract VHToken {
    uint256 public constant totalSupply = 1000;
    uint256 public totalCreated = 0;

    // Keep track of who owns what'
    // Can't iterate, just something that pois one primitive to another.
    mapping(address => uint256) public balances;

    function create(uint256 quantity) public {
        require(quantity + totalCreated <= totalSupply, "Total supply reached!");

        // The += is to the second time he creates so it doesn`t overrite the old balance.
        balances[msg.sender] += quantity;
        // Added the created quantity to keep track of the supply
        totalCreated += quantity;
    }

    function send(uint256 quantity, address destAddress) public {
        // Remove from msg.sender
        // IT WOULD REVERT EVEN WITHOUT REQUIRE
        require(balances[msg.sender] >= quantity, "Not enough VHT");
        balances[msg.sender] -= quantity;

        // Add token to new address
        balances[destAddress] += quantity;
    }

    function getBalance(address _addr) public view returns (uint256) {
        return balances[_addr];
    }
}
