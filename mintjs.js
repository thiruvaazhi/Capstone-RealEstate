const HDWalletProvider = require("truffle-hdwallet-provider")
const web3 = require('web3')
const MNEMONIC = "before steel list survey awkward cement avocado execute napkin neglect mutual cost"
const INFURA_KEY = "a570646c41574367b9cb6185d09446bd"
const NFT_CONTRACT_ADDRESS = "0xe8eC6f2448a81BC570329483C99a4223Ea453963"
const OWNER_ADDRESS = "0x854AEA2dF207be01a0808c95468a37F2231290c9"
const NETWORK = "rinkeby"
const NUM_PROOFS = 5
const NUM_LOOTBOXES = 4
const DEFAULT_OPTION_ID = 0
const LOOTBOX_OPTION_ID = 2
var  proofs = [];
const account2 = "0x4e26a3225477486a12505b76E6529Bf6489bA934"

proofs[0]= {
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

proofs[1] = {
	"proof":
	{
		"A":["0x10d5fb49fab7817f9ae5b375866aa0943bbd9b1fd87665670812ed3a0c71c560", "0x684d3f7b41364f49f5b24b1f89a0a94ef622ec6ffccd468664d427ef581205c"],
		"A_p":["0x2599218d856c7588e0bd40d6376329625b63e71165f94f675e354e05049cac57", "0x23d665feb32b3f2086e39b65a86e22429628433aea1c22f26ad299465a6425cc"],
		"B":
			[["0x2800e5a9ee6ffa505ca5c51fef12e300deb18f710a454f759bb8671979f83327", "0x10114ca80ea8ccee86041d217ebef122b390fa76e747fd957dcce5153c90b7ca"], ["0x11ce5f0a9821e673b4db3758e02a7481782de1af75818d96b2649290370ecd58", "0x1ec1697c7a70e8514966d60aa4d9a5f0a2435df0b413564126c592698184fc74"]],
		
		"B_p":["0x29855069b6809b58f0aa8d86402096fea08dc139e89fab5b5ae09cdf0eebaca7", "0x13902bff77854d4e5915fec916528723bc323a1e91d3e925e999a7fa1b6b4d62"],
		"C":["0x153142d34be30f5d62c87601f160bd3e1bbd33e007197c9802f0113aaed42702", "0x2f3f0c0d339741c996564ed4246588cc0df05978df7871d178b163f64b524ab2"],
		"C_p":["0xd2b31e2c66ede403bddde68f22ef40e6aa4860ccb2d134815a3418241964801", "0x19ff76cdfe24bf1333a7b4a253c02d019d160410dc13017f67690e64c6e458d8"],
		"H":["0x1647a2403659964060ed7c4df3b343ab8d784e46812dbeacfba407768fd01f00", "0x16c49c4770bdb0bdd7320d4b2c8929b944875b011ae1cd0654caf12a986657e1"],
		"K":["0x131ccb8dc2fbdc322e6837037ef4a58d679f458882d1af23531916a9d0cd9f9e", "0x29f14f7128c959b06b3177862cfa309a84af35eea5efa8ca4f2b07bfdb157f73"]
	},
	"input":[4,1]
}
proofs[2] = {
	"proof":
	{
		"A":["0x1275a1947572675db0b1c2f35320a2da45f53dcfbf114621da6d7cb26f8f8a1c", "0x26c69ff915272d2962a212e31017913062d86de7212bdaa1759f843c09d9515a"],
		"A_p":["0x1e6714a53369d6c14f06346126bd5e3b3a16bc14fb169245cfbdf351fcd030e0", "0x286d0b2aa675aaf4ec0155c088d00188d9ddc3e4149a23d1caf3eb062980ade6"],
		"B":
			[["0x54db0bd652a1eab7496fee01ebc538ef34b74645410a5736cb591bbb582e1b3", "0x19ad64b49b8d0c11c14b5221f41a099fe442335dff3ff43b4415850d3346d584"], ["0x2ccc9937c20143c9a41360946b85d0fd6137c1d962d0a1a489af4f22951cc587", "0x2773a792e138840c3e200be028c6ae9b6ef9ebfc3d215d07875b65341476fbb4"]],
		
		"B_p":["0x1d7e9a60a61a7e219e67a3955a6414e015fa3b8e75afd792eb1f8ec0fb05b968", "0x115e3bc20853b4cb6381776798ecc70952e3e65e5262ea5b7115a3864fde41c6"],
		"C":["0x2080fee710e180336a9bfe8491d0e3d9b11bbd0e8e68ff418497a1e56d3394bb", "0x1b6d016386148130d9e2c52116fc0633eb8979f9b00c743fe51b70b8b68422a8"],
		"C_p":["0xc7f0993d2c8cb8e18c0d19d619d847ea3b4b45139786cdf8aca53990b92de28", "0x1206edeae834b9acebaa9a50109192884fd3038c16cbb49536db54f9fdfa88d9"],
		"H":["0x1954c88d47ce415681c40bc83d99827cdf095b0d0b5a7c6a2ed2d1658f04a9cc", "0x1857b77b9ca451e4450f87624e9fce14dd0a8c4f86e4fb3cc8ca59ed376ae863"],
		"K":["0x3b3f8dd449bab621df9e4e8cb312bc15d61c70543ec11181a1fa5d04bd55f9", "0x90ba064f58f851144ab2d782e03cc6f3b8509f8c04aebb446ffafca87be0f4b"]
	},
	"input":[16,1]
}

proofs[3] = {
	"proof":
	{
		"A":["0x2113dd4ed2d10658b3e93016a1564c27479657e97fba354746605322f158e1dc", "0x138e8110f5dee06beaddc7fb8484c2ebd2575c5d1572d7db613305cdb81da65b"],
		"A_p":["0x25fe23d5d650372846266d8b5d2c0967bb99cea5619142975c39d714d202cd53", "0x25e3b8d8d9064a1c5dcabb64147dec28a0582f174cc5f8079a7ef9f661e243ee"],
		"B":
			[["0x26b07b31820c1eed6821e4239886831c08b9cb636db94983ab1f246825160b0b", "0x94a378f095a900b0c7fe965f683ed7082f869e868ca1c94ebe8383df17c76c"], ["0x1799d386b7c8f6d1a8eea9f887bd5ff811308d23099b2008249fa62d12ad6701", "0x2de6fa590b56a41668e2fb4903a26974c989165dd531e623aa99d11646f78fd7"]],
		
		"B_p":["0xffd2cae7e43eb5af04411909f0a809a327c3a9993602a7230c02b885bac0917", "0x57bb26716cb01aae6df77b3806a241034afd9a2d66b3ba325839fba1dda050f"],
		"C":["0x1a4b15fd96a577d2f4237eba51c7fd2cdfa368354abb9013e29bd382dd1987df", "0xaddde6ce5c9cf87528b3ed3db4f3d9dd48170648d965455d8da917109229b4b"],
		"C_p":["0x17a1b49553815b5f5b93813d517a0b83a899d907a5a2888279a730b1443cb104", "0xd0ce86288f55679ce99cc0c95e71686c029e93bb96e76f2bd5a2b671507a025"],
		"H":["0x2fc42dba311621e1c0cdf7c80f76a1d12228c75967e3d318c4de6ed8bceeaae1", "0x2bc911e9bef4beadb716f9f9901a9d49080999de1e69e62bbbadf654843d74b9"],
		"K":["0x24a0317a857ad5ed82eb4b584e2d9f97fa4116175c0de3ec1c45438e3309b58a", "0x1935fc4f5eb4bdf243d3b355b645d45695b7d94cfb3814da2c353d02d1b4cc4f"]
	},
	"input":[25,1]
}
 
proofs[4] =  {
	"proof":
	{
		"A":["0x2c54c56ed324aa0bb4f4bf90deb922e3dd7fa1caf68193c9ba5ab9a020127d71", "0x863b92d44fc8729ba97b9c4202ef702ed305fdaa7949cf2ad89a21daef3c652"],
		"A_p":["0x20ce207c49ca4560e3863ea0e33ed210be96d23faa10468c668ec77ca37a8362", "0x9d9a0f694597aae3808758266bccd6e319edd1644f28b28ae136fb861972985"],
		"B":
			[["0x1ca37225557a119d02f15f491b5438daebb321abb0fd2c395ccc9179ca7455f4", "0xcf3e8f11d88fbf305b5b5726024cd404a68038c32f7ddf0148b019a1dfd4921"], ["0x2a0943fb2fc7e66b31fbfcc790e66dc4ddc2713533beebac4eb065ba6c9171e", "0x12b851be5189bc287cece528dcae055732b4d2e14faf4f20e850e996a7adbf3a"]],
		
		"B_p":["0x2f3b326c27544115ddcc68ebb99d23d5ed02433802f0fd76af9e2f3330d6ada1", "0x268612f175c47059b51ae0e90eb4987513931b27d9d43d8ca2f169f1c4550dcf"],
		"C":["0x8ce65d285da18a5fd7c8a591047cb874f9536b40ea3784a5690853b801dfed9", "0x9752b77afd769923b477f6604affecebe910c015e038073f266f402a67e29ca"],
		"C_p":["0x2470c6a9668d01ac41dd1f50ffa91a31001efd39ecbc10771f68747583c17fae", "0x178a48b0d6d75a588eb87d6383aff02bdc1f4e9711135c11ba4f56a01626ca64"],
		"H":["0xda84e14f0b782940192053086dbcc802e4e338b11024b83e01045add6602f5b", "0x287559184fab371a3685d191618b44d6ea5a09cab8b4957e5d6eb409bc77b2ab"],
		"K":["0x315cf68882def34d7abd753c900d693039f4a5e68c79167cb3c77f8adbc63a2", "0x51f4891e605591e393f7393d135e1509daa5f0eac4da137f43d4ec597f9f0ed"]
	},
	"input":[36,1]
}

if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
    console.error("Please set a mnemonic, infura key, owner, network, and contract address.")
    return
}

