//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract structHolder{
    struct owner {
        string name;
        uint256 age;
        address ownerAddress;
    }
    event out (owner);
    mapping(uint => owner) ownerList;

    uint index = 0 ;

    function SetStruct(owner memory a) public {
        owner storage  s  = ownerList[index];
        s.name = a.name ;
        s.age = a.age;
        s.ownerAddress = a.ownerAddress;

        emit out (s);
   }
   function getStruct(uint indexx) public view returns(owner memory ST){
       ST = ownerList[indexx];
       
   }
}