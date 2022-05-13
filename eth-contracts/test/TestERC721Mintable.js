var ERC721MintableComplete = artifacts.require('meshalContract');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            for(var c = 10; c < 17; c++) {
                await this.contract.mint(accounts[c], c, "url");
            }
        })

        it('should return total supply', async function () { 
            
            var total  = await this.contract.totalSupply(); 
            assert.equal(total, 7,"balance is not correct");
        })

        it('should get token balance', async function () { 
            var balance = await this.contract.balanceOf(accounts[10]); 
            assert.equal(balance, 1);
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            var tokenUri = await this.contract.tokenURI(10); 
            console.log("token_uri",tokenUri)
            assert.equal(tokenUri, 'https://udacity.meshal.io/token/10');
        })

        it('should transfer token from one owner to another', async function () { 
            
            let account11=  await this.contract.ownerOf(11,{from: account_one});
            let account12=  await this.contract.ownerOf(12,{from: account_one});
            
            await this.contract.transferFrom(account11,account12,11, {from: account11});
           
            newOwnerOf11 = await this.contract.ownerOf(11,{from: account_one});
            assert.equal(newOwnerOf11, account12, "new owner is not correct");


        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 

            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
          let  reason = "ok";
            try{
             
            let x = await this.contract.mint(accounts[19], 19, "url",{from: account_two});
           } catch(e ){
              console.log("error",e.reason)
              reason = e.reason;
          }
          assert.equal(reason, 'not the contract owner');


        })

        it('should return contract owner', async function () { 
            var contractOwner  = await this.contract.getOwner.call({from: account_one}); 
            assert.equal(contractOwner, account_one,"contract owner is not correct");
        })

    });
})