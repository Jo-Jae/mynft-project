// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MintNft is ERC721Enumerable, Ownable {
   string metadataUri;
   mapping(address => uint) whitelist;

        constructor(string memory _name, string memory _symbol, string memory _metadataUri) ERC721(_name, _symbol) Ownable(msg.sender) {
        metadataUri = _metadataUri;
    }

    function mintNft() public {
        require(totalSupply() < 9, "No more mint.");
        require(whitelist[msg.sender] > 0, "Not whitelist");

        uint tokenId = totalSupply() + 1;

        _mint(msg.sender, tokenId);

        whitelist[msg.sender]--;
    }

   function tokenURI(uint _tokenId) public view override returns (string memory) {

            return string(abi.encodePacked(metadataUri, Strings.toString(_tokenId), ".json")); 
    
    }

    function setWhitelist(address _whitelist, uint _amount) public onlyOwner {
        whitelist[_whitelist] = _amount;
    }
    
}