const CONTRACT_ABI = require('./eth-contracts/build/contracts/SolnSquareVerifier');
const NFT_ABI = CONTRACT_ABI.abi;

async function main() {
    const provider = new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io/${INFURA_KEY}`)
    const web3Instance = new web3(
        provider
    )

    if (NFT_CONTRACT_ADDRESS) {
        const nftContract = new web3Instance.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS, { from:OWNER_ADDRESS, gasLimit: "1000000" })

        // Creatures issued directly to the owner.
         for (var i = 2; i < NUM_PROOFS; i++) {
            let i = 2
            try{
              
                        
                      
                
                const result = await nftContract.methods.mintNewNFT(
                    account2, 
                    5, 
                proofs[i].proof.A, 
                proofs[i].proof.A_p, 
                proofs[i].proof.B, 
                proofs[i].proof.B_p, 
                proofs[i].proof.C, 
                proofs[i].proof.C_p, 
                proofs[i].proof.H, 
                proofs[i].proof.K, 
                proofs[i].input
            ).send({ from: OWNER_ADDRESS, gas:  5510328});
              
            console.log("Minted Token. Transaction: " + result); 
          
          } catch(error){
                console.log("error in minting token ",error);
              }


          }
    } 

     else if (FACTORY_CONTRACT_ADDRESS) {
       const factoryContract = new web3Instance.eth.Contract(FACTORY_ABI, FACTORY_CONTRACT_ADDRESS, { gasLimit: "1000000" })

       // Creatures issued directly to the owner.
     for (var i = 0; i < NUM_CREATURES; i++) {
           const result = await factoryContract.methods.mint(DEFAULT_OPTION_ID, OWNER_ADDRESS).send({ from: OWNER_ADDRESS });
           console.log("Minted creature. Transaction: " + result.transactionHash)
       }

       // Lootboxes issued directly to the owner.
       for (var i = 0; i < NUM_LOOTBOXES; i++) {
          const result = await factoryContract.methods.mint(LOOTBOX_OPTION_ID, OWNER_ADDRESS).send({ from: OWNER_ADDRESS });
           console.log("Minted lootbox. Transaction: " + result.transactionHash)
       }
   }
}

main()