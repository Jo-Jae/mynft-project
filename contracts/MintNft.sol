// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MintNft is ERC721Enumerable {
   string metadataUri;
   mapping(address => bool) whitelist;

        constructor(string memory _name, string memory _symbol, string memory _metadataUri) ERC721(_name, _symbol) {
        metadataUri = _metadataUri;
    }

    function mintNft() public {
        require(totalSupply() < 17, "No more mint.");
        require(whitelist[msg.sender], "Not whitelist");

        uint tokenId = totalSupply() + 1;

        _mint(msg.sender, tokenId);

        whitelist[msg.sender] = false;
    }

   function tokenURI(uint _tokenId) public view override returns (string memory) {

            return string(abi.encodePacked(metadataUri, Strings.toString(_tokenId), ".json")); 
    
    }

    function setWhitelist(address _whitelist) public {
        whitelist[_whitelist] = true;
    }
    
    function isWhitelist(address _whitelist) public  view  returns (bool) {
        return whitelist [_whitelist];
    }
    
}