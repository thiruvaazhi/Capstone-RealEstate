var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
    
var Verifier = artifacts.require('Verifier');

contract('Verifier', accounts => {

    const account_one = accounts[0];
        const account_20 = accounts[19];
    const proof = {
        "proof":
        {
            "A":["0x712a26513f243339aa792675965b0315ca7683cb5c67fc89b9a5a24cea98ce2", "0x2a7ab188cb5917dfe0d0a13ba9987e3686de407ac54d01d4d77379fd7ddbb407"],
            "A_p":["0x2801a294b312185cc089e59b22cf438aa9e127adcbe222cdea292f4bd4581caa", "0x27d767e7112a2336b6616f07bf04486b7b061066a92147c3e366c8c5e04115b4"],
            "B":
                [["0x23cf18b20ab000abd4115832a302c3cef49182df139bf86d0365d9f353e3303c", "0x109533641de4f8b475ecc189d4cb7b2eddbe715e39a5bfd7e48a959e3b0fdb26"], ["0x23b9cfeece4b12f98c23a0203231cc55043565e5cff6ca14b3167fb4c6ccd5d0", "0x194d83bdaade1cf929374d69b3d7ecd6722ac89f4bff10a3bc468d0fd8e9c1c9"]],
            
            "B_p":["0x7df50c1861460be3432a0489cd7236b561051e65cfd13b02199b2179773190b", "0xb59d9564fb7c5d055293f464ba93c41474c55314652109f97b48fe49bf10156"],
            "C":["0x28db031ef06c2592e0bb867b6a3c41c6fb43aeb9792ed2b41f27df24c7ee4d01", "0x21a88b8aa8f9da91588167d3528139307050dec98b9377089c83549f827e0046"],
            "C_p":["0x2d65dfd81b455b3b64d50efce17502f54233f6b4ae0f7b825aff3880445b0b58", "0x26458e53ec435d590bc7e6cd59db7bf7aeae137213eceace5f5f6c161e8fdf38"],
            "H":["0x300aa045b71b13edf5b0ad4b2822f820366c8b65418aae65e9974eb25c1c2a23", "0x21958d56392845b091db5cd6cfa849044dd11c9fe4110385bf04e7b08ee8a4f2"],
            "K":["0x1898d3cd59e243ea1e1f336a786ad9ba482748da60400a48b009a11cb3c9b7cf", "0x699e7bf863aec2d6efb2f70534bf0fdf52b8ade594946a23f63c5417c01c412"]
        },
        "input":[9,1]
    }
    

    describe('test solnSquareVerifier', function () {
        beforeEach(async function () { 

            let verifierContract = await Verifier.new({from: account_one});
            this.contract = await SolnSquareVerifier.new(verifierContract.address, {from: account_one});

 
            
        })

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

it('ERC721 token can be minted for contract - SolnSquareVerifier', async function () { 
    console.log("proof",proof)
let v = await this.contract.mint.call(account_20,
    20, "url",{from: account_one}
    
    
    
  );
  
  assert.equal(v, true, "not valid proof");
})

 // Test if a new solution can be added for contract - SolnSquareVerifier

        it('new solution can be added for contract - SolnSquareVerifier', async function () { 
                console.log("proof",proof)
            let v = await this.contract.mintNewNFT.call(
                account_20,
                20,
                proof.proof.A,
                proof.proof.A_p,
                proof.proof.B,
                proof.proof.B_p,
                proof.proof.C,
                proof.proof.C_p,
                proof.proof.H,
                proof.proof.K,
                proof.input,
                {from: account_one}
              );
              
              assert.equal(v, true, "not valid proof");
        })
 

       
    });
})


 
