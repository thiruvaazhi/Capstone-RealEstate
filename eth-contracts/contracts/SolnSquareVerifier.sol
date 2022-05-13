pragma solidity ^0.5.2;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>

import "./verifier.sol";
import "./ERC721Mintable.sol";


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

contract SolnSquareVerifier is meshalContract {
// TODO define a solutions struct that can hold an index & an address
struct solution {
     uint256 Id;
    address Address;

}
// TODO define an array of the above struct

 // TODO define a mapping to store unique solutions submitted
mapping(bytes32 => solution) private solutions;
// TODO Create an event to emit when a solution is added
    event solutionWasAdded(address solution);
// TODO Create a function to add the solutions to the array and emit the event

function addSolution( address Address, uint256 Id, bytes32 solutionHash) public {
    
         solutions[solutionHash] = solution({
                                        Id: Id,
                                        Address: Address
                                });
         emit solutionWasAdded(Address);
 
    }
 Verifier contractVerifier;
    constructor
    (
        address contractVerifierAddress
    )
    public
    {
         contractVerifier = Verifier(contractVerifierAddress);
    }
// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly

    function mintNewNFT(address Address, uint256 Id,
        
            uint[2] memory a,
            uint[2] memory a_p,
            uint[2][2] memory b,
            uint[2] memory b_p,
            uint[2] memory c,
            uint[2] memory c_p,
            uint[2] memory h,
            uint[2] memory k,
            uint[2] memory input
        ) public returns (bool) {
         
         require(contractVerifier.verifyTx(a, a_p, b, b_p, c, c_p, h, k, input), "solution is not valid");

        // require(solutions[Address].Address != Address, "solution exists");

        //hash submitted solution solution 
        bytes32 solutionHash = keccak256(abi.encodePacked(a, a_p, b, b_p, c, c_p, h, k, input));
        require(solutions[solutionHash].Address == address(0), "solution exists");
        addSolution( Address, Id,solutionHash);
        return mint(Address, Id, "url");
    }
  

}





